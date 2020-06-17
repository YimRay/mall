<template>
  <div id="detail" class="detail-nav">
      <detail-nav-bar @titleClick="titleClick"></detail-nav-bar>
      <scroll class="content" ref="scroll"  :probe-type="3">
        <detail-swiper :top-images= "topImages"></detail-swiper>
        <detail-base-info :goods= "goods"></detail-base-info>
        <detail-shop-info :shop= "shop"></detail-shop-info>
        <!-- <detail-goods-info @image-load="imageLoad" :detail-info="detailInfo"></detail-goods-info> -->
        <!-- <detail-goods-info :detail-info = 'detailInfo' @image-load= "imageLoad" class="goods-info" ref="goodsInfo"></detail-goods-info> -->
        <detail-params-info ref="params" :param-info="itemParams"></detail-params-info>
        <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
        <goods-list ref="recommend" :goods="recommends"></goods-list>
      </scroll>
      <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
      
      <!-- <toast :message="message" :show="show"></toast> -->
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
// import Toast from 'components/common/toast/Toast'

import {getDetail,GoodsInfo,Shop,getRecommend} from 'network/detail'
import {debounce} from '../../common/utils'


export default {
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
        DetailParamsInfo,
        DetailCommentInfo,
        GoodsList,
        DetailBottomBar,
        // Toast
    },
    data(){
        return{
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            itemParams:{},
            commentInfo:{},
            recommends:[],
            themeTopYs:[],
            getThemeTopY:null,
            // message:'',
            // show:false
    
        }
    },
    created(){
        //1.保存iid
        this.iid = this.$route.params.iid
       
       //2.根据iid请求详情数据
       getDetail(this.iid).then(res=>{
           //1.获取顶部的图片轮播数据
           const data = res.result
           this.topImages = res.result.itemInfo.topImages
           console.log(res)

           //2.获取商品信息
           this.goods = new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)

           //3.创建店铺信息
           this.shop = new Shop(data.shopInfo)

           //4.获取商品详细信息
           this.detailInfo = data.detailInfo

           //5.取出参数信息
           this.itemParams = data.itemParams

           //6.取出评论的信息
           if(data.rate.cRate !== 0){
               this.commentInfo = data.rate.list[0]
           }

           //
       })

       //3.请求推荐数据
       getRecommend().then(res =>{
           this.recommends = res.data.list
       })

       //4给getThemeTopY赋值
        this.getThemeTopY = debounce(()=>{
            this.themeTopYs=[]
            this.themeTopYs.push(0);
            this.themeTopYs.push(this.$refs.params.$el.offsetTop)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
            console.log(this.themeTopYs)
            
        },100)
       
    },
    mounted(){
        
    },
    updated(){
        this.getThemeTopY()
        
    },
    methods:{
       imageLoad(){
            this.$refs.scroll.refresh()
            // this.getThemeTopY()
            
       },
       titleClick(index){
           console.log(index)
           this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
       },
       addToCart(){
           //1.获取购物车需要展示商品信息
            const product = {}
            product.image = this.topImages[0]
            product.title = this.goods.title
            product.desc = this.goods.desc
            product.price = this.goods.realPrice
            product.iid = this.iid

            //2.将商品添加到购物车里
            // this.$store.commit('addCart',product)
            this.$store.dispatch('addCart',product).then(res=>{
                // this.show = true
                // this.message = res;

                // setTimeout(()=>{
                //     this.show = false;
                //     this.message = ''
                // },1000)
                // console.log(res);

                this.$toast.show(res,2000)
                
            })
       }
    //    contentScroll(position){
    //     //    console.log(position)
    //     //1.获取y值
    //     const positionY = -position.y

    //     //2.postionY和主题中的值进行对比
    //     // ...不想写了这个同步nav

    //    } 
    }
    
    
}
</script>

<style scoped>
#detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
}
.content{
    height: calc(100% - 44px - 49px);
    overflow: hidden;
}
.detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
}
</style>