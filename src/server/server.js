//引入需要的包
const path = require('path')
const express = require('express')
//实例化一个express对象，用来创造一个http server
const app = express(),
  DIST_DIR = __dirname,   //__dirname表示当前脚本运行的根目录
  HTML_FILE = path.join(DIST_DIR, 'index.html')
app.use(express.static(DIST_DIR))  //定义静态资源的入口
//任何处api 请求都发送默认入口页面
app.get('*', (req, res) => {
  res.sendFile(HTML_FILE)
})
//定义服务器端口，参数传入的或者是8080
const PORT = process.env.PORT || 8080
//开启服务器端口的监听
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`)
  console.log('Press Ctrl+C to quit.')
})