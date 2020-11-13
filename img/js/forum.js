//程序入口
$(function () {

  //论坛头部底部
  var forum = {
    totoalHeaderFn: function () {
      return ` <div class="header">
  <!--顶部-->
  <div class="nav-info">
    <ul class="nav-items">
      <li>
        <a href="javascript:void(0)">
          <span class="iconfont icon-qushuchakanshuxing2"></span>
          <span class="gerber">Online Gerber Viewer</span>
        </a>
      </li>
      <li>
        <a href="phone-display.html">
          <span class="iconfont icon-shouji1"></span>
          <span class="gerber">Mobile Website</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0)">
          <span class="iconfont icon-Skype"></span>
        </a>
      </li>
      <li><a href="mailto:service@pcbgogo.com">
        <span class="iconfont icon-iconfontcolor06"></span>
        <span class="mail-text">service@pcbgogo.com</span>
      </a>
      </li>
      <li class="language"><span><img src="../img/images/England.png" alt="country-flag"></span>&nbsp;&nbsp;English
        <!--语言选择弹出层-->
        <ul class="language-box">
          <li onclick="window.open('index.html','_self')"><img src="../img/images/England.png" alt="">&nbsp;&nbsp;English
          </li>
          <li onclick="window.open('https://www.pcbgogo.jp/','_blank')"><img
            src="../img/images/Japan.png" alt="">&nbsp;&nbsp;Japanese
          </li>
        </ul>
      </li>
    </ul>


  </div>
  <div class="top-box">
    <!--左侧logo-->
    <h1 class="logo">
      <a href="index.html">
        PCBgogo
      </a>
    </h1>
    <!--nav-tips-->
    <img src="../img/images/logo-tips.jpg" alt="logo tips" width="340" height="34" class="nav-tips">
    <!--日文-->
    <!--<img src="img/images/logo-tips_jp.jpg" alt="logo tips" width="336" height="34" class="nav-tips-jp">-->
    <!--nav-tips-->
    <!--右侧登录-->
    <div class="sign-box">
      <div class="sign-lists">
        <div class="sign-in"><a href="javascript:void(0)">Sign in</a></div>
        <div class="join"><a href="register-login.html">Join Free</a></div>
        <div class="joined">
          <i><img src="../img/images/user.png" alt=""></i>
        </div>
        <div class="hi-in">
          <a href="javascript:void(0)">Hi! zhang测大街上公开了坚朗</a>
        </div>
        <!--信息列表-->
        <div class="person-info">
          <!--  未登录-->
          <div class="info">
            <div class="left-info">
              <div class="tips">
                New Customer?
              </div>
              <a class="join-free" href="register-login.html">
                Join Free
              </a>
            </div>
            <div class="right-info">
              <a class="login-in" href="javascript:void(0)">
                Sign in
              </a>
            </div>
          </div>
          <!--   已登录 -->
          <div class="info" style="display: none">
            <div class="left-info">
              <div class="tips">
                Email: <span>20**@163.com</span>
              </div>
              <a class="out-btn" href="javascript:void(0)">
                Sign Out
              </a>
            </div>
          </div>

          <div class="link-lists">
            <!-- 有数量添加   active 类名-->
            <div class="item">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">My Account</span>
              </a>
            </div>
            <div class="item">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">My Orders list</span>
              </a>
            </div>
            <div class="item active">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">Account Balance</span>
              </a>
            </div>
            <div class="item">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">Discount coupon</span>
              </a>
            </div>
            <div class="item">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">Reward points</span>
              </a>
            </div>
            <div class="item">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">My Delivery Address</span>
              </a>
            </div>
            <div class="item">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">My Forum</span>
              </a>
            </div>
            <div class="item">
              <a href="javascript:void(0)">
                <span> •  </span>
                <span class="name">Message</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--  购物车-->
      <div class="shopping-car">
        <!-- 有数量添加 active 或者你元素控制显示与隐藏-->
        <a href="javascript:void(0)" class="active">
          <span class="iconfont icon-gouwuche1"></span>
          <div class="of-cars">28</div>
        </a>
      </div>
      <!-- 广告-->
      <div class="ads-tips" style="display: none">
        New here ? Getting <span>$50</span> coupon
      </div>
    </div>
  </div>
  <!--导航-->
  <div class="nav">
    <div class="nav-box">
      <!--左侧列表-->
      <ul class="nav-lists js-nav-lists">
        <li><a href="javascript:void(0)">Home</a></li>
        <li class="active">
          <a href="javascript:void(0)">Instant Quote</a>
          <!-- 二级菜单-->
          <div class="child-menu">
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span>PCB Prototype</span>
              </a>
            </div>
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span> PCB Assembly</span>
              </a>
            </div>
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span> FPC/Rigid-Flex</span>
              </a>
            </div>
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span> SMD Stencil</span>
              </a>
            </div>
          </div>
        </li>
        <li>
          <a href="javascript:void(0)">PCB Assembly</a>
        </li>
        <li><a href="javascript:void(0)">Advanced PCB</a></li>
        <li>
          <a href="javascript:void(0)">Capabilities</a>
          <!-- 二级菜单-->
          <div class="child-menu">
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span> Printed Circuit Boards</span>
              </a>
              <!-- 三级菜单-->
              <div class="son-box">
                <div class="child-link">
                  <div class="list">
                    <a href="javascript:void(0)">
                      <span class="name">Printed Circuit Board Prototype</span>
                    </a>
                  </div>
                  <div class="list">
                    <a href="javascript:void(0)">
                      <span class="name">Aluminum PCB</span>
                    </a>
                  </div>
                  <div class="list">
                    <a href="javascript:void(0)">
                      <span class="name">Rigid-Flex PCBs</span>
                    </a>
                  </div>
                  <div class="list">
                    <a href="javascript:void(0)">
                      <span class="name">Metal core PCBs</span>
                    </a>
                  </div>
                  <div class="list">
                    <a href="javascript:void(0)">
                      <span class="name">Printed Circuit Board Prototype</span>
                    </a>
                  </div>
                  <div class="list">
                    <a href="javascript:void(0)">
                      <span class="name">Aluminum PCB</span>
                    </a>
                  </div>
                  <div class="list">
                    <a href="javascript:void(0)">
                      <span class="name">Rigid-Flex PCBs</span>
                    </a>
                  </div>
                  <div class="list">
                    <a href="javascript:void(0)">
                      <span class="name">Metal core PCBs</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span> SMT Stencil</span>
              </a>
              <!-- 三级菜单-->
              <div class="son-box">
                <div class="child-link">
                  <div class="list">
                    <a href="javascript:void(0)">

                      <span class="name">Aluminum PCB</span>
                    </a>
                  </div>
                  <div class="list">
                    <a href="javascript:void(0)">

                      <span class="name">Rigid-Flex PCBs</span>
                    </a>
                  </div>
                  <div class="list">
                    <a href="javascript:void(0)">

                      <span class="name">Metal core PCBs</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span> SMD Stencil</span>
              </a>
              <!-- 三级菜单-->
              <div class="son-box">
                <div class="child-link">
                  <div class="list">
                    <a href="javascript:void(0)">

                      <span class="name">Aluminum PCB3</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span> PCB Design-Aid & Layout</span>
              </a>
              <!-- 三级菜单-->
              <div class="son-box">
                <div class="child-link">
                  <div class="list">
                    <a href="javascript:void(0)">

                      <span class="name">Aluminum PCB5</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span>  生产周期</span>
              </a>
            </div>
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span> 质量</span>
              </a>
            </div>
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span> Other</span>
              </a>
            </div>
          </div>
        </li>
        
          <li><a href="javascript:void(0)">Knowledge Center</a>
          <div class="child-menu">
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span>Printed Circuit Boards1</span></a>
                <!-- 三级菜单-->
              <div class="son-box">
                <div class="child-link">
                  <div class="list">
                    <a href="javascript:void(0)">
                      <span class="name">Standard PCB Capabilities</span>
                    </a>
                  </div>
                  <div class="list">
                    <a href="javascript:void(0)">
                      <span class="name">Advanced PCB Manufacturing</span>
                    </a>
                  </div>
                  <div class="list">
                    <a href="javascript:void(0)">
                      <span class="name">Aluminum PCB manufacturing</span>
                    </a>
                  </div>
                  <div class="list">
                    <a href="javascript:void(0)">
                      <span class="name">Flexible & Rigid-Flex PCB manufacturing</span>
                    </a>
                  </div>
                  <div class="list">
                    <a href="javascript:void(0)">
                      <span class="name">PCB Capabilities & PCB Layout</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span>Flexible & Rigid-Flex PCB manufacturing</span>
              </a>
            </div>
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span>PCB Capabilities & PCB Layout</span>
              </a>
                  <!-- 三级菜单-->
              <div class="son-box">
                <div class="child-link">
                  <div class="list">
                    <a href="javascript:void(0)">
                      <span class="name">Aluminum PCB manufacturing</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        
        <li><a href="javascript:void(0)">Feedback</a>
          <div class="child-menu">
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span>Forum</span>
              </a>
            </div>
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span>Feedback </span>
              </a>
            </div>
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span>Current Events</span>
              </a>
            </div>
          </div>
        </li>
      
        <li><a href="javascript:void(0)">Contact Us</a>
          <div class="child-menu">
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span>  Why us  </span>
              </a>
            </div>
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span>  Method of payment</span>
              </a>
            </div>
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span> Introduction</span>
              </a>
            </div>
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span> Privacy policy</span>
              </a>
            </div>
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span> Order guide</span>
              </a>
            </div>
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span>  Shipping method guide</span>
              </a>
            </div>
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span> Quality gurrantee</span>
              </a>
            </div>
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span> PCBgogo delivery</span>
              </a>
            </div>
            <div class="item">
              <a class="title" href="javascript:void(0)">
                <span>  Contact Us </span>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div></div>`
    },
    totalFooterFn: function () {
      return ` <!--底部-->
<div class="footer clear-float">
  <!--二级列表-->
  <div class="links-type clear-float">
    <div class="container_warp">
      <div class="left-box" style="float: left">
        <ul class="links-title clear-float">
          <li>
            <p>LEARN</p>
            <ul class="links-lists">
              <li>
                <a href="aboutUs.html">About Us</a>
              </li>
              <li>
                <a href="https://www.pcbgogo.com/Blog/Big_sales_on_PCB_mass_production.html"> PCB
                  Capabilities</a>
              </li>
              <li>
                <a href="pcbaCapabilities.html">PCBA Capabilities</a>
              </li>
              <li>
                <a href="https://www.pcbgogo.com/Blog/Big_sales_on_PCB_mass_production.html"> PCB Layout
                  Capabilities</a>
              </li>
            </ul>
          </li>
          <li>
            <p>PCBGOGO SERVICE</p>
            <ul class="links-lists">
              <li>
                <a href="PCBPrototype.html">PCB Prototype </a>
              </li>
              <li>
                <a href="PCBAssembly.html">PCB Assembly</a>
              </li>
              <li>
                <a href="pcbLayout.html"> PCB Layout </a>
              </li>
              <li>
                <a href="FPCInstantQuote.html">PCB Instant Quote</a>
              </li>
              <li>
                <a href="sitemap.xml" title="https://www.pcbgogo.com/sitemap(1).xml">Site Map</a>
              </li>
            </ul>
          </li>
          <li>
            <p>CUSTOMER SUPPORT</p>
            <ul class="links-lists">
              <li>
                <a href="forum/forum.html">Engineering </a>
              </li>
              <li>
                <a href="dynamic.html">Feedback </a>
              </li>
              <li>
                <a href="old-process/pcbaAssemblyFaq.html">PCBA FAQs </a>
              </li>
              <li>
                <a href="whyUs.html">Why us </a>
              </li>
              <li>
                <a href="privacyPolicy.html">Privacy Policy</a>
              </li>
              <li>
                <a href="keywordSearch.html">PCB Glossary</a>
              </li>
            </ul>
          </li>
          <li>
            <p>ORDER HELP</p>
            <ul class="links-lists">
              <li>
                <a href="orderGuide.html">Order Guide </a>
              </li>
              <li>
                <a href="contactUs.html">Contact Us </a>
              </li>
              <li>
                <a href="register-login.html">Create an Account </a>
              </li>
              <li>
                <a href="qualityGurrantee.html">Quality Gurrantee </a>
              </li>
              <li>
                <a href="gogoDelivery.html">PCBGOGO Delivery</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul class="footer-item-icon">
          <li>
            <div class="name">
              Payment Methods
            </div>
            <div class="img">
              <img src="../img/images/payments.png" alt="">
            </div>
          </li>
          <li>
            <div class="name">
              Delivery Services
            </div>
            <div class="img">
              <img src="../img/images/verified.png" alt="">

            </div>
          </li>
          <li>
            <div class="name">
              Verified by
            </div>
            <div class="img">

              <img src="../img/images/delivery.png" alt="">
            </div>
          </li>
        </ul>
      </div>

      <!--右侧表单-->
      <div class="send-from">
        <p>QUICK CONTACT</p>
        <form action="#">
          <input type="text" placeholder="Name" value="Name" onfocus="if(this.value==='Name')this.value=''"
                 onblur="if(this.value==='')this.value='Name'">
          <input type="text" placeholder="Email" value="Email"
                 onfocus="if(this.value==='Email')this.value=''"
                 onblur="if(this.value==='')this.value='Email'">
          <textarea type="text" class="message-input" placeholder="Message"
                    onfocus="if(this.value==='Message')this.value=''"
                    onblur="if(this.value==='')this.value='Message'"></textarea>
          <input type="button" class="btn-submit " value="Send Message">
        </form>
      </div>
      <!--右侧表单-->
    </div>
  </div>
  <!--底部表单-->
  <div class="footer-from clear-float">
    <div class="container_warp">
      <div class="left-item">
        <div class="ban-quan">
          Copyright © 2015 PCBGOGO. All rights reserved. Shenzhen JDB Technology Co.,
          Ltd.
          Address: No. 15, Zhongxing Road, Kengzi Street, Pingshan District, Shenzhen, 518000, China.
        </div>
        <div class="link-way">
          <span>Whatsapp +8618665922549</span>

          <span> Mail service@pcbgogo.com</span>

          <span> Tel +86-755-33066136</span>
        </div>
      </div>
    </div>
  </div>
</div>`
    }
  }
  $('.top').remove()
  $('.banner-nav').remove()
  $('.header,.footer').remove()

  $('head').prepend(`<link rel="stylesheet" href="../img/css/forum/bbsPublic.css">`)
  //统一论坛底部头部
  $('body').prepend(forum.totoalHeaderFn())

  $('body').append(forum.totalFooterFn())
  if ($('.footer')) {
    $('.footer').css({ height: 'auto' })
  }

  //模拟本地登录 用户名：000@163.com  密码：000000
  // 检测是否为登录状态
  (function () {
    if (checkLogin()) {
      $('.sign-in').hide()
      $('.join').hide()
      $('.joined').show()
      $('.hi-in').show()
      $('.info').eq(0).hide()
      $('.info').eq(1).show()
      $('.ads-tips').hide()
    } else {
      $('.sign-in').show()
      $('.join').show()
      $('.joined').hide()
      $('.hi-in').hide()
      $('.info').eq(1).hide()
      $('.info').eq(0).show()
      $('.ads-tips').show()
    }
  })()

  //检测是否登录
  function checkLogin () {
    var aEmail = window.localStorage.getItem('email')
    var aPwd = window.localStorage.getItem('pwd')
    if (aEmail === '000@163.com' && aPwd === '000000') {
      return true
    }
  }

  //地址加密
  function compileStr (code) {
    var c = String.fromCharCode(code.charCodeAt(0) + code.length)
    for (var i = 1; i < code.length; i++) {
      c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1))
    }
    return escape(c)
  }

  //登录
  $('.login-in').click(function () {
    if (checkLogin()) {
      $('.sign-in').hide()
      $('.join').hide()
      $('.joined').show()
      $('.hi-in').show()
      $('.ads-tips').hide()
      $('.info').eq(0).hide()
      $('.info').eq(1).show()
    } else {
      var urlStr = window.location.pathname//获取之前的地址
      var splitIndex = urlStr.lastIndexOf('/')//截取位置
      var oldStr = urlStr.substr(splitIndex + 1)
      window.location.href = 'login.html?=' + compileStr(oldStr)//加密后的
    }
  })
  //与退出
  $('.out-btn').click(function () {
    window.localStorage.setItem('pwd', '')
    window.location.reload()
  })
  //登录与注册
  $('.js-sg-in').click(function () {
    window.location.href = 'login.html'
    var urlStr = window.location.pathname//获取之前的地址
    var splitIndex = urlStr.lastIndexOf('/')//截取位置
    var oldStr = urlStr.substr(splitIndex + 1)
    window.location.href = 'login.html?=' + compileStr(oldStr)
  })

  //模拟本地登录

  //  导航吸顶
  $(window).scroll(function () {
    var navTop = $(this).scrollTop()
    if (navTop >= 30) {
      $('.banner-nav').css({ position: 'fixed', top: 0, left: 0, zIndex: 99 })
    } else {
      $('.banner-nav').css({ position: 'relative', zIndex: 99, top: 0 })
    }
  })
  //返回顶部
  $('.diy-top-btn').click(function () {
    $('html,body').animate({ scrollTop: 0 })
  })

  //状态选择  allState
  $('.js-title-right').hover(function () {
    $(this).children('.state-list').show()
  }, function () {
    $(this).children('.state-list').hide()
  })
  $('.state-list>li').click(function () {
    $(this).parent().siblings('input').val($.trim($(this).html())).end().hide()
  })

  // //  取消关注元素 collectFollow.html
  $('.js-cancel').click(function () {
    $(this).parent().parent().hide()
  })
  //
  // //取消关注人follow.html
  $('.js-cancel-foll').click(function () {
    $(this).parent().fadeOut()
  })
  // //粉丝关注与取消Follower.html
  $('.js-focus-cancel').click(function () {
    $(this).toggleClass('active-fans')
    if ($(this).hasClass('active-fans')) {
      $(this).find('.follow').text('Cancel following')
    } else {
      $(this).find('.follow').text('Follow')
    }
  })

  //标题高度
  void function () {
    var minH = $('.change-height').height()
    if (minH > 40) {
      $('.change-height').height(101)
    }
  }()
  // 收藏按钮
  $('.js-collect-btn').click(function () {
    $(this).toggleClass('active-collect')
    if ($(this).hasClass('active-collect')) {
      $(this).html('Cancel collecting')
      var str = ' <li class="slower">\n' + '<img src="../img/images/forum/collect1.png" alt="header" width="24" height="24">\n' + '</li>'
      $('.js-collect-user').append(str)
    } else {
      $(this).html('Collecting')
      $('.js-collect-user>li').eq(-1).remove()
    }
  })
