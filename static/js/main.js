// 背景自动滚动
// $('.bg').autoBackgroundScroll({
//   speed: 0.3,
//   direction1: 'bottom',
//   direction2: 'right',
//   imageWidth: 2000,
//   imageHeight: 2000
// });

// 背景渐变颜色控制
    $('body').gradientify({
    gradients: [
        { start: [234,239,161], stop: [69,201,141]},
        { start: [122,248,247], stop: [197,223,116] },
        { start: [255,255,255], stop: [153,204,102]}
    ]
});

//瀑布流布局控制
$('.grid').masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.grid-item',
  // use element for option
  columnWidth: '.grid-sizer',
  percentPosition: true
});


// 改变主体块的上边距
function changeIntrotop(){
  navheight = $("nav").height();
  introtop = navheight + 25 +'px';
  var intro = document.getElementById('intro');
  intro.style.paddingTop = introtop; 
}

// 扁平化配色
function changedivcolor(){
  // var colorPanel = ["#1abc9c","#2ecc71","#3498db","#9b59b6","#34495e","#16a085","#27ae60","#2980b9","#8e44ad","#2c3e50","#f1c40f","#e67e22","#e74c3c","#f39c12","#d35400","#c0392b","#7f8c8d"];
  var colorPanel = ["#2C82C9","#2CC990","#EEE657","#FCB941","#FC6042","#3E4651","#00B5B5","#43353D","#D98B3A","#E01931","#A5F2F1","#ABA5F2","#E26E67","#744B29","#BADA55","#FDB86B","#92F22A","#7BB0A6","#9E8E5A"];
  var allGrid = document.querySelectorAll('.grid-item');
  for (var i = allGrid.length - 1; i >= 0; i--) {
    let index = parseInt(colorPanel.length*Math.random());
    allGrid[i].style.backgroundColor = colorPanel[index];
    allGrid[i].style.opacity = 0.8;
  }
}

window.onload = function(){
  changeIntrotop();
  changedivcolor();
};
// 随窗口改变改变主体块的上边距
$(window).resize(function() {
  changeIntrotop();
});

