$(function () {
  //返回顶部


//登录前后
  $('.js-user-activity').click(function (e) {
    $('.user-item').show()
    $(document).one('click', function () {
      $('.user-item').hide()
    })
    e.stopPropagation()
  })
//    点击搜索
  $('.js-btn-search').click(function () {
    alert('搜索内容')
  })
//回车搜索
  $('.js-order-search').keydown(function (e) {
    console.log(e.keyCode)
    if (e.keyCode === 13 && $(this).val() !== '') {
      alert('搜索内容')
    }
  })
//    自动进度
  var mm = null;
  (function () {
    mm = parseInt($('.new-jindu').text()) / 100 * 60
    $('.js-new-progress').width(mm)
  })()

})//end function
