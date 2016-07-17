var NwBuilder = require('nw-builder');

var nw = new NwBuilder({
  files: ['./package.json', './index.html', './img/**/**'], // 包含文件
  platforms: ['win64'], // 打包的平台
  version: '0.15.4', // 使用 NW.js 的版本
  cacheDir: 'C:/Users/Rookie_wan/AppData/Roaming/npm/node_modules/.nw-builder_npminstall/nw-builder/2.2.5/nw-builder/cache'
});

nw.on('log', console.log); // 日志打印函数

// 开始构建
nw.build().then(function(){
  console.log('done!');
}).catch(function(err){
  console.log(err);
});