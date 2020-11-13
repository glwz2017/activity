
var url = '/common/upfile'; // S3
var timestamp;  // 超时判断

if ("jp" == "jp") {
    url = "http://oss.aliyuncs.com";   //OSS

    accessid = ''
    accesskey = ''
    host = ''
    policyBase64 = ''
    signature = ''
    callbackbody = ''
    filename = ''
    key = ''
    fname = ''
    expire = 0
    g_object_name = ''
    g_object_name_type = ''
    now = timestamp = Date.parse(new Date()) / 1000;
    rname = ''

    //获取上传配置
    function send_request() {
        var xmlhttp = null;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        if (xmlhttp != null) {

            serverUrl = '/order/GetUploadCode/?t=' + new Date().getTime();
            xmlhttp.open("GET", serverUrl, false);
            xmlhttp.send(null);
            return xmlhttp.responseText
        }
        else {
            alert("Your browser does not support XMLHTTP.");
        }
    };

    function check_object_radio() {

        g_object_name_type = "random_name";

    }

    function get_signature() {
        //可以判断当前expire是否超过了当前时间,如果超过了当前时间,就重新取一下.3s 做为缓冲
        now = timestamp = Date.parse(new Date()) / 1000;
        //支持连续上传，每次都取新的文件名，不做3s缓冲。
        //if (expire < now + 3) {
        body = send_request()
        var obj = eval("(" + body + ")");
        host = obj['host']
        policyBase64 = obj['policy']
        accessid = obj['accessid']
        signature = obj['signature']
        expire = parseInt(obj['expire'])
        callbackbody = obj['callback']
        key = obj['dir']
        fname = obj['filename']
        return true;
        //}
        //return false;
    };

    function random_string(len) {
        len = len || 32;
        var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
        var maxPos = chars.length;
        var pwd = '';
        for (i = 0; i < len; i++) {
            pwd += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }

    function get_suffix(filename) {
        pos = filename.lastIndexOf('.')
        suffix = ''
        if (pos != -1) {
            suffix = filename.substring(pos)
        }
        return suffix;
    }

    function calculate_object_name(filename) {
        if (g_object_name_type == 'local_name') {
            g_object_name += "${filename}"
        }
        else if (g_object_name_type == 'random_name') {
            suffix = get_suffix(filename)
            g_object_name = key + fname + suffix
        }
        return ''
    }

    function get_uploaded_object_name(filename) {
        if (g_object_name_type == 'local_name') {
            tmp_name = g_object_name
            tmp_name = tmp_name.replace("${filename}", filename);
            return tmp_name
        }
        else if (g_object_name_type == 'random_name') {
            return g_object_name
        }
    }

    function set_upload_param(up, filename, ret) {
        if (ret == false) {
            ret = get_signature()
        }
        g_object_name = key;
        if (filename != '') {
            suffix = get_suffix(filename)
            calculate_object_name(filename)
        }
        new_multipart_params = {
            'key': g_object_name,
            'policy': policyBase64,
            'OSSAccessKeyId': accessid,
            'success_action_status': '200', //让服务端返回200,不然，默认会返回204
            'callback': callbackbody,
            'signature': signature
        };

        up.setOption({
            'url': host,
            'multipart_params': new_multipart_params
        });

        //up.start();
    }
}

// time1 上传开始的时间戳
function CheckUpload(time1) {
    // 认为上传已超时，结束上传，通知客户重新上传
    if (timestamp == time1) {
        if ("jp" == "jp") {
            alert("ブラウザ或いはネット接続状況をチェックして、再度アップロードしてください。");
        } else {
            alert("please check your internet or network connection then try upload file again!");
        }
    }
}


function UploadGerber() {
    var uploader = new plupload.Uploader({
        runtimes: 'html5,flash,silverlight,html4',
        browse_button: 'pickfiles', // you can pass an id...
        container: document.getElementById('container'), // ... or DOM Element itself
        url: url,
        flash_swf_url: '/img/js/jqueryplus/plupload/plupload-2.3.1/Moxie.swf',
        silverlight_xap_url: '/img/js/jqueryplus/plupload/plupload-2.3.1/Moxie.xap',
        multi_selection: false,
        multipart_params: {
            'uptype': 'gerberfile'
        },

        filters: {
            max_file_size: '10mb',
            mime_types: [
                { title: "Zip files", extensions: "zip,rar" }
            ],
            prevent_duplicates: false
        },

        init: {
            PostInit: function () {
            },

            BeforeUpload: function (up, file) {
                if ("jp" == "jp") {
                    check_object_radio();
                    set_upload_param(up, file.name, false);
                }
                $("#fileprocess").show();
            },

            FilesAdded: function (up, files) {
                // 需要把前一次加入的文件删除
                if (uploader.files.length > 1) {
                    uploader.files.splice(0, 1);
                }
                plupload.each(files, function (file) {
                    //document.getElementById('filelist').innerHTML = '<img src="/img/images/order/up-success.png" alt=""><span>' + file.name + '(' + plupload.formatSize(file.size) + ')' + '</span>';
                    $("#filelist").show();
                    $("#filelist").find("span").text(file.name + "(" + plupload.formatSize(file.size) + ")");
                    $("#filelist").find("span").attr("title", file.name);

                });

                // 直接做文件上传
                uploader.start();

                timestamp = new Date().getTime();
                //console.log(timestamp);
                setTimeout("CheckUpload(" + timestamp + ")", 5000);

            },
            FileUploaded: function (up, file, info) {
                if (info.status == 200) {

                    if ("jp" == "jp") {
                        // oss上传结束
                        var path = get_uploaded_object_name(file.name);
                        if (typeof path == "undefined" || path == null || path == "" || path.lastIndexOf('.') == -1) {

                            $("#filelist").removeClass("add-success").addClass("add-failed");
                            alert("ブラウザ或いはネット接続状況をチェックして、再度アップロードしてください。");
                        }
                        else {

                            $("#filelist").removeClass("add-failed").addClass("add-success");
                            path = 'http://pcbgogo-file.oss-ap-northeast-1.aliyuncs.com/' + path;
                            $("#gerberFileUrl").val(path);
                            $("#gerberFileNm").val(file.name);
                            $("#uploadbtm").removeClass("disabled")
                            //$("#frmUploadFile").submit();
                        }
                    } else {
                        var res = eval('(' + info.response + ')');
                        if (res.state == "SUCCESS") {
                            $("#filelist").removeClass("add-failed").addClass("add-success");
                            $("#gerberFileUrl").val(res.url);
                            $("#gerberFileNm").val(res.original);
                            $("#uploadbtm").removeClass("disabled");
                            //$("#frmUploadFile").submit();
                        }
                        else {
                            $("#filelist").removeClass("add-success").addClass("add-failed");
                            alert(res.state);
                        }
                    }
                }
                else {
                    document.getElementById('uploadbtm').disabled = false;
                    $("#uploadbtm").val("確認");
                    $("#filelistprocess").find("span").text(info.response);
                }
            },
            UploadProgress: function (up, file) {
                timestamp = new Date().getTime();
                $("#fileprocess").find(".now-length").css("width", file.percent + "px");
                $("#fileprocess").find("span").text(file.percent + "%");

            },

            Error: function (up, err) {
                timestamp = new Date().getTime();
                if (err.code == -600) { // 文件太大
                    alert("ファイルサイズは最大10 mを超える。");
                } else {
                    alert(err.message);
                }
                $("#filelist").removeClass("add-success").addClass("add-failed");
                document.getElementById('uploadbtm').disabled = false;
                $("#uploadbtm").val("確認");
            }
        }
    });

    uploader.init();

    $('#uploadbtm').click(function () {
        // 判断文件是否已选
        if (uploader.files.length == 0) {
            alert("ガーバーデータをアップロードしてください。");
            return false;
        }

        if ($("#uploadbtm").hasClass("disabled")) {
            return false;
        }


        $("#frmUploadFile").submit();


        //uploader.start();


        //timestamp = new Date().getTime();
        ////console.log(timestamp);
        //setTimeout("CheckUpload(" + timestamp + ")", 5000);
        return false;
    });

}

UploadGerber();

function UploadFile() {

    // 上传按钮按下
    $("#uploadbtm").click(function () {

        if ($("#uploadbtm").hasClass("disabled")) {
            return false;
        }





        //if ($("#btnGerberUp").length > 0) {
        //    // 上传gerber文件
        //    $("#btnGerberUp").click();
        //}
        //else {
        //    // 上传bom文件
        //    $("#btnBomUp").click();
        //}
    });


    //// gerber文件上传
    //$('#btnGerberUp').click(function () {
    //    this.disabled = false;
    //    uploaderGerber.start();
    //    timestamp = new Date().getTime();
    //    setTimeout("CheckUpload(" + timestamp + ")", 5000);
    //    return false;
    //});

    //// bom文件上传
    //$('#btnBomUp').click(function () {
    //    this.disabled = false;
    //    uploaderBom.start();
    //    timestamp = new Date().getTime();
    //    setTimeout("CheckUpload(" + timestamp + ")", 5000);
    //    return false;
    //});

    //// 坐标文件上传
    //$('#btnCentroidUp').click(function () {
    //    this.disabled = false;
    //    uploaderCentroid.start();
    //    timestamp = new Date().getTime();
    //    setTimeout("CheckUpload(" + timestamp + ")", 5000);
    //    return false;
    //});


    var uploaderGerber = new plupload.Uploader({
        runtimes: 'html5,flash,silverlight,html4',
        browse_button: 'pickfilesGerber', // you can pass an id...
        container: document.getElementById('container'), // ... or DOM Element itself
        url: url,
        flash_swf_url: '/img/js/jqueryplus/plupload/plupload-2.3.1/Moxie.swf',
        silverlight_xap_url: '/img/js/jqueryplus/plupload/plupload-2.3.1/Moxie.xap',
        multi_selection: false,
        multipart_params: {
            'uptype': 'gerberfile'
        },

        filters: {
            max_file_size: '10mb',
            mime_types: [
                { title: "Zip files", extensions: "zip,rar" }
            ],
            prevent_duplicates: false // 允许选择重复文件
        },

        init: {
            PostInit: function () {
            },

            BeforeUpload: function (up, file) {
                if ("jp" == "jp") {
                    check_object_radio();
                    set_upload_param(uploaderGerber, file.name, false);
                }
                $("#gerberprocess").show();
            },


            FilesAdded: function (up, files) {
                if (uploaderGerber.files.length > 1) {
                    uploaderGerber.files.splice(0, 1);
                }
                plupload.each(files, function (file) {
                    $("#gerberlist").show();
                    $("#gerberlist").find("span").text(file.name + "(" + plupload.formatSize(file.size) + ")");
                    $("#gerberlist").find("span").attr("title", file.name);
                });

                // 开始上传
                uploader.start();
                timestamp = new Date().getTime();
                // 5秒钟后，还未进入上传状态，认为网络不好或断了。
                setTimeout("CheckUpload(" + timestamp + ")", 5000);

            },
            FileUploaded: function (up, file, info) {
                if (info.status == 200) {
                    if ("jp" == "jp") {
                        // oss上传结束
                        var path = get_uploaded_object_name(file.name);
                        if (typeof path == "undefined" || path == null || path == "" || path.lastIndexOf('.') == -1) {
                            alert("ブラウザ或いはネット接続状況をチェックして、再度アップロードしてください。");

                        }
                        else {
                            path = 'http://pcbgogo-file.oss-ap-northeast-1.aliyuncs.com/' + path;
                            $("#gerberFileUrl").val(path);
                            $("#gerberFileNm").val(file.name);

                            // 成功后上传bom文件
                            // $("#btnBomUp").click();
                        }
                    } else {
                        var res = eval('(' + info.response + ')');
                        if (res.state == "SUCCESS") {
                            $("#gerberFileUrl").val(res.url);
                            $("#gerberFileNm").val(res.original);
                            // 成功后上传bom文件
                            // $("#btnBomUp").click();
                        }
                        else {
                            alert(res.state);
                        }
                    }
                }
                else {
                    document.getElementById('btnGerberUp').disabled = false;
                    document.getElementById('uploadbtm').disabled = false;
                    $("#uploadbtm").val("確認");
                    $("#filelistprocessGerber").find("span").text(info.response);
                }
            },
            UploadProgress: function (up, file) {
                timestamp = new Date().getTime();

            },

            Error: function (up, err) {
                timestamp = new Date().getTime();
                if (err.code == -600) { // 文件太大
                    alert("ファイルサイズは最大10 mを超える。");
                } else {
                    alert(err.message);
                }
                document.getElementById('uploadbtm').disabled = false;
                $("#uploadbtm").val("確認");

            }
        }
    });

    uploaderGerber.init();

    // 上传bom文件
    var uploaderBom = new plupload.Uploader({
        runtimes: 'html5,flash,silverlight,html4',
        browse_button: 'pickfilesBom', // you can pass an id...
        container: document.getElementById('container'), // ... or DOM Element itself
        url: url,
        flash_swf_url: '/img/js/jqueryplus/plupload/plupload-2.3.1/Moxie.swf',
        silverlight_xap_url: '/img/js/jqueryplus/plupload/plupload-2.3.1/Moxie.xap',
        multi_selection: false,
        multipart_params: {
            'uptype': 'bomfile'
        },

        filters: {
            max_file_size: '10mb',
            mime_types: [
                { title: "Zip excel cvs txt files ", extensions: "rar,zip,7z,xls,xlsx,cvs,txt" }
            ],
            prevent_duplicates: false //允许选取重复文件
        },

        init: {
            PostInit: function () {
            },

            BeforeUpload: function (up, file) {
                if ("jp" == "jp") {
                    check_object_radio();
                    set_upload_param(uploaderBom, file.name, false);
                }
                $("#filelistprocessBom").show();
            },

            FilesAdded: function (up, files) {
                if (uploaderBom.files.length > 1) {
                    uploaderBom.files.splice(0, 1);
                }
                plupload.each(files, function (file) {
                    document.getElementById('filelistBom').innerHTML = '<img src="/img/images/order/up-success.png" alt=""><span>' + file.name + '(' + plupload.formatSize(file.size) + ')' + '</span>';
                    //$("#filelistprocessBom").show();
                });
            },
            FileUploaded: function (up, file, info) {
                if (info.status == 200) {
                    if ("jp" == "jp") {
                        var path = get_uploaded_object_name(file.name);
                        if (typeof path == "undefined" || path == null || path == "" || path.lastIndexOf('.') == -1) {
                            alert("ブラウザ或いはネット接続状況をチェックして、再度アップロードしてください。");
                        }
                        else {
                            path = 'http://pcbgogo-file.oss-ap-northeast-1.aliyuncs.com/' + path;
                            $("#bomFileUrl").val(path);
                            $("#bomFileNm").val(file.name);
                            if ($("#filelistCentroid").find("img").length == 0) { // 未选择centroid文件，直接提交
                                $("#frmUploadFile").submit();
                            }
                            else { // bom上传结束，再上传centroid文件
                                $("#btnCentroidUp").click();
                            }
                        }
                    }
                    else {
                        var res = eval('(' + info.response + ')');
                        if (res.state == "SUCCESS") {
                            $("#bomFileUrl").val(res.url);
                            $("#bomFileNm").val(res.original);
                            if ($("#filelistCentroid").find("img").length == 0) { // 未选择centroid文件，直接提交
                                $("#frmUploadFile").submit();
                            }
                            else { // bom上传结束，再上传centroid文件
                                $("#btnCentroidUp").click();
                            }
                        }
                        else {
                            alert(res.state);
                        }
                    }
                }
                else {
                    document.getElementById('btnBomUp').disabled = false;
                    document.getElementById('uploadbtm').disabled = false;
                    $("#uploadbtm").val("確認");
                    $("#filelistprocessBom").find("span").text(info.response);
                }
            },
            UploadProgress: function (up, file) {
                timestamp = new Date().getTime();
                $("#filelistprocessBom").find("span").text(file.percent + "%");
                $("#filelistprocessBom").find(".now-length").css("width", file.percent + "px");
            },

            Error: function (up, err) {
                timestamp = new Date().getTime();
                if (err.code == -600) { // 文件太大
                    alert("ファイルサイズは最大10 mを超える。");
                } else {
                    alert(err.message);
                }
                document.getElementById('uploadbtm').disabled = false;
                $("#uploadbtm").val("確認");
            }
        }
    });
    uploaderBom.init();


    // 上传Centroid文件
    var uploaderCentroid = new plupload.Uploader({
        runtimes: 'html5,flash,silverlight,html4',
        browse_button: 'pickfilesCentroid', // you can pass an id...
        container: document.getElementById('container'), // ... or DOM Element itself
        url: url,
        flash_swf_url: '/img/js/jqueryplus/plupload/plupload-2.3.1/Moxie.swf',
        silverlight_xap_url: '/img/js/jqueryplus/plupload/plupload-2.3.1/Moxie.xap',
        multi_selection: false,
        multipart_params: {
            'uptype': 'centroidfile'
        },

        filters: {
            max_file_size: '10mb',
            mime_types: [
                { title: "Zip excel cvs txt files", extensions: "rar,zip,7z,xls,xlsx,cvs,txt" }
            ],
            prevent_duplicates: true //不允许选取重复文件
        },

        init: {
            PostInit: function () {

            },

            BeforeUpload: function (up, file) {
                if ("jp" == "jp") {
                    check_object_radio();
                    set_upload_param(uploaderCentroid, file.name, false);
                }
                $("#filelistprocessCentroid").show();
            },

            FilesAdded: function (up, files) {
                if (uploaderCentroid.files.length > 1) {
                    uploaderCentroid.files.splice(0, 1);
                }
                plupload.each(files, function (file) {
                    document.getElementById('filelistCentroid').innerHTML = '<img src="/img/images/order/up-success.png" alt=""><span>' + file.name + '(' + plupload.formatSize(file.size) + ')' + '</span>';
                    //$("#filelistprocessCentroid").show();
                });
            },

            FileUploaded: function (up, file, info) {
                if (info.status == 200) {
                    if ("jp" == "jp") {
                        var path = get_uploaded_object_name(file.name);

                        if (typeof path == "undefined" || path == null || path == "" || path.lastIndexOf('.') == -1) {
                            alert("ブラウザ或いはネット接続状況をチェックして、再度アップロードしてください。");
                        } else {
                            path = 'http://pcbgogo-file.oss-ap-northeast-1.aliyuncs.com/' + path;
                            $("#centroidFileUrl").val(path);
                            $("#centroidFileNm").val(file.name);
                            $("#frmUploadFile").submit();
                        }
                    } else {
                        var res = eval('(' + info.response + ')');
                        if (res.state == "SUCCESS") {
                            $("#centroidFileUrl").val(res.url);
                            $("#centroidFileNm").val(res.original);
                            $("#frmUploadFile").submit();
                        }
                        else {
                            alert(res.state);
                        }
                    }
                }
                else {
                    document.getElementById('btnCentroidUp').disabled = false;
                    document.getElementById('uploadbtm').disabled = false;
                    $("#uploadbtm").val("確認");
                    $("#filelistprocessCentroid").find("span").text(info.response);
                }
            },
            UploadProgress: function (up, file) {
                timestamp = new Date().getTime();
                $("#filelistprocessCentroid").find("span").text(file.percent + "%");
                $("#filelistprocessCentroid").find(".now-length").css("width", file.percent + "px");

            },

            Error: function (up, err) {
                timestamp = new Date().getTime();
                if (err.code == -600) { // 文件太大
                    alert("ファイルサイズは最大10 mを超える。");
                } else {
                    alert(err.message);
                }
                document.getElementById('uploadbtm').disabled = false;
                $("#uploadbtm").val("確認");
            }
        }
    });

    uploaderCentroid.init();
}
