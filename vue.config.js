module.exports = {
    configureWebpack:{
        resolve:{
            extensions:[],
            alias:{
                'assets':'@/assets',
                'common':'@/assets',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views'
            }
        }
    }
}