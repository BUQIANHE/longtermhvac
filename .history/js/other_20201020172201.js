$(function(){

  // 分类Categories js
  $('.cate_items,.categories,.page_menu').on('click', function(){
    $(this).find('.cls_items').slideToggle();
  })


  //首页bannerjs
  $('.banner_items').bxSlider({
    slideWidth: 1920,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    startSlide: 0,
    slideMargin: 0,
    auto: true,
    autoControls: false,
    pager: true,
    controls: false,
    speed: 600,
  })

  // index pro class switch
  $('.tit_list').mouseenter(function () { 
    $(this).addClass('active iconfont').siblings().removeClass('active iconfont');
    
  });






  // user login js 
  // 登陆注册切换
  $('.user_hd h4').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).is('.singin')){
      $('.login_form').hide();
      $('.reg_form').show();
    }else{
      $('.login_form').show();
      $('.reg_form').hide();
    }
  })

  // 忘记密码
  $('.forget i').on('click', function(){
    $('.login_form').hide();
    $('.forget_form').show();
  })
  $('.close').on('click', function(){
    $('.login_form').show();
    $('.forget_form').hide();
  })

  // 显示密码
  $('.eyes').on('click', function(){
    $(this).toggleClass('iconyanjing');
    if($(this).is('.iconyanjing')){
      $(this).siblings('input').attr('type', 'text');
    }else{
      $(this).siblings('input').attr('type', 'password');
    }
    
  })




})