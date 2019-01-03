/*
 * script for 'Deep of vertical-align'
 * by zhangxinxu(.com) 2015-07-19
 * IE10+
*/

$(".liActive li").forEach(function(li) {
	li.addEventListener("click",function() {
		this.classList.add("active");	
	});
});