//    论坛右侧按钮
  $('.js-follow-btn').click(function () {
    //模拟本地登录 用户名：000@163.com  密码：000000
    //// 判断是否登录
    // if (localStorage.pwd != '000000') {
    //     var urlStr = window.location.pathname;//获取之前的地址
    //     var splitIndex = urlStr.indexOf('forum');//截取位置
    //     var oldStr = urlStr.substr(splitIndex);
    //     window.location.href = '../login.html?=' + compileStr(oldStr);//加密后的
    // } else {
    //登录显示
    $(this).toggleClass('active-follow')
    if ($(this).hasClass('active-follow')) {
      $(this).html('Cancel following')
    } else {
      $(this).html('Follow')
    }
    // }
  })

  $('.editor-mask').dblclick(function () {
    $(this).hide()
    $('.post-comments').hide()
    $('.js-submit-btn').removeClass('disabled')
  })

  try{
  ////富文本
  var editor
  KindEditor.ready(function (K) {
    editor = K.create('textarea[name="content"]', {
      allowFileManager: true
    })
  })

//    提交按钮
  $('.js-submit-btn').click(function () {

    if($(this).hasClass('disabled')){
      layer.msg('Log in to post comments')
      return
    }

    //获取用户输入的纯文本
    var getStr = editor.text()

    //获取用户编辑的样式
    // var getStr = ue.getContent();
    if (getStr == '' || getStr == null) {
      layer.msg('Please enter content', {
        time: 1500,
      })
      return
    }
    var str = '  <div class="interaction-item">\n' +
      '                    <div class="item-left">\n' +
      '                        <img src="../img/images/forum/header3.png" alt="header" width="40" height="40">\n' +
      '                    </div>\n' +
      '                    <div class="item-right js-item-right">\n' +
      '                        <h5>x****mes</h5>\n' +
      '                        <p>March 22, 2018, 07:18:22 pm</p>\n' +
      '                        <p class="interaction-text">\n' + getStr +
      '                        </p>\n' +
      '                        <p class="reply-p"><a href="javascript:void(0)" class="reply-btn js-reply-btn">Reply</a></p>\n' +
      '                        <!--回复框-->\n' +
      '                        <div class="reply-box">\n' +
      '                            <input type="text" class="reply-area">\n' +
      '                            <span class="reply-submit js-reply-submit">Submit</span>\n' +
      '                        </div>\n' +
      '                        <!--回复内容-->\n' +
      '                        <div class="reply-lists">\n' +
      '                        </div>\n' +
      '                    </div>\n' +
      '                </div>'

    $('.js-interaction').append(str)
  })
//回复按钮
  $('body').on('click', '.js-reply-btn', function () {
    $(this).parent().siblings('.reply-box').toggleClass('active-reply')
  })
//用户输入内容
  $('body').on('click', '.js-reply-submit', function () {
    var getText = $.trim($(this).siblings('.reply-area').val())
    if (getText == '') {
      $(this).parent().toggleClass('active-reply')
      return
    }
    var str = ' <div class="lists">\n' +
      '                                <div class="lists-left">\n' +
      '                                    <img src="../img/images/forum/header2.png" alt="header" width="40" height="40">\n' +
      '                                </div>\n' +
      '                                <div class="lists-right">\n' +
      '                                    <h5>x****mes</h5>\n' +
      '                                    <p>March 22, 2018, 07:18:22 pm</p>\n' +
      '                                    <p class="lists-text">\n' + getText +
      '                                    </p>\n' +
      '                                </div>\n' +
      '                            </div>'
    $(this).parent().siblings('.reply-lists').append(str)
    $(this).siblings('input').val('')
    $(this).parent().toggleClass('active-reply')
  })
  }catch (e) {

  }
  //    点赞与取消点赞按钮
  $('.js-approval>li').click(function () {
    $(this).toggleClass('active-li')
    var str = parseInt($(this).children('span').html())
    if ($(this).hasClass('active-li')) {
      $(this).children('span').html(++str)
    } else {
      $(this).children('span').html(--str)
    }
  })

