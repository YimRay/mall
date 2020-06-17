<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar" >
      <div slot="center" >购物街({{cartLength}})</div>
    </nav-bar>
    <!-- 商品的列表 -->
    <cart-list></cart-list>
    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
    
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'
export default {
    name:"Cart",
    components:{
      NavBar,
      CartList,
      CartBottomBar
    },
    computed:{
      cartLength(){
      return this.$store.state.cartList.length

      }
    },
    methods:{
      
    }
}
</script>

<style scoped>
 .nav-bar{
   background-color: var(--color-tint);
   color: #fff;
   font-weight: 700px;
   /* width: 100%; */
 }
 .cart {
    height: 100vh;
  }
 
</style>