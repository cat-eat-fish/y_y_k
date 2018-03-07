//轮播
			$(function(){
				//初始化
				$(".car-img ul li").first().show();
				$(".car-dian ul li").first().addClass("active")
				//手动控制图片的淡入淡出
				$(".car-dian ul li").mouseover(function(){
					$(this).addClass("active").siblings("li").removeClass("active");
					var index = $(this).index();
					i=index
					$(".car-img ul li").eq(index).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut();
				})	
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
				});
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
				});




				//顶部隐藏的搜索框
				$(window).scroll(function(){
					if($(this).scrollTop()>200){
						$('#hideTop').stop(true).animate({'top':'0px'},200);
					}else{
						$('#hideTop').stop(true).animate({'top':'-50px'},200);
					}
				});
				var a=$(window).scrollTop();
				if(a>200){
					$('#hideTop').stop(true).animate({'top':'0px'},200);
				}else{
					$('#hideTop').stop(true).animate({'top':'-50px'},200);
				}


				//鼠标移到上面有模糊
				$('.cnxh').find('li').hover(function(){
					$(this).find('img').animate({'opacity':'0.5'},200);
				},function(){
					$(this).find('img').animate({'opacity':'1'},200);
				});
				//回到顶部
				$('.goTop').on('click',function(){
					$("html,body").animate({scrollTop:0}, 500);
				});


				//鼠标移动到侧导行栏显示隐藏的内容
				$('.hide-con').hide();
				$('.hide-con').children().hide();
				$('aside ul li').mouseover(function(){
					var a=$(this).index();
					$('.hide-con').show().children().eq($(this).index()).show();
					$('.hide-con').hover(function(){
						$(this).show().children().hide().eq(a).show();
						$('aside ul li').eq(a).addClass("aa").siblings().removeClass('aa').end().children().addClass('bb').end().siblings().children().removeClass('bb');
					},function(){
						$(this).hide().children().hide();
						$('aside ul li').eq(a).removeClass('aa').children().removeClass('bb');
					});
				});
				$('aside ul li').mouseout(function(){
					var a=$(this).index();
					$('.hide-con').hide().children().eq($(this).index()).hide();
					$('aside ul li').removeClass('aa').children().removeClass('bb');
				});


				//左侧
				$('.fx-l ul li').on('click',function(){
					var index=$(this).index();
					$(this).addClass('active').siblings().removeClass('active')
					a=$("html,body").stop(true,true).animate({scrollTop:1750+$('.con section').eq(index).height()*index}, 500);
				});
				$(window).scroll(function(){
					var wst = $(window).scrollTop();
					//if(wst >= $(json.target[0]).offset().top-100){
					//	$(json.control1).fadeIn(500);
					//}else{
					//	$(json.control1).fadeOut(500);
					//}
					var array=[];
					for(var i =0; i<$('.con section').length;i++){
						var t = $('.con section').eq(i).offset().top;
						array.push(t);
					}
					for(var j=0;j<array.length;j++){
						if(wst>=array[j]-600){
							var index=j;
							console.log(array[j]-600)
							$('.fx-l ul li').eq(index).addClass('active').siblings().removeClass('active');
						}
					}
					console.log(array[8]-300)
					if(wst>array[8]-300 || wst<array[0]-300){
						$('.fx-l ul li').removeClass('active')
					}
				});


				//解决hover问题
				//$('section.fx-r .item-1 .fx-img').mouseover(function(){
				//	$(this).siblings('.fx-txt').show();
				//});

			});




