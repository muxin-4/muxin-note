// http://nodejs.cn/api/fs.html#fs_fs_watch_filename_options_listener
const fs = require('fs');

fs.watch('./', {
  recursive: true
}, (eventType, filename) => {
  console.log(eventType, filename);
})


