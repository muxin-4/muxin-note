/**
 *  请求的文件不存在时发送404错误
 *
 * @param {any} response
 */
function send404(response) {
  response.writeHead(404, { 'Content-Type': 'text/plain' });
  response.write('Error 404: resource not found.');
  response.end();
}
/**
 * 提供文件数据服务
 * 先写出正确的HTTP头，然后发送文件的内容
 *
 * @param {any} response
 * @param {any} filePath
 * @param {any} fileContents
 */
function sendFile(response, filePath, fileContents) {
  response.writeHead(
    200,
    { "content-type": mime.lookup(path.basename(filePath)) }
  );
  response.end(fileContents);
}


function serveStatic(response, cache, absPath) {
  if (cache[absPath]) { // 检查文件是否缓存在内存中
    sendFile(response, absPath, cache[absPath]); // 从内存中返回文件
  } else {
    fs.exists(absPath, function (exists) { // 检查文件是否存在
      if (exists) {
        fs.readFile(absPath, function (err, data) { // 从硬盘中读取文件
          if (err) {
            send404(response);
          } else {
            cache[absPath] = data;
            sendFile(response, absPath, data); // 从硬盘中读取文件并返回
          }
        });
      } else {
        send404(response); // 发送HTTP 404响应
      }
    });
  }
}

let server = http.createServer(function (request, response) { // 创建HTTP服务器，用匿名函数定义对每个请求的处理行为
  let filePath = false;
  if (request.url === '/') {
    filePath = 'public/index.html'; // 确定返回的默认HTML文件
  } else {
    filePath = 'public' + request.url; // 将URL路径转为文件的相对路径
  }

  var absPath = './' + filePath;
  serveStatic(response, cache, absPath); // 返回静态文件
});


