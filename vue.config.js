module.exports = {
    //关闭eslint
    lintOnSave: false,

    //配置代理服务器
    devServer: {
        proxy: {
            '/api': {
                // target: 'http://139.198.152.148:8200'
                target: 'http://gmall-h5-api.atguigu.cn'
            }
        }
    }
}