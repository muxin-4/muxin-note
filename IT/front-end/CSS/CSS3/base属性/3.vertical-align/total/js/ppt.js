/*
 * common JS of 'Deep of Overflow'
 * by zhangxinxu(.com)
 * IE10+
*/
var $ = function(selector) {
	return [].slice.call(document.querySelectorAll(selector));
};

$(".highlight").forEach(function(highlight) {
	highlight.addEventListener("click", function() {
		var highlightActive = document.querySelector(".highlight.active");
		if (/active/.test(this.className) == false) {
			if (highlightActive) highlightActive.classList.remove("active");
			this.className += ' active';	
		}
	});	
});

document.addEventListener("mouseup", function(event) {
	var highlightActive = document.querySelector(".highlight.active"), target = event.target;
	if (/highlight/.test(target.className) || /highlight/.test(target.parentElement.className)) {
		return;
	}
	if (highlightActive) highlightActive.classList.remove("active");
});