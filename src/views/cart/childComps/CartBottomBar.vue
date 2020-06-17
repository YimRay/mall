<template>
  <div class="bottom-bar">
      <div class="check-content">
         <check-button class="check-botton" :is-check="isSelectAll" @click.native="checkClick"></check-button> 
         <span>全选</span>
      </div>

      <div class="price">
          合计:￥{{totalPrice}}
      </div>
      
      <div class="calculate" @click="calcClick">
          结算:{{checkedLength}}
      </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
    components:{
        CheckButton
    },
    computed:{
        totalPrice(){
            return this.$store.state.cartList.filter(item=>{
                return item.checked
            }).reduce((preValue,item)=>{
                return preValue + item.price * item.count
            },0)
        },
        checkedLength(){
            return this.$store.state.cartList.filter(item=>item.checked).length
        },
        isSelectAll(){
            return this.$store.state.cartList.every((item)=>{
                return item.checked
            })
        }
    },
    methods:{
        //这里测试一下VUex的mutations
        // checkClick(){
        //     if(this.isSelectAll){
        //         this.$store.state.cartList.forEach(item => item.checked = false)
        //     }else{
        //         this.$store.state.cartList.forEach(item => item.checked = true)
        //     }
        // }
        checkClick(){
            if(this.isSelectAll){
                // this.$store.state.cartList.forEach(item => item.checked = false)
                this.$store.commit('checkClick')
            }else{
                // this.$store.state.cartList.forEach(item => item.checked = true)
                this.$store.commit('checkClick2')
            }
        },
        calcClick(){
            if(!this.isSelectAll){
                this.$toast.show('请选择购买商品',2000)
            }
        }
    }
}
</script>

<style scoped>
.bottom-bar{
    background-color: #eee;
    height: 40px;
    display: flex;
    font-size: 14px;
}
.check-content{
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 10px;
    width: 60px;
}
.check-botton{
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
.price{
    line-height: 40px;
    margin-left: 30px;
    flex: 1;
}
.calculate{
    width: 90px;
    background: red;
    text-align: center;
    line-height: 40px;
    color: #fff;
}
</style>