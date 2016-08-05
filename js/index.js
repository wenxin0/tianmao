//1.选项卡特效
window.onload=function(){
	//先获取元素
	var distance=$(".distance");
	var banneritem=$(".banneritem");
	for(let i=0;i<distance.length;i++){
		/*先执行的循环后执行的事件，所以当触发事件时
		i=4，报错。解决方法：要给每个元素添加属性*/
		
		distance[i].onmouseover=function(){
			//this指移到哪个元素就是谁
			banneritem[i].style.display="block";
		}
		distance[i].onmouseout=function(){
			banneritem[i].style.display="none";
		}
	}
	//我的淘宝
	var topright=$(".topright");
	var topright1=$(".topright1");
	var topright2=$(".topright2");
	var topright3=$(".topright3");
	var topright11=$(".topright11");
	var topright12=$(".topright12");
	var topright13=$(".topright13");
	var topright14=$(".topright14");
	var topright15=$(".topright15");
	topright1[1].onmouseover=function(){
		topright11[0].style.display="block";
	}
	topright1[1].onmouseout=function(){
		topright11[0].style.display="none";
	}
	//收藏夹
	topright1[0].onmouseover=function(){
		topright12[0].style.display="block";
	}
	topright1[0].onmouseout=function(){
		topright12[0].style.display="none";
	}
	//手机版
	topright[1].onmouseover=function(){
		topright13[0].style.display="block";
	}
	topright[1].onmouseout=function(){
		topright13[0].style.display="none";
	}
	//商家支持
	topright2[0].onmouseover=function(){
		topright14[0].style.display="block";
	}
	topright2[0].onmouseout=function(){
		topright14[0].style.display="none";
	}
	//网站导航
	topright3[0].onmouseover=function(){
		topright15[0].style.display="block";
	}
	topright3[0].onmouseout=function(){
		topright15[0].style.display="none";
	}

	//小猫头1
	var product_dis1=$("#product_dis1");
	var xiaomaotou1=$(".xiaomaotou1");
	product_dis1.onmouseover=function(){
		xiaomaotou1[0].style.display="block";
	}
	product_dis1.onmouseout=function(){
		xiaomaotou1[0].style.display="none";
	}
	//小猫头2
	var product_dis2=$("#product_dis2");
	var xiaomaotou2=$(".xiaomaotou2");
	product_dis2.onmouseover=function(){
		xiaomaotou2[0].style.display="block";
	}
	product_dis2.onmouseout=function(){
		xiaomaotou2[0].style.display="none";
	}
	//小猫头3
	var product_dis3=$("#product_dis3");
	var xiaomaotou3=$(".xiaomaotou3");
	product_dis3.onmouseover=function(){
		xiaomaotou3[0].style.display="block";
	}
	product_dis3.onmouseout=function(){
		xiaomaotou3[0].style.display="none";
	}
	//小猫头4
	var product_dis4=$("#product_dis4");
	var xiaomaotou4=$(".xiaomaotou4");
	product_dis4.onmouseover=function(){
		xiaomaotou4[0].style.display="block";
	}
	product_dis4.onmouseout=function(){
		xiaomaotou4[0].style.display="none";
	}
	//小猫头5
	var product_dis5=$("#product_dis5");
	var xiaomaotou5=$(".xiaomaotou5");
	product_dis5.onmouseover=function(){
		xiaomaotou5[0].style.display="block";
	}
	product_dis5.onmouseout=function(){
		xiaomaotou5[0].style.display="none";
	}
	//小猫头6
	var product_dis6=$("#product_dis6");
	var xiaomaotou6=$(".xiaomaotou6");
	product_dis6.onmouseover=function(){
		xiaomaotou6[0].style.display="block";
	}
	product_dis6.onmouseout=function(){
		xiaomaotou6[0].style.display="none";
	}
	//小猫头7
	var product_dis7=$("#product_dis7");
	var xiaomaotou7=$(".xiaomaotou7");
	product_dis7.onmouseover=function(){
		xiaomaotou7[0].style.display="block";
	}
	product_dis7.onmouseout=function(){
		xiaomaotou7[0].style.display="none";
	}
	//小猫头8
	var product_dis8=$("#product_dis8");
	var xiaomaotou8=$(".xiaomaotou8");
	product_dis8.onmouseover=function(){
		xiaomaotou8[0].style.display="block";
	}
	product_dis8.onmouseout=function(){
		xiaomaotou8[0].style.display="none";
	}
	//小猫头9
	var product_dis9=$("#product_dis9");
	var xiaomaotou9=$(".xiaomaotou9");
	product_dis9.onmouseover=function(){
		xiaomaotou9[0].style.display="block";
	}
	product_dis9.onmouseout=function(){
		xiaomaotou9[0].style.display="none";
	}
	//小猫头10
	var product_dis10=$("#product_dis10");
	var xiaomaotou10=$(".xiaomaotou10");
	product_dis10.onmouseover=function(){
		xiaomaotou10[0].style.display="block";
	}
	product_dis10.onmouseout=function(){
		xiaomaotou10[0].style.display="none";
	}
//2.轮播图特效
	var win=$(".banner_middle")[0];//窗口
	var as=$("a",win);//win指范围，banner_middle范围下的a标签
	var lis=$("li",$(".circle")[0]);
	var num=0;//实时监控当前窗口中显示图片的下标
	as[0].style.zIndex=10;//初始化状态 第一张图片的层级调高，剩下的降低
	var t=setInterval(moveR,2000);
	win.onmouseover=function(){
		clearInterval(t);
	}
	win.onmouseout=function(){
		t=setInterval(moveR,2000);
	}
	//点儿 选项卡
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onmouseover=function(){
			if(num==this.index){
				return;
			}
			for(var j=0;j<as.length;j++){
				// as[j].style.zIndex=5;
				animate(as[j],{opacity:0});
				lis[j].className="";//初始状态			
			}
			lis[this.index].className="hot";
			// as[this.index].style.zIndex=10;
			animate(as[this.index],{opacity:1});
			num=this.index;//更新num
		}
	}
