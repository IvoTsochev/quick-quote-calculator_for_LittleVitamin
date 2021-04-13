const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy("/api/v2/list/WEZrgV/members", {
            target: "https://a.klaviyo.com",
            changeOrigin: true
        })
    )
}