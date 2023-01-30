    const http = require("http");



    // 方式一
    const server = new http.Server((req, res) => {
      res.setHeader("Content-type","text/html;charset=utf8");
      // res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
      // res.setHeader('Access-Control-Allow-Methods', 'get,put,post')  
      // res.setHeader('Access-Control-Allow-Credentials', true)
      // 注意origin不能是*号.。 这样浏览器就不会拦截服务器设置的cookie了
      res.setHeader("Access-Control-Allow-Origin",req.headers.origin);  
      res.setHeader("Access-Control-Allow-Credentials", true);  
      res.setHeader("Access-Control-Request-Method", "PUT,POST,GET,DELETE,OPTIONS");
      if(req.url === "/") {
        // 设置 cookie
        res.setHeader("Set-Cookie", [
          "name=panda; domain=panda.com; path=/write; httpOnly=true"
        ]);
        res.end("返回数据")
      }else if(req.url === "/index" && req.headers.cookie) {
        // 读取 cookie
        res.end("返回index数据")
      }else {
        res.end("错误请求")
      }
    })


    server.listen(8080, () => {
      console.log("服务器创建成功")
    })