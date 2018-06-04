// 事件侦听与响应
document.getElementById('start').addEventListener('click', start, fasle);

// jQuery 用 `.on()`也是事件侦听
function start() {
  // 响应事件，进行相应的操作
}
$('#start').on('click', start);


// 回调函数方法
$.ajax('http://baidu.com', {
  success: function (res) {
    // 这里是回调函数
  }
})

// 页面加载完毕后回调
$(function () {
  // 这里是回调函数
});
