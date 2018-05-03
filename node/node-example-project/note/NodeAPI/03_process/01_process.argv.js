// http://nodejs.cn/api/process.html

const {
  argv,
  argv0,
  execArgv,
  execPath
} = process;

argv.forEach(item => {
  console.log(item);
});