//点儿和图片一起动
	function moveR(){
		num++;
		if(num==as.length){
			num=0;
		}
		//先所有的图片层级降低，调高当前图片层级
		for(var i=0;i<as.length;i++){
			// as[i].style.zIndex=5;
			animate(as[i],{opacity:0});
			lis[i].className="";//初始状态			
		}
		lis[num].className="hot";
		// as[num].style.zIndex=10;
		animate(as[num],{opacity:1},function(){
			flag=true;
		});
	}
	
//3.鼠标经过向左滑动特效
	var picright=$(".picright");
	for(var i=0;i<picright.length;i++){
		picright[i].j=i;
		picright[i].onmouseover=function(){
		animate(picright[this.j],{"marginRight":"10px"},100,Tween.Linear);
		}
		picright[i].onmouseout=function(){
		animate(picright[this.j],{"marginRight":"0"},100);
		}
	}
	var picright1=$(".picright1");
	for(var i=0;i<picright1.length;i++){
		picright1[i].j=i;
		picright1[i].onmouseover=function(){
		animate(picright1[this.j],{"marginRight":"10px"},100,Tween.Linear);
		}
		picright1[i].onmouseout=function(){
		animate(picright1[this.j],{"marginRight":"0"},100);
		}
	}
	var picright2=$(".picright2");
	for(var i=0;i<picright2.length;i++){
		picright2[i].j=i;
		picright2[i].onmouseover=function(){
		animate(picright2[this.j],{"marginRight":"10px"},100,Tween.Linear);
		}
		picright2[i].onmouseout=function(){
		animate(picright2[this.j],{"marginRight":"0"},100);
		}
	}
