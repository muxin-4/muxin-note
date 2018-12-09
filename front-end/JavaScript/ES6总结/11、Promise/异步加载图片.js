function loadImageAsync(url) {
  return new Promise(function (resolve, reject) {
    const image = new Image();

    image.onload = function () {
      resolve(image);
    };

    image.onerror = function () {
      reject(new Error('Could not load image at ' + url));
    };

    image.src = url;
  });
}

const url = 'https://github.com/yaoyaoniu/note/blob/master/ES5%E6%80%BB%E7%BB%93/1%E3%80%81%20Ajax/img/Ajax-method.png?raw=true';

loadImageAsync(url).then((value) => {
  console.log(value);
});
