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
		initValue: 70,
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
		  label: '&nbsp;&nbsp;<span style="color:#406da4">基于药物小分子结构，构建预测不良反应模型</span>',
		  shortContent: '通过拆分药物分子结构，以零散的结果片段作为描述符，挖掘其和药物不良反应的关系。主要负责：结构处理，数据分析和模型构建。',
		  forcePosition: 'left'
		},
		{
		  type: 'smallItem',
		  label: '<span style="color:#406da4">构建药物不良反应靶点综合信息数据库</span>&nbsp;&nbsp;',
		  shortContent: '以网络化的方式，构建药物不良反应综合信息数据库ADReCS-Target，以支持临床药物不良反应的分子机制研究。主要负责：部分数据采集，统计分析，完成网站和数据库的调整和维护。',
		  forcePosition: 'right'
		},
		{
		  type: 'smallItem',
		  label: '<span style="color:#406da4">实现肺炎克雷伯氏菌SNP分型方法</span>&nbsp;&nbsp;',
		  shortContent: '基于现有的多位点序列分型（MLST）方法，提出更快捷和方便的SNP分型方法，并简化和完善pipeline。',
		  forcePosition: 'left'
		},
		{
		  type: 'smallItem',
		  label: '<span style="color:#406da4">染色体变异遗传病探针筛选</span>&nbsp;&nbsp;',
		  shortContent: '利用序列比对和多重条件筛选，寻找缺失片段的同源序列，设计筛查探针。',
		  forcePosition: 'right'
		},
		{
		  type: 'smallItem',
		  label: '<span style="color:#406da4">β-微管蛋白的氨基酸突变对微管动力学的影响</span>&nbsp;&nbsp;',
		  shortContent: '模拟246位氨基酸突变前后β-微管蛋白构像的改变对αβ-微管蛋白的结合能力的影响，阐述了更稳定的αβ-微管蛋白会影响微管的动力学，进而影响拟南芥的生长。',
		  forcePosition: 'left'
		}
	  ]
	});
	
	$('#timeline-2').timelineMe({
	  items: [
		{
		  type: 'smallItem',
		  label: '<span style="color:#406da4">2011 - 2015&nbsp;&nbsp;本科&nbsp;&nbsp;生物科学</span>&nbsp;&nbsp;',
		  shortContent: '华南农业大学',
		  fullContent: '<div style="text-align: center;"><img src="img/personal/scau.jpg" style="width: 100%;" /></div>',
		  showMore: '<a class="custom-show-btn-right"><i class="fa fa-plus-circle"></i></a>',
		  showLess: '<a class="custom-show-btn-right"><i class="fa fa-minus-circle"></i></a>',
		  forcePosition: 'right'
		},
		{
		  type: 'smallItem',
		  label: '&nbsp;&nbsp;<span style="color:#406da4">2015-2018&nbsp;&nbsp;研究生&nbsp;&nbsp;生物信息学</span>',
		  shortContent: '<span style="text-align:right">厦门大学<span>',
		  fullContent: '<div style="text-align: center;"><img src="img/personal/xmu.jpeg" style="width: 100%;" /></div>',
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
});