$(function () {

    //返回顶部
    $('.go-btn').click(function () {
        $('html,body').animate({scrollTop: 0});
    });

    //消息提示
    $('.js-messages').click(function (e) {
        $('.js-message-list').slideToggle(600);
        e.stopPropagation();
    });

    $(document).on('click', function (e) {
        var elem = e.target || e.srcElement;
        while (elem) {
            if (elem.className && elem.className.indexOf('js-message-list') > -1) {
                return;
            }
            elem = elem.parentNode;
        }
        $('.js-message-list').hide();
    });


    //全部已读消息
    $('.js-read-btn').click(function () {
        $('.lists-box').empty();
    });

    var imgs = '';

    $('.js-browse-btn').click(function () {
        $('#tempHtml').html('');
        $(this).find('input').change(function () {
            function formatSize(size, pointLength, units) {
                var unit;
                units = units || ['B', 'K', 'M', 'G', 'TB'];
                while ((unit = units.shift()) && size > 1024) {
                    size = size / 1024;
                }
                return (unit === 'B' ? size : size.toFixed(pointLength === undefined ? 2 : pointLength)) + unit;
            }

            var filesList = '';
            for (var i = 0; i < this.files.length; i++) {
                filesList += '          <div class="item">\n' +
                    '                        <span class="file-name">' + this.files[i].name + '(' + formatSize(this.files[i].size, 1,) + ' )</span>\n' +
                    '                        <span class="iconfont icon-guanbi"></span>\n' +
                    '                    </div>';
            }
            $('.js-file-lists').append(filesList);
            imgs = this.files;
            this.files='';
        });
    });

    //删除上传文件
    $(document).on('click', '.js-file-lists .icon-guanbi', function () {
        $(this).parent().remove();
    });

    function getMessageFn(dataImg) {
        for (let j = 0; j < dataImg.length; j++) {
            var reader = new FileReader();
            reader.readAsDataURL(dataImg[j]);
            reader.onload = function (e) {
                $('#tempHtml').append('<img src="' + e.target.result + '" alt="">');
            };
        }
    }


    //提交文件
    $('.js-post-message').click(function () {
        var tempHtml = document.createElement('div');
        tempHtml.id = 'tempHtml';
        tempHtml.style.display = 'none';
        $(this).append(tempHtml);
        getMessageFn(imgs);
        setTimeout(function () {
            $('.js-message-lists').append(' <div class="list">\n' +
                '                    <div class="head-info">\n' +
                '                        <img class="head-img" src="../img/images/user.png" alt="">\n' +
                '                        <span class="time">2019.07.10 17:33:04</span>\n' +
                '                    </div>\n' +
                '                    <div class="des-box">\n' +
                '                        <div class="des">\n' +
                '                           <div class="text">\n'+ $('#suggestion').val() + ' </div>\n' + $('#tempHtml').html() +'\n' +
                '                        </div>\n' +
                '                        <div class="answer-box">\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>');
            $('.js-file-lists').empty();
            imgs = '';

            function changeHeight() {
                var getWindowHeight = $(window).height();
                if ($('.order-main').height() < getWindowHeight) {
                    $('.order-main').css({minHeight: getWindowHeight});
                    $('.font-line').css({minHeight: getWindowHeight});
                    $('.box-l').height($('.order-main').height());
                    $('.box-r').height($('.order-main').height());
                    $('.font-line').height($('.order-main').height());
                } else {
                    $('.box-l').height($('.order-main').height() + 100);
                    $('.box-r').height($('.order-main').height());
                    $('.font-line').height($('.order-main').height() + 100);
                }
            }
            changeHeight();
        }, 100);

    });

});//end function