//4.楼层函数
	var floor=$(".floor");
	var ARR=[];
	for(var I=0;I<floor.length;I++){
		ARR.push(floor[I].offsetTop);
	}
	var HEIGHTS=document.documentElement.clientHeight;
	var search=$(".search")[0];
	//滚轮滚动的距离+窗口可视区域高度>=当前楼层到页面顶部距离

	//楼层跳转
	//点击相应楼层按钮document.body:document.documentElement
	var FLAG=true;
	var LIS=$("li",$(".jump")[0]);
	for(var I=0;I<LIS.length;I++){
		LIS[I].index=I;
		LIS[I].onclick=function(){
		FLAG=false;
		for(var j=0;j<LIS.length;j++){
			LIS[j].style.background="#626262";
		}
		LIS[this.index].style.background="#DD2727";
		// var obj=document.body.scrollTop?document.body:document.documentElement;
		animate(document.body,{scrollTop:ARR[this.index]},function(){FLAG=true;});
		animate(document.documentElement,{scrollTop:ARR[this.index]},function(){FLAG=true;});

		}
	}


	var sflag=true;var lflag=true;
	window.onscroll=function(){//滚动事件
	//实时获取当前状态滚轮滚动的距离
	var OBJ=document.body.scrollTop?document.body:document.documentElement;
	var scrolltop=OBJ.scrollTop;
	var louceng=$(".jump")[0];
	//判断滚轮滚动的距离+窗口可视区域高度>=当前楼层到页面顶部距离
	for(var i=0;i<floor.length;i++){
		if(scrolltop+HEIGHTS>=ARR[i]+100){
			//当前层下的图片进行加载  floor[i]
			var imgs=$("img",floor[i]);
			for(var j=0;j<imgs.length;j++){
				imgs[j].src=imgs[j].getAttribute("imgpath");
			}
		}
	}


//顶部搜索框
	if(scrolltop>=ARR[0]){
		if(sflag){
		sflag=false;
		animate(search,{top:0});
		}
	}else{
		if(!sflag){
		sflag=true;
		animate(search,{top:-50});
		}
	}

//楼层隐藏

	if(scrolltop<ARR[0]){
		if(lflag){
		lflag=false;
		animate(louceng,{left:-40});
		}
	}else{
		if(!lflag){
		lflag=true;
		animate(louceng,{left:0});
		}
	}




	//按钮
	if(!FLAG){
		return;
	}
	for (var i = 0; i < floor.length; i++) {
		if (scrolltop+HEIGHTS>=ARR[i]+200) {
			for(var j=0;j<LIS.length;j++){
			LIS[j].style.background="#626262";
			}
			LIS[i].style.background="#DD2727";
		}
	 }
   }
//5.热门品牌遮罩
	var brand=$(".brand");
	var brand1=$(".brand1");
	for(var i=0;i<brand.length;i++){
		brand[i].aa=i;
		brand[i].onmouseover=function(){
			// for(var j=0;j<brand1.length;j++){
			// 	brand1[j].style.display="none";
			// }
			brand1[this.aa].style.display="block";
		}
		brand[i].onmouseout=function(){
			for(var i=0;i<brand1.length;i++){
				brand1[i].style.display="none";
			}
		}
	}
//6.右侧固定栏
 var lo2=$(".lo2");
 var loo=$(".loo");
 for (var i=0; i<lo2.length; i++) {
 	lo2[i].cc=i;
 	lo2[i].onmouseover=function(){
 		for(var j=0;j<loo.length;j++){
 			loo[j].style.display="none";
 			loo[j].style.left="-150px";
 		}
 	loo[this.cc].style.display="block";
 	animate(loo[this.cc],{left:-90},200);
 	}
 	lo2[i].onmouseout=function(){
 		for(var j=0;j<loo.length;j++){
 			loo[j].style.display="none";
 			animate(loo[this.cc],{left:-150},200);
 		}
 	}
 }





}