//   点赞按钮 myProblemDetail作废.html
  $('body').on('click', '.js-give-like', function () {
    $(this).toggleClass('active-give')
    var value = parseInt($(this).children('span').html())
    if ($(this).hasClass('active-give')) {
      $(this).children('span').html(++value)
    } else {
      $(this).children('span').html(--value)
    }
  })

  //问题编辑提交按钮开始 myProblemDetail作废.html
  $('.js-problem-submit').click(function () {
    //获取用户输入的纯文本
    var getStr = editor.text()
    //获取用户编辑的样式
    if (getStr === '' || getStr == null) {
      layer.msg('Please enter content', {
        time: 1500,
      })
      return
    }
    //问题详情
    var str = '  <div class="interaction-item">\n' +
      '                    <div class="item-left">\n' +
      '                        <img src="../img/images/forum/header3.png" alt="header" width="40" height="40">\n' +
      '                    </div>\n' +
      '                    <div class="item-right js-item-right">\n' +
      '                        <h5>x****mes</h5>\n' +
      '                        <p>March 22, 2018, 07:18:22 pm</p>\n' + ' <a href="javascript:void(0)" class="adopt-btn js-adopt-btn">Adopt</a>  ' + '<div class="adopt-flag"></div>' + ' ' +
      '<p class="interaction-text">\n' + getStr + '</p>\n' +
      '<p class="reply-p">' + ' <a href="javascript:void(0)" class="give-like js-give-like">Approval(<span>0</span>)</a>' +
      '<a href="javascript:void(0)" class="reply-btn js-reply-btn">Reply</a>' +
      '</p>\n' +
      '                        <!--回复框-->\n' +
      '                        <div class="reply-box">\n' +
      '                            <input type="text" class="reply-area">\n' +
      '                            <span class="reply-submit js-reply-submit">Submit</span>\n' +
      '                        </div>\n' +
      '                        <!--回复内容-->\n' +
      '                        <div class="reply-lists">\n' +
      '                        </div>\n' +
      '                    </div>\n' +
      '                </div>'

    //问题详情页面problemDetail.html
    if (window.location.href.match('problemDetail')) {
      var str = '  <div class="interaction-item">\n' +
        '                    <div class="item-left">\n' +
        '                        <img src="../img/images/forum/header3.png" alt="header" width="40" height="40">\n' +
        '                    </div>\n' +
        '                    <div class="item-right js-item-right">\n' +
        '                        <h5>x****mes</h5>\n' +
        '                        <p>March 22, 2018, 07:18:22 pm</p>\n' +
        '                        <p class="interaction-text">\n' + getStr +
        '                        </p>\n' +
        '                        <p class="reply-p">' + ' <a href="javascript:void(0)" class="give-like js-give-like">Approval(<span>0</span>)</a>' +
        '<a href="javascript:void(0)" class="reply-btn js-reply-btn">Reply</a>' +
        '</p>\n' +
        '                        <!--回复框-->\n' +
        '                        <div class="reply-box">\n' +
        '                            <input type="text" class="reply-area">\n' +
        '                            <span class="reply-submit js-reply-submit">Submit</span>\n' +
        '                        </div>\n' +
        '                        <!--回复内容-->\n' +
        '                        <div class="reply-lists">\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>'
    }
//publicProblemDetail作废.html
    if (window.location.href.match('publicProblemDetail')) {
      var str = '  <div class="interaction-item">\n' +
        '                    <div class="item-left">\n' +
        '                        <img src="../img/images/forum/header3.png" alt="header" width="40" height="40">\n' +
        '                    </div>\n' +
        '                    <div class="item-right js-item-right">\n' +
        '                        <h5>x****mes</h5>\n' +
        '                        <p>March 22, 2018, 07:18:22 pm</p>\n' + '<div class="adopt-flag"></div>' + '<p class="interaction-text">\n' + getStr +
        '                        </p>\n' +
        '                        <p class="reply-p">' + ' <a href="javascript:void(0)" class="give-like js-give-like">Approval(<span>0</span>)</a>' +
        '<a href="javascript:void(0)" class="reply-btn js-reply-btn">Reply</a>' +
        '</p>\n' +
        '                        <!--回复框-->\n' +
        '                        <div class="reply-box">\n' +
        '                            <input type="text" class="reply-area">\n' +
        '                            <span class="reply-submit js-reply-submit">Submit</span>\n' +
        '                        </div>\n' +
        '                        <!--回复内容-->\n' +
        '                        <div class="reply-lists">\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>'
    }

    $('.js-interaction').append(str)
  })
