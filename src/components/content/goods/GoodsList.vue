<template>
  <div class="goods">
      <goods-list-item :goods-item="item" v-for="(item,index) in goods" :key="index"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
    components:{
        GoodsListItem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.goods{
    display: flex;
    flex-wrap:wrap ;
    justify-content: space-around;
}
</style>