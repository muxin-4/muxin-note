// http://nodejs.cn/api/fs.html#fs_fs_writefile_file_data_options_callback
const fs = require('fs');

const content = Buffer.from('this is a buffer.');

fs.writeFile('./text', 'This is a test', {
  encoding: 'utf8'
}, err => {
  if (err) throw err;
  console.log('done!');
})

fs.writeFile('./text2', content, {
  encoding: 'utf8'
}, err => {
  if (err) throw err;
  console.log('done!');
})