//是否采纳按钮
  $('body').on('click', '.js-adopt-btn', function () {
    var that = this
    //确认弹窗
    layer.confirm('Glad to help you! the persons who answer the question will get some rewards after adopting. And the operation can\'t be cancelled!', {
      btn: ['Cancel', 'Adopt'] //按钮
    }, function (index) {
      layer.close(index)
    }, function (index) {
      layer.close(index)
      $(that).hide()
      $(that).siblings('.adopt-flag').show()
    })
  })
  //问题编辑提交按钮结束

  //模拟用户评论  personalArticle.html
  //点击提交按钮
  $('.js-submit-name').click(function () {
    //模拟未重复用户名
    var that = this
    checkName(that)
  })
  //回车按键
  $('#first-name').keyup(function (e) {
    var that = this
    if (e.keyCode == 13) {
      checkName(that)
    }
  })

  //名称输入检测
  function checkName (that) {
    var name = $.trim($('#first-name').val())
    if (name == '000') {
      $(that).parent().parent().hide()
      $('.tags-mask').fadeOut()
    } else {
      $('.js-input-tips').fadeIn()
      //1.5秒默认隐藏
      setTimeout(function () {
        $('.js-input-tips').fadeOut()
      }, 1500)
    }
  }

//    动态添加热门标签
  //   热门标签获取焦点
  $('#dvKeywords').click(function () {
    $('#iptKeywords').focus()
  })

  $('#iptKeywords').blur(function () {
    var that = this
    createLabe(that)
  })

  //动态生成热门标签
  function createLabe (that) {
    var nowStr = $.trim(that.value.replace(/,/g, ''))
    if (nowStr == '') {
      return
    }
    $(that).parent().before('<li class="ui-item ui-lists"><input type="hidden" value="' + nowStr + '"><span class="ui-text">' + nowStr + '</span><span class="icon-sprite delete-button"></span></li>')
    that.value = ''
  }

  // //回车事件
  $('#iptKeywords').keyup(function (e) {
    var that = this
    if (e.keyCode == 13 || e.keyCode == 188) {
      createLabe(that)
    }
  })

  //获取元素
  $('.submit-btn').click(function () {
    var numArr = [] // 定义一个空数组
    $('input:hidden').each(function () {
      numArr.push($(this).val())
    })
    console.log(numArr.join())//添加的值
  })

  //删除当前元素
  $(document).delegate('.delete-button', 'click', function () {
    $(this).parent().remove()
  })

//    关闭失败原因
  $('.release-box .js-close-btn').click(function () {
    $(this).parent().hide()
  })

//    动态添加热门标签

})//end function

