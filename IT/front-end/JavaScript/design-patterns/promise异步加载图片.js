// 异步加载图片
function loadImg(src) {
	var promise = new Promise(function(resolve, reject) {
		var img = document.createElement('img');
		img.onload = function () {
			resolve(img);
		}
		img.onerror = function () {
			reject('图片加载失败');
		}
		img.src= src;
	})
	return promise;
}

var src = 'https://ws3.sinaimg.cn/large/006tNc79gy1ftkt7nrezpj30oa0g00vu.jpg';
var result = loadImg(src);

result.then(function(img) {
	console.log('img.width', img.width);
	return img;
}).then(function(img) {
	console.log('img.height', img.height);
	return img;
}).catch(function(err){
	// 捕获异常
	console.log(err);
})