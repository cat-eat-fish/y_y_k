			//轮播
			$(function(){
				//初始化
				$(".car-img ul li").first().show();
				$(".car-dian ul li").first().addClass("active");
				//手动控制图片的淡入淡出
				$(".car-dian ul li").mouseover(function(){
					$(this).addClass("active").siblings("li").removeClass("active");
					var index = $(this).index();
					i=index
					$(".car-img ul li").eq(index).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut();
				});
				//通过时间间隔函数，控制图片的显示
				var i=0;
				var t = setInterval(move,5000);
				//动画运行核心函数
				function move(){
					i++;
					if(i==7){
					   i=0;
					}
					$(".car-dian ul li").eq(i).stop(true,true).addClass("active").siblings().removeClass("active")
					$(".car-img ul li").eq(i).stop(true,true).fadeIn().siblings().fadeOut();
				}
				//鼠标移入out元素时，停掉动画
				$(".car").hover(function(){
					clearInterval(t);
				},function(){
					t = setInterval(move,5000);
				})	;
				//点击左边执行动画
				function moveL(){
					i--;
					if(i==-1){
					   i=5;
					   }
					$(".car-dian ul li").eq(i).stop(true,true).addClass("active").siblings().stop(true,true).removeClass("active")
					$(".car-img ul li").eq(i).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut();
			
				}
				$(".car-lr .car-lr-l").click(function(){
					moveL();
					
				});
				//点击右边执行动画
				$(".car-lr .car-lr-r").click(function(){
					move();
				})		
			});



			//保留背景
			$('.ul-1 a').mouseover(function(){
				$(this).siblings('.hid').hover(function(){
					$(this).siblings('a').addClass('active')
				},function(){
					$(this).siblings('a').removeClass('active');
				})
			});

			//内容切换部分background: #FF6700;
			$('.slider').css({'width':($('.slider').children('div').length)*296+'px'});
			var i=0;
			$('.xm-pagers li').click(function(){
				var index=$(this).index();
				i=index;
				$(this).children('.dot').addClass('active').end().siblings().children('.dot').removeClass('active');
				$(this).parents('.xm-pagers-wrapper').siblings('.slider').css({'margin-left':-296*index+'px','transition':'all 0.5s'});
			});
			$('.solid-lr>.lr-r').click(function(){
				var n=$(this).parents('.solid-lr').siblings('.slider').find('.slider-box').length;
				i=$(this).parents('.solid-lr').siblings('.xm-pagers-wrapper').find('.active').parent().index();
				i++;
				if(i==n){
					i=n-1;
				}
				$(this).parents('.solid-lr').siblings('.xm-pagers-wrapper').children('.xm-pagers').children('.pager').eq(i).children('.dot').addClass('active').end().siblings().children('.dot').removeClass('active');
				$(this).parents('.solid-lr').siblings('.slider').css({'margin-left':-296*i+'px','transition':'all 0.5s'});
			});
			$('.solid-lr>.lr-l').click(function(){
				i=$(this).parents('.solid-lr').siblings('.xm-pagers-wrapper').find('.active').parent().index();
				i--;
				if(i==-1){
					i=0;
				}
				$(this).parents('.solid-lr').siblings('.xm-pagers-wrapper').children('.xm-pagers').children('.pager').eq(i).children('.dot').addClass('active').end().siblings().children('.dot').removeClass('active');
				$(this).parents('.solid-lr').siblings('.slider').css({'margin-left':-296*i+'px','transition':'all 0.5s'});
			});

			//左右显示
			$('.xmmxdp-t-r .lr .lr-l').css({'color':'#ccc'})
			$('.xmmxdp-t-r .lr .lr-r').click(function(){
				console.log($(this))
				$(this).parents('.xmmxdp-t').siblings('.xmmxdp-c').children('.xmmxdp-c ul').eq(0).stop(true,true).animate({'left':'-1226px'},500).end().eq(1).stop(true,true).animate({'left':'0'},500);
				$(this).css({'color':'#ccc'}).siblings().css({'color':'#000'});
			});
			$('.xmmxdp-t-r .lr .lr-l').click(function(){
				$(this).parents('.xmmxdp-t').siblings('.xmmxdp-c').children('.xmmxdp-c ul').eq(0).stop(true,true).animate({'left':'0'},500).end().eq(1).stop(true,true).animate({'left':'1226px'},500);
				$(this).css({'color':'#ccc'}).siblings().css({'color':'#000'});
			});


			//类似选项卡
			$(".jd-t-r>ul li").mouseover(function(){
				var a=$(this).index();
				$(this).find("a").addClass("active").end().siblings("li").find("a").removeClass("active");
				$(this).parents('.jd-t').next().find('.jd-c-r>ul').eq(a).show().siblings().hide();
			});

			//上下切换隐藏
			$('.header-nav-menu').hide();
			//$('.header-nav-menu-w ul').hide();
			$('header .nav ul.nav-1 li').hover(function(){
				var index=$(this).index();
				$('.header-nav-menu').stop().slideDown(300);
				$('.header-nav-menu ul').eq(index).show().siblings().hide();
				$('.header-nav-menu ul').eq(index).hover(function(){
					$(this).parents('.header-nav-menu').stop().show();
				},function(){
					$(this).parents('.header-nav-menu').stop().slideUp(300);
				});
			},function(){
				$('.header-nav-menu ul').parents('.header-nav-menu').stop().slideUp(300);
			});
//

