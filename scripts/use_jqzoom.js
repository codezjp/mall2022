/*使用jqzoom*/
$(function(){
	$('.jqzoom').jqzoom({
		zoomType:'standard',//drag/innerzoom/reverse
		lens:true,
		imageOpacity:0.2,
		preloadImages: true,
		alwaysOn:false,
		zoomWidth: 340,
		zoomHeight: 340,
		xOffset:10,
		yOffset:0,
		position:'right'
    });
});