$(function () {
  //返回顶部
  $('.go-btn').click(function () {
    $('html,body').animate({ scrollTop: 0 })
  })
  //登录前后
  $('.js-user-activity').click(function (e) {
    $('.user-item').show()
    $(document).one('click', function () {
      $('.user-item').hide()
    })
    e.stopPropagation()
  });

//    二级导航默认选择第一项
  (function () {
    $('.tabed-ul li').eq(0).addClass('active').siblings().removeClass('active')
    $('.tabed-ul li').eq(0).css({ borderBottom: '2px solid transparent' }).siblings().css({ borderBottom: '2px solid #b21f1f' })
  })()
//tab切换
  $('.tabed-ul li').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
    $(this).css({ borderBottom: '2px solid transparent' }).siblings().css({ borderBottom: '2px solid #b21f1f' })
    var index = $(this).index()
    $('.order-stats-box .js-boxed').eq(index).show().siblings().not('.select-all').hide()
  })

  var msg = {
    target: null,
    yes: function () {
      $('.js-confirm-box').hide()
    },
    no: function () {
      $('.js-confirm-box').hide()
    },
    start: function (obj) {
      this.target = obj
      $('.js-confirm-box').show()
    }
  }
  //点击删除图标
  $('.del-pic').click(function () {
    msg.start(this)
  })
  //关闭遮罩层函数
  $('.yes-btn').click(function () {
    $(msg.target).parents('.item-content').remove()
    msg.yes()
  })
  $('.no-btn').click(function () {
    msg.no()
  })

  $('.js-failed-activity').click(function () {
    $('.ew-tips').show()
    setTimeout(function () {
      $('.ew-tips').hide()
    }, 2000)
  })

//订单搜索
  $('.js-order-search').click(function () {
    layer.open({
      type: 2,
      title: '45645645',
      area: ['1000px', '650px'],
      content: '../member/confim-lists.html'
    })
  })

  $('.icon-guanbi').click(function () {
    $(this).parents('.add-numbers').remove()
  })

  $('.js-review').click(function () {
    $(this).find('.ew-tips').toggle()
  })


//    国家列表
  $('.js-country-value').click(function (e) {
    $('.js-wl-ul').hide()
    $('.js-country-ul').show()
    $(document).one('click', function () {
      $('.js-country-ul').hide()
    })
    e.stopPropagation()//阻止冒泡
  })
  $('.js-country-ul li').click(function () {
    $('.js-country-has').val($(this).html())
    $(this).parent().hide()
  })
//    物流列表
  $('.js-wl-value').click(function (e) {
    $('.js-country-ul').hide()
    $('.js-wl-ul').show()
    $(document).one('click', function () {
      $('.js-wl-ul').hide()
    })
    e.stopPropagation()//阻止冒泡
  })
  $('.js-wl-ul li').click(function () {
    $('.js-wl-has').val($(this).html())
    $(this).parent().hide()
  })

  //购物车列表选择样式函数
  $('.js-input-val').click(function () {
    if ($(this)[0].checked) {
      $(this).siblings('.js-label-bg').addClass('active')
    } else {
      $(this).siblings('.js-label-bg').removeClass('active')
    }
  })
  //获取所有选择框
  $('.js-all-label-bg').click(function () {
    //获取全部状态下的订单选择状态
    var getChecks = $('.all-order-box .js-input-val');
    var getAllcheck = $(this)[0].checked;
    for (var i = 0; i < getChecks.length; i++) {
        getChecks[i].checked = getAllcheck;
    }
    for (var j = 0; j < getChecks.length; j++) {
        if (getChecks[j].checked) {
            $('.all-order-box .js-label-bg').addClass('active');
        } else {
            $('.all-order-box .js-label-bg').removeClass('active');
        }
    }
    //全选按钮样式改变
    $(this).toggleClass('active')
  })
  //单选按钮
  $(' .js-radio-val').click(function () {
    for (var j = 0; j < $('.js-radio-val').length; j++) {
      if ($('.js-radio-val').eq(j)[0].checked) {
        $('.table-open .js-label-bg').css({ backgroundImage: 'url(../img/images/order/gou.png)' })
        $(this).siblings('.table-open .js-label-bg').css({ backgroundImage: 'url(../img/images/order/goued.png)' })
      }
    }
  })
  //添加订单编号
  $('.js-sub-btn').click(function () {
    $('.add-numbers').empty()
    var kk = $('.now-box .js-radio-val')
    // var cc=[];
    for (var i = 0; i < kk.length; i++) {
      if (kk[i].checked) {
        var ss = ' <span class="number-span">' + $(kk[i]).parent().siblings('div').children('.li-number').html() + '<i class="close-number js-close-number">X</i>\n' + '</span>'
        $('.add-numbers').append(ss + '&nbsp;')
      }
    }
    //还原选择状态
    for (var k = 0; k < $('.js-radio-val').length; k++) {
      $('.js-radio-val').eq(k)[0].checked = false
      $('.table-open .js-label-bg').css({ backgroundImage: 'url(../img/images/order/gou.png)' })
    }
    $('.js-table-open').hide()
  })
  $('.add-numbers').on('click', '.js-close-number', function () {
    $(this).parent().parent().hide()
  })

})//end function

