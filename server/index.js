const Koa = require('koa');
const port = process.env.PORT || 4455;
~(async () =>{
    const app = new Koa();
    app.listen(port)
})()