$(function () {

  try {
    //仅限本地统一代码使用

    if ($('.r-title').length > 0) {
      var breadNav = `   <div class="bread-crumbs">
      <div class="bread-nav">
      <a href="javascript:void(0)"> MyAccount</a>
      <a href="javascript:void(0)">Shopping Cart</a>
      </div>
      </div>`
      $('.bread-crumbs').remove()
      $('.box-r').prepend(breadNav)
    }
    $('.go-btn').remove()
    $('.font-line').remove()
    $('.business-pic').remove()
    var str = `<div class="message-link">
  <!--业务员-->
  <div class="salesman-box js-salesman-box">
    <div class="salesman">
      <img src="../img/images/user2.png" alt="">
    </div>
    <!--        打招呼动画-->
    <div class="say-hi">
      Hi
    </div>

    <div class="message-parent js-message-box">
      <div class="message-box ">
        <div class="message-title">
<!--          <span class="iconfont icon-guanbi js-icon-guanbi"></span>-->
        </div>
        <div class="business-box">
          <h6 class="name">
            Daphne Liu
          </h6>
          <div class="links">
            <span class="iconfont icon-wujiaoxing"></span>
            <span class="iconfont icon-wujiaoxing"></span>
            <span class="iconfont icon-wujiaoxing"></span>
            <span class="iconfont icon-wujiaoxing"></span>
            <span class="iconfont icon-wujiaoxing"></span>
          </div>
          <div class="links">
            <span class="iconfont icon-Skype"></span>
            <a href="skype:live:service_7440?chat">pcbgogo.service</a>
          </div>
          <div class="links">
            <span class="iconfont icon-xinxi1"></span>
            <a href="mailto:service07@pcbgogo.com">service12@pcbgogo.com</a>
          </div>
        </div>
        <div class="leave-message" onclick="window.location.href = '/Message/Message'">Leave your message</div>
        <div class="question-help">
          <a class="question" href="https://www.pcbgogo.com/PaymentMethod.html" target="_blank">
            What kinds of payment methods does PCBGOGO have?
          </a>
          <a class="question" href="https://www.pcbgogo.com/orderguide.html" target="_blank">
            How to place your order in PCBGOGO?
          </a>
          <a class="question" href="https://www.pcbgogo.com/shipping_method_guide.html" target="_blank">
            What kinds of shipping methods does PCBGOGO offer?
          </a>
        </div>
      </div>
    </div>
  </div></div>`

    if (window.location.href.indexOf('relea') < 0 || window.location.href.indexOf('member') > 0) {
      $('body').append(str)
    }
  } catch (e) {

  }
  ////会员左侧导航
  var memberLeftNav = `
    <div class="category js-category-index">
      <div class="item active">
        <div class="item-name">
          <span class="iconfont icon-gouwuche2">
          </span>
          <div class="category-name">
            <span class="iconfont icon-xialasanjiao js-icon-toggle"></span>
            - My order
          </div>
        </div>
        <!--&lt;!&ndash;二级列表&ndash;&gt;-->
        <div class="second-item">
          <a class="second-active" href="shopping-car.html">
            <span class="second-name">Shopping Cart (0)</span>
          </a>
          <a href="awaiting-payment.html">
            <span class="second-name">Awaiting payment (0)</span>
          </a>
        </div>
      </div>
      <div class="item ">
        <div class="item-name">
          <span class="iconfont icon-yiwancheng"></span>
          <div class="category-name">
            <span class="iconfont icon-xialasanjiao js-icon-toggle"></span>
            - Order History
          </div>
        </div>
        <!--&lt;!&ndash;二级列表&ndash;&gt;-->
        <div class="second-item">
          <a href="all-payment.html">
            <span class="second-name">All (0)</span>
          </a>
          <a href="favorite.html">
            <span class="second-name">Favorite (0)</span>
          </a>
          <a href="production-status.html">
            <span class="second-name">Production status (0)</span>
          </a>
          <a href="unconfirmed-delivery.html">
            <span class="second-name">Unconfirmed delivery (0)</span>
          </a>
          <a href="completed.html">
            <span class="second-name">Completed (0)</span>
          </a>
        </div>
      </div>
      <div class="item ">
        <div class="item-name">
          <span class="iconfont icon-daipingjiab"></span>
          <div class="category-name">
            <span class="iconfont icon-xialasanjiao js-icon-toggle"></span>
            - Experience Share
          </div>
        </div>
        <!--&lt;!&ndash;二级列表&ndash;&gt;-->
        <div class="second-item">
          <a href="memberList.html">
            <span class="second-name">Comment</span>
          </a>
          <a href="myInvitation.html">
            <span class="second-name">My Invitation</span>
          </a>
          <a href="promoteIndex.html">
            <span class="second-name">Share links</span>
          </a>
        </div>
      </div>
      <div class="item ">
        <div class="item-name">
          <span class="iconfont icon-gerenziliao"></span>
          <div class="category-name">
            <span class="iconfont icon-xialasanjiao js-icon-toggle"></span>
            + My Profile
          </div>
        </div>
        <!--&lt;!&ndash;二级列表&ndash;&gt;-->
        <div class="second-item">
          <a href="essentialInformation.html">
            <span class="second-name">Basic information</span>
          </a>
          <a href="account-page.html">
            <span class="second-name">Cash</span>
          </a>
          <a href="coupon-page.html">
            <span class="second-name">Coupon (0)</span>
          </a>
          <a href="integral.html">
            <span class="second-name">Reward points</span>
          </a>
          <a href="receivingAddress.html">
            <span class="second-name">Delivery address</span>
          </a>
          <a href="changePassword.html">
            <span class="second-name">Change Password</span>
          </a>
          <a href="freightAccount.html">
            <span class="second-name">Freight Collect Account</span>
          </a>
        </div>
      </div>
      <div class="item ">
        <div class="item-name">
          <span class="iconfont icon-luntan"></span>
          <div class="category-name" onclick="window.open('../member/person-article.html','_self')">
            - My Forum
          </div>
        </div>
      </div>
      <div class="item ">
        <div class="item-name">
          <span class="iconfont icon-lipin"></span>
          <div class="category-name" onclick="window.open('gift-shop.html','_self')">
            <!-- 有标识就给我这个元素,没有不加-->
            <span class="iconfont icon-new"></span>
            - Gift Shop
          </div>
        </div>
      </div>
      <div class="item ">
        <div class="item-name">
          <span class="iconfont icon-liuyanpinglun"></span>
          <div class="category-name" onclick="window.open('newsed.html','_self')">- Message</div>
        </div>
      </div>
    </div>
    `

  $('.box-l').html(memberLeftNav)

  /////会员顶部导航
  var memberTopNav = `
  <!--顶部导航-->
  <div class="top-nav">
    <div class="nav-l">
      <a href="orderIndex.html">
        <img src="../img/images/order/orderlogo.png" alt="logo">
      </a>
    </div>
    <div class="nav-r">
      <!--右侧图标-->
      <ul class="hints">
<!--        <li class="active">-->
<!--          <a href="javascript:void(0)">-->
<!--              <span class="iconfont icon-jinduguanli">-->
<!--                 <i class="point "></i>-->
<!--              </span>-->
<!--            <div class="link-name">-->
<!--              Check order progress-->
<!--            </div>-->
<!--          </a>-->
<!--        </li>-->
        <li class="js-messages active ">
          <a href="javascript:void(0)">
              <span class="iconfont icon-icon_notice">
                 <i class="point "></i>
              </span>
            <div class="link-name">
              Notification
            </div>
          </a>
          <div class="message-list js-message-list">
                    <div class="message-title clear-fix">
                        <div class="message-numbers">
                            Unread：<span>20</span>
                        </div>
                        <a class="read-btn js-read-btn" href="javascript:void(0)">All messages have been read</a>
                    </div>
                    <div class="lists-box js-lists-box">
                        <!--系统消息-->
                        <a href="javascript:void(0)" class="item">
                            <div class="item-left">
                                <div class="sys-sign">
                                    <span class="iconfont icon-tongzhi"></span>
                                </div>
                            </div>
                            <div class="item-right">
                                <div class="des">
                                    You have got a PCBGOGO coupon with <span class="number">$XXX</span>.
                                </div>
                                <div class="time">
                                    Mar 06.2019, 17:21:39
                                </div>
                            </div>
                        </a>
                        <a href="javascript:void(0)" class="item">
                            <div class="item-left">
                                <div class="sys-sign">
                                    <span class="iconfont icon-tongzhi"></span>
                                </div>
                            </div>
                            <div class="item-right">
                                <div class="des">
                                    You can use your coupon right now because it will be due after 2 days.
                                </div>
                                <div class="time">
                                    Mar 06.2019, 17:21:39
                                </div>
                            </div>
                        </a>
                        <a href="javascript:void(0)" class="item">
                            <div class="item-left">
                                <div class="sys-sign">
                                    <span class="iconfont icon-tongzhi"></span>
                                </div>
                            </div>
                            <div class="item-right">
                                <div class="des">
                                    You have recharged / deducted with $XXX in PCBGOGO, please check it immediately in
                                    your account.
                                </div>
                                <div class="time">
                                    Mar 06.2019, 17:21:39
                                </div>
                            </div>
                        </a>
                        <!--订单消息-->
                        <a href="javascript:void(0)" class="item">
                            <div class="item-left">
                                <div class="order-sign">
                                    <span class="iconfont icon-icon-ic_memory_px"></span>
                                </div>
                            </div>
                            <div class="item-right">
                                <div class="des">
                                    Your order <span class="number">(xxx)</span> fail to pass the verification, so you
                                    need to submit it again.
                                </div>
                                <div class="time">
                                    Mar 06.2019, 17:21:39
                                </div>
                            </div>
                        </a>
                        <a href="javascript:void(0)" class="item">
                            <div class="item-left">
                                <div class="order-sign">
                                    <span class="iconfont icon-icon-ic_memory_px"></span>
                                </div>
                            </div>
                            <div class="item-right">
                                <div class="des">
                                    The prices are changed in your order <span class="number">(xxx)</span>, so please
                                    fill the account in time so that your production orders are finished successfully.
                                </div>
                                <div class="time">
                                    Mar 06.2019, 17:21:39
                                </div>
                            </div>
                        </a>
                        <a href="javascript:void(0)" class="item">
                            <div class="item-left">
                                <div class="order-sign">
                                    <span class="iconfont icon-icon-ic_memory_px"></span>
                                </div>
                            </div>
                            <div class="item-right">
                                <div class="des">
                                    You have canceled the orders <span class="number">(xxx)</span>, and the amount had
                                    refunded in your account, so please check it now.
                                </div>
                                <div class="time">
                                    Mar 06.2019, 17:21:39
                                </div>
                            </div>
                        </a>
                        <!-- 站内消息-->
                        <a href="javascript:void(0)" class="item">
                            <div class="item-left">
                                <div class="site-sign">
                                    <span class="iconfont icon-ai-message"></span>
                                </div>
                            </div>
                            <div class="item-right">
                                <div class="des">
                                    You have canceled the orders <span class="number">(xxx)</span>, and the amount had
                                    refunded in your account, so please check it now.
                                </div>
                                <div class="time">
                                    Mar 06.2019, 17:21:39
                                </div>
                            </div>
                        </a>
                        <a href="javascript:void(0)" class="item">
                            <div class="item-left">
                                <div class="order-sign">
                                    <span class="iconfont icon-icon-ic_memory_px"></span>
                                </div>
                            </div>
                            <div class="item-right">
                                <div class="des">
                                    Your order <span class="number">(xxx)</span> fail to pass the verification, so you
                                    need to submit it again.
                                </div>
                                <div class="time">
                                    Mar 06.2019, 17:21:39
                                </div>
                            </div>
                        </a>
                        <a href="javascript:void(0)" class="item">
                            <div class="item-left">
                                <div class="order-sign">
                                    <span class="iconfont icon-icon-ic_memory_px"></span>
                                </div>
                            </div>
                            <div class="item-right">
                                <div class="des">
                                    The prices are changed in your order <span class="number">(xxx)</span>, so please
                                    fill the account in time so that your production orders are finished successfully.
                                </div>
                                <div class="time">
                                    Mar 06.2019, 17:21:39
                                </div>
                            </div>
                        </a>
                        <a href="javascript:void(0)" class="item">
                            <div class="item-left">
                                <div class="order-sign">
                                    <span class="iconfont icon-icon-ic_memory_px"></span>
                                </div>
                            </div>
                            <div class="item-right">
                                <div class="des">
                                    Your order <span class="number">(xxx)</span> fail to pass the verification, so you
                                    need to submit it again.
                                </div>
                                <div class="time">
                                    Mar 06.2019, 17:21:39
                                </div>
                            </div>
                        </a>
                        <a href="javascript:void(0)" class="item">
                            <div class="item-left">
                                <div class="order-sign">
                                    <span class="iconfont icon-icon-ic_memory_px"></span>
                                </div>
                            </div>
                            <div class="item-right">
                                <div class="des">
                                    The prices are changed in your order <span class="number">(xxx)</span>, so please
                                    fill the account in time so that your production orders are finished successfully.
                                </div>
                                <div class="time">
                                    Mar 06.2019, 17:21:39
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
        </li>
        <li class="active ">
          <a href="javascript:void(0)">
              <span class="iconfont icon-youhuiquan">
                  <i class="point "></i>
              </span>
            <div class="link-name">
              Coupon
            </div>
          </a>
        </li>
        <li class="active ">
          <a href="javascript:void(0)">
              <span class="iconfont icon-shoufukuanguanli">
                 <i class="point "></i>
              </span>
            <div class="link-name">
              Awaiting payment
            </div>
          </a>
        </li>
        <li class="active">
          <a href="javascript:void(0)">
              <span class="iconfont icon-gouwuche1">
                  <i class="point">99</i>
              </span>
            <div class="link-name">
              Shopping Cart
            </div>
          </a>
        </li>
      </ul>
      <!--登录后-->
      <div class="user-box">
        <div class="user-head">
          <img src="../img/images/user.png" alt="">
        </div>
        <div class="user-info">
          <div class="info-name">
            hi <span>
            facade
            facade
            facade
            facade
            facade
            facade
            facade
            facade
            facade
          </span>
          </div>
          <div class="info-account">
            My Account
          </div>
        </div>
        <!--信息列表-->
        <div class="person-info">
          <!--   已登录 -->
          <div class="info js-logined">
            <div class="left-info">
              <div class="tips">
                Email: <span id="loginEmail">309*******@qq.com</span>
              </div>
              <a class="out-btn" href="javascript:void(0)">
                Sign Out
              </a>
            </div>
          </div>

          <div class="link-lists">
            <!-- 有数量添加   active 类名-->
            <div class="item">
              <a href="https://member.pcbgogo.com">
                <span> •  </span>
                <span class="name">My Account</span>
              </a>
            </div>
            <div class="item js-AwaitingPayment active">
              <a href="https://member.pcbgogo.com/Order/AwaitingPayment">
                <span> •  </span>
                <span class="name">My Orders list</span>
              </a>
            </div>
            <div class="item active">
              <a href="https://member.pcbgogo.com/Member/MemberBalanceLog">
                <span> •  </span>
                <span class="name">Account Balance</span>
              </a>
            </div>
            <div class="item js-Coupons">
              <a href="https://member.pcbgogo.com/Specials/Coupons">
                <span> •  </span>
                <span class="name">Discount coupon</span>
              </a>
            </div>
            <div class="item">
              <a href="https://member.pcbgogo.com/Specials/Rewards">
                <span> •  </span>
                <span class="name">Reward points</span>
              </a>
            </div>
            <div class="item">
              <a href="https://member.pcbgogo.com/Address/AddOrEdit">
                <span> •  </span>
                <span class="name">My Delivery Address</span>
              </a>
            </div>
            <div class="item">
              <a href="https://member.pcbgogo.com/Forum/ArticleList">
                <span> •  </span>
                <span class="name">My Forum</span>
              </a>
            </div>
            <div class="item js-message">
              <a href="https://member.pcbgogo.com/Message/Message">
                <span> •  </span>
                <span class="name">Message</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--二级菜单-->
  <div class="main-menu">
    <div class="menu-account">
      <span class="iconfont icon-shouye"></span>
      <div class="nav-flag" onclick="window.open('orderIndex.html','_self')">
        My Account
      </div>
    </div>
    <ul class="menu-list clear-fix">
      <li class="active"><a href="javascript:void(0)">Forum</a></li>
<!--      <li><a href="javascript:void(0)">How to order</a></li>-->
      <li><a href="javascript:void(0)">Files required</a></li>
      <li><a href="javascript:void(0)">PCB Capabilities</a></li>
      <li><a href="javascript:void(0)">PCBA Capabilities</a></li>
    </ul>
    <!--计价链接-->
    <div class="in-link">
      <span class="iconfont icon-jisuan1"></span>
      <a href="javascript:void(0)">Order PCB Now</a>
      <span>|</span>
      <a href="javascript:void(0)">Order PCBA Now</a>
      <span>|</span>
      <a href="javascript:void(0)">Order Stencil Now</a>
    </div>
  </div>
  `
  $('.the-top').html(memberTopNav)

  var urlArr = ['person-article', 'person-askAnswer', 'person-commentShare',
    'person-collectFollow', 'person-Follow',
    'person-Follower', 'person-Inform']
  $('.style-list li').removeClass('active-list')
  let pathName = window.location.pathname
  let pathNameIndex = pathName.lastIndexOf('/') + 1
  let pathLastPoint = pathName.lastIndexOf('.')
  let tempUrl = pathName.substring(pathNameIndex, pathLastPoint)

  let urlIndex = urlArr.indexOf(tempUrl)
  if (urlIndex >= 0) {
    $('.style-list li').eq(urlIndex).addClass('active-list')
  }

  $('.js-category-index .item').click(function () {
    $(this).addClass('active').siblings('.item').removeClass('active')
  })

  $('.js-icon-toggle').click(function (e) {
    $(this).toggleClass('isHide')
    $(this).parents('.item').find('.second-item').toggle()
    e.stopPropagation()
  })

  //    订单状态切换
  $('.tabed-ul>li').click(function () {
    let urlIndex = $(this).index()
    let orderArr = ['all-payment.html', 'awaiting-payment.html', 'favorite.html', 'production-status.html',
      'unconfirmed-delivery.html', 'completed.html']
    let url = window.location.href
    let urlLast = url.lastIndexOf('/') + 1
    let jumpUrl = url.substr(0, urlLast) + orderArr[urlIndex]
    window.open(jumpUrl, '_self')
  })

  //会员中心业务显示
  $('.js-salesman-box').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $('.js-message-box').animate({ width: 0, height: 0 }, 190)
    } else {
      $(this).addClass('active')
      $('.js-message-box').animate({ width: 280, height: 415 }, 190)
    }
  })
  //业务关闭
  $('.js-icon-guanbi').click(function (e) {
    $('.js-salesman-box').removeClass('active')
    $('.js-message-box').animate({ width: 0, height: 0 }, 190)
    e.stopPropagation()
  })

  // 菜单左侧状态  伪代码
  void function () {
    if ($('.js-category-index').length < 0) {
      return
    }
    function urlDealFn (url) {
      var urlIndex = url.lastIndexOf('/')
      return url.substr(urlIndex + 1)
    }

    $('.second-item a').removeClass('second-active')
    $('.js-category-index .item').removeClass('active')
    if (urlDealFn(window.location.href) === 'newsed.html') {
      $('.js-category-index .item').eq(-1).addClass('active')
      return
    }
    if (urlDealFn(window.location.href) === 'gift-shop.html') {
      $('.js-category-index .item').eq(-2).addClass('active')
      return
    }
    if (urlDealFn(window.location.href) === 'person-article.html') {
      $('.js-category-index .item').eq(-3).addClass('active')
      return
    }
    $('.js-category-index a').each(function () {
      if (urlDealFn($(this)[0].href) === urlDealFn(window.location.href)) {
        $(this).addClass('second-active')
        $(this).parents('.item').addClass('active')
      }
    })
  }()

})//end function

