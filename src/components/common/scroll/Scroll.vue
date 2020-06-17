<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    
    data(){
        return{
            scroll:null
        }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    mounted(){
        //1.创建BScroll对象
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,taps:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad

        })

        //2.监听滚动的位置
        if (this.probeType == 2 || this.probeType == 3){
        this.scroll.on('scroll',(postion)=>{
            // console.log(postion);
            this.$emit('scroll',postion)
        })
        }
        //3.监听上拉事件
        if (this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
        })
        }
    },
    methods:{
        scrollTo(x,y,z=500){
            this.scroll&&this.scroll.scrollTo(x,y,z)
        },
        finishPullUp(){
            this.scroll&&this.scroll.finishPullUp()
        },
        refresh(){
            this.scroll&&this.scroll.refresh()
        }
    }
}
</script>

<style scoped>

</style>