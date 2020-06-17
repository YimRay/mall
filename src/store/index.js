import Vue from 'vue'
import Vuex from 'vuex'


//1.安装插件
Vue.use(Vuex)

//2.创建Store对象
const store = new Vuex.Store({
    state:{
        cartList:[]
    },
    mutations:{
        addCounter(state,payload){
            payload.count++
        },
        addToCart(state,payload){
            payload.checked = true
            state.cartList.push(payload)
        },
        //之前调用checked的状态没有通过mutaions
        checkClick(state){
            state.cartList.forEach(item => item.checked = false)
        },
        checkClick2(state){
            state.cartList.forEach(item => item.checked = true)
        }
    },
    actions:{
        addCart(context,payload){
           return new Promise((resolve,reject)=>{
               //查找之前数组中是否有该商品
            let oldProduct = context.state.cartList.find((item)=>{
                return item.iid === payload.iid
            })
            //判断oldProduct是否有值
            if(oldProduct){
                // oldProduct.count += 1
                context.commit('addCounter',oldProduct)
                
                resolve('当前的商品+1')
            }else{
                payload.count = 1
                // context.state.cartList.push(payload)
                context.commit('addToCart',payload)
                resolve('添加了新的商品')
            }

           })

            

            
            
        }
    }
})

export default store