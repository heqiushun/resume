$(document).ready( function() {
	
	// radial-percentage
	$('#radial1').radialIndicator({
		barColor: '#c0e3e7',
		radius: 40, 
		barWidth: 5,
		initValue: 75,
		roundCorner : true,
		percentage: true
	});
	$('#radial2').radialIndicator({
		barColor: '#c0e3e7',
		radius: 40, 
		barWidth: 5,
		initValue: 60,
		roundCorner : true,
		percentage: true
	});
	$('#radial3').radialIndicator({
		barColor: '#c0e3e7',
		radius: 40, 
		barWidth: 5,
		initValue: 80,
		roundCorner : true,
		percentage: true
	});
	
	// timeline
	$('#timeline-1').timelineMe({
	  items: [
		{
		  type: 'smallItem',
		  label: '&nbsp;&nbsp;<span style="color:#dd6b66">基于药物小分子结构，构建预测不良反应模型</span>',
		  shortContent: '通过拆分药物分子结构，以零散的结果片段作为描述符，挖掘其和药物不良反应的关系。主要负责：结构处理，数据分析和模型构建。',
		  forcePosition: 'left'
		},
		{
		  type: 'smallItem',
		  label: '<span style="color:#759aa0">构建药物不良反应靶点综合信息数据库</span>&nbsp;&nbsp;',
		  shortContent: '以网络化的方式，构建药物不良反应综合信息数据库ADReCS-Target，以支持临床药物不良反应的分子机制研究。主要负责：部分数据采集，统计分析，完成网站和数据库的调整和维护。',
		  forcePosition: 'right'
		},
		{
		  type: 'smallItem',
		  label: '<span style="color:#dd6b66">实现肺炎克雷伯氏菌SNP分型方法</span>&nbsp;&nbsp;',
		  shortContent: '基于现有的多位点序列分型（MLST）方法，提出更快捷和方便的SNP分型方法，并简化和完善pipeline。',
		  forcePosition: 'left'
		},
		{
		  type: 'smallItem',
		  label: '<span style="color:#759aa0">染色体变异遗传病探针筛选</span>&nbsp;&nbsp;',
		  shortContent: '利用序列比对和多重条件筛选，寻找缺失片段的同源序列，设计筛查探针。',
		  forcePosition: 'right'
		},
		{
		  type: 'smallItem',
		  label: '<span style="color:#dd6b66">β-微管蛋白的氨基酸突变对微管动力学的影响</span>&nbsp;&nbsp;',
		  shortContent: '模拟246位氨基酸突变前后β-微管蛋白构像的改变对αβ-微管蛋白的结合能力的影响，阐述了更稳定的αβ-微管蛋白会影响微管的动力学，进而影响拟南芥的生长。',
		  forcePosition: 'left'
		}
	  ]
	});
	
	$('#timeline-2').timelineMe({
	  items: [
		{
		  type: 'smallItem',
		  label: '<span style="color:#759aa0">2011 - 2015&nbsp;&nbsp;本科&nbsp;&nbsp;生物科学</span>&nbsp;&nbsp;',
		  shortContent: '华南农业大学',
		  fullContent: '<div style="text-align: center;"><img src="img/scau.jpg" style="width: 100%;" /></div>',
		  showMore: '<a class="custom-show-btn-right"><i class="fa fa-plus-circle"></i></a>',
		  showLess: '<a class="custom-show-btn-right"><i class="fa fa-minus-circle"></i></a>',
		  forcePosition: 'right'
		},
		{
		  type: 'smallItem',
		  label: '&nbsp;&nbsp;<span style="color:#dd6b66">2015-2018&nbsp;&nbsp;研究生&nbsp;&nbsp;生物信息学</span>',
		  shortContent: '<span style="text-align:right">厦门大学<span>',
		  fullContent: '<div style="text-align: center;"><img src="img/xmu.jpeg" style="width: 100%;" /></div>',
		  showMore: '<a class="custom-show-btn-left"><i class="fa fa-plus-circle"></i></a>',
		  showLess: '<a class="custom-show-btn-left"><i class="fa fa-minus-circle"></i></a>',
		  forcePosition: 'left'
		}
	  ]
	});
	
	// circle change
	$("#steps-menu a").click(function(event) {
        // Replaces main content
        event.preventDefault();
        $(this).parent().addClass("is-active");
        $(this).parent().siblings().removeClass("is-active");
        var step = $(this).attr("href");
        $(".step-content").not(step).css("display", "none");
        $(step).fadeToggle();
        
        // Rotates the wheel
        $("#steps-menu").removeClass();
        var stepClass = step.charAt(6);
        $("#steps-menu").addClass("step-" + stepClass);
        currentNum=step.substr(6,1)-0+1;
    });
    //slideshow style interval
    var autoSwap = setInterval( swap,5000);
    var currentNum = 2;
    //pause slideshow and reinstantiate on mouseout
    $('#read-more a, #steps-menu a').hover(
      function () {
        clearInterval(autoSwap);	/*当停靠在按钮上时取消掉自动播放*/
    }, 
      function () {
       autoSwap = setInterval( swap,5000);		/*当不停靠时恢复自动播放*/
    });
    //swap images function
    function swap(action) {
      $("#bbp").fadeOut(100);
        $("#steps-menu li a:eq("+ (currentNum-1) +")").parent().addClass("is-active");
        $("#steps-menu li a:eq("+ (currentNum-1) +")").parent().siblings().removeClass("is-active");
        var step = $("#steps-menu li a:eq("+ (currentNum-1) +")").attr("href");
        $(".step-content").not(step).css("display", "none");
        $(step).fadeToggle();
        // Rotates the wheel
        $("#steps-menu").removeClass();
        var stepClass = step.charAt(6);
        $("#steps-menu").addClass("step-" + stepClass);
        $("#bbp").fadeIn(800);
        currentNum+=1;
        if(currentNum==7) {
            currentNum=1;
        }
    }	
	//echarts
	var myChart = echarts.init(document.getElementById('picture'),'vintage');
	var dataArr = ['瞎逛', '煲剧', '美食', '阅读','瞎逛', '煲剧', '美食', '阅读','瞎逛', '煲剧', '美食', '阅读','瞎逛', '煲剧', '美食', '阅读','瞎逛', '煲剧', '美食', '阅读','瞎逛', '煲剧', '美食', '阅读','瞎逛', '煲剧', '美食', '阅读','瞎逛', '煲剧', '美食', '阅读','瞎逛', '煲剧', '美食', '阅读',]
	var data = [];
	for (var i = 0; i < dataArr.length; ++i) {
		 data.push({
			 name: dataArr[i],
			 value: (dataArr.length - i) * 20
		 });
	}
	for (var i = 10; i < dataArr.length; ++i) {
		var cnt = Math.floor(Math.random() * 10);
		for (var j = 0; j < cnt; ++j) {
			data.push({
				name: dataArr[i],
				value: Math.random() * 10
			});
		}
	}
	var maskImage = new Image();
	maskImage.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTA2NDgyNDk5MzQxIiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM4MTgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTc2MC41MzMgMTgzLjg5M3MtNTYuMTA3IDc0LjI0LTY4LjE2IDExNy4zMzNjLTEyLjA1MyA0My4wOTMtNTcuMTczIDUzLjEyLTgwLjIxMyA3Ni4xNi0yMy4wNDAgMjMuMDQwLTI0MS43MDcgNTAuMTMzLTMwNS44MTMgNDAyLjEzMyAwIDAgMCA0OS4xNzMtNjAuMTYgNjMuMTQ3LTYwLjE2IDE0LjA4MC0xMjguNDI3IDMwLjUwNy0xNDAuMzczIDE1LjA0MC0xMS4wOTMtMTQuMjkzIDc2LjE2LTQ3LjE0NyA3Ni4xNi00Ny4xNDdzNDMuMDkzLTI4LjA1MyA0My4wOTMtMzkuMTQ3YzAtMTAuOTg3LTc5LjI1MyAyMC4wNTMtNzkuMjUzIDIwLjA1M3MtMTU0LjQ1MyA1Mi4xNi0xMDEuMjI3IDEwOC4zNzNjNTMuMTIgNTYuMTA3IDI0OS43MDcgMCAyODYuODI3LTE2IDM3LjEyLTE2IDkxLjItMjQuMTA3IDExNi4zNzMtMi4wMjcgMjUuMDY3IDIyLjA4MCA0Mi4xMzMgMzIuMTA3IDEyOC4zMiAyNy4wOTMgODYuMTg3LTUuMDEzIDE1OC40LTUuMDEzIDE1OC40LTUuMDEzczMzLjA2Ny0zMi4xMDctMjguMDUzLTQ3LjE0N2wtNTYuMTA3LTQuMDUzcy00Ni4wODAgMC45Ni05LjA2Ny00OC4xMDdjMzcuMTItNDkuMTczIDM1LjA5My04MS4xNzMgMzUuMDkzLTgxLjE3M3MyMy4wNDAtMC45NiAzMS4wNDAgMzcuMTJjOCAzOC4wODAgMjAuMDUzIDExNC4zNDcgODUuMjI3IDEyMC4zMiAwIDAgMTQuMDgwIDQ2LjA4MCA4Ni4xODcgMjEuMDEzIDAgMCAzNy4xMi0yMC4wNTMtOS4wNjctNDIuMTMzbC0xNy4wNjctMi45ODdzLTcyLjIxMy0xMzUuMzYtNjkuMjI3LTE3NS40NjdjMCAwLTgtMzIuMTA3IDE5LjA5My01NS4xNDdzOTkuMzA3LTExMy4yOCA1Ny4xNzMtMjc1LjczM2MwIDAtOS4wNjctMjAuMDUzIDUyLjE2LTI3LjA5MyA2MS4xMi03LjA0MCA2OS4yMjctMzkuMTQ3IDc3LjIyNy03OC4xODcgMCAwLTIuOTg3LTEzLjAxMy0xNy4wNjctMjQuMTA3bC0xMy4wMTMtMTUuMTQ3cy0xOC4wMjctNjEuMTItMTAxLjIyNy01NS4xNDdsLTcuMDQwLTkuMDY3LTEwLjAyNy00My4wOTNzLTIzLjA0MCA1Ljk3My0yNC4xMDcgMzEuMDQwbC0xNi0yMC4wNTNjMCAwLjEwNy0zNy4xMiAxOC4xMzMtNDAuMTA3IDc0LjM0N3oiIHAtaWQ9IjM4MTkiPjwvcGF0aD48L3N2Zz4=";
	var option= {
		 tooltip: {
			 show: false
		 },
		 series: [{
			 type: 'wordCloud',
			 gridSize: 1,
			 sizeRange: [11, 17],
			 rotationRange: [0, 90],
			 rotationStep: 45,
			 maskImage: maskImage,
			 textStyle: {
				 normal: {
					 color: function(v) {
						 if (v.value > 500) {
							 return '#2b821d';
						 } else if (v.value > 300) {
							 return '#0098d9';
						 } else if (v.value > 9) {
							 return '#ffc107';
						 } else {
							 return '#e6b600';
						 }
					 }
				 }
			 },
			 data: data
		 }]
	};
	maskImage.onload = function() {
		myChart.setOption(option);
	};
	window.onresize = function() {
		myChart.resize();
	}
});

function qq(){
	$.toast({
		heading: 'Tip',
		text: 'My QQ number is 674485712.',
		position: 'top-right',
		bgColor: '#444444',
		textColor: 'white',
		icon: 'info',
		stack: false
	})
}

function weixin(){
	$.toast({
		heading: 'Tip',
		text: 'My weixin number is shunzi071256.',
		position: 'top-right',
		bgColor: '#444444',
		textColor: 'white',
		icon: 'info',
		stack: false
	})
}

function weibo(){
	$.toast({
		heading: 'Tip',
		text: '微博昵称 “研久升宝宝” .',
		position: 'top-right',
		bgColor: '#444444',
		textColor: 'white',
		icon: 'info',
		stack: false
	})
}