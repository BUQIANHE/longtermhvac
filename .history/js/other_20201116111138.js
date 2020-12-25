$(function(){

  // 分类Categories js
  $('.cate_items,.categories,.page_menu').on('click', function(){

    $(this).find('.cls_items').slideToggle();

  })
  

  // index pro class switch
  // $('.tit_list').mouseenter(function () { 

  //   $(this).addClass('active iconfont').siblings().removeClass('active iconfont');
    
  // });
  

  // 详情多角度图片切换
  $('.small_pic').on('click', function(){

    var img = $(this).find('img').attr('src');

    $(this).addClass('current').siblings().removeClass('current');

    $('.big_pic img').attr('src', img);

  })
  

  /*============= user login js =============*/

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

  
  // 新闻导航按钮
  $('.iconcaidan').on('click', function(){

    $(this).toggleClass('active');

    if($(this).is('.active')){

      $(this).siblings('.help_aside').css({ left: '3%' })

    }else{

      $(this).siblings('.help_aside').removeAttr('style');

    }
  })

  // 产品列表样式切换
  $('.view_as .iconfont').on('click', function(){

    var type = $(this).attr('data-type');

    $(this).toggleClass('current');

    if($(this).is('.current') && type){

      $('.main_pros_items').addClass('grid');

    }else{

      $('.main_pros_items').removeClass('grid');

    }

  })

  //添加购物车弹窗
  $('.add_cart').on('click', function(){

    $('.cart_box').css({display: 'flex',opacity: '1'})

  })

  $('.cart_box_hd .iconclose').on('click', function(event){

    event.stopPropagation();

    $('.cart_box').css({display: 'none',opacity: '0'})

  })

  // $('.cart_box').on('click', function(event){

  //   event.stopPropagation();

  //   $('.cart_box').css({display: 'none',opacity: '0'})

  // })

  // 求购
  $('.iconcaret-down').on('click', function(){
    $(this).toggleClass('active');
  })

})