<template>
    <div class="detail-swiper">
        <swiper class="swiper1">
            <swiper-item v-for="(item,index) in topImages" :key="index">
                <img :src="item" alt="">
                <!-- {{item}} -->
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        topImages:{
            type:Array,
            default(){
                return[]
            }
        }
    },
    created(){
        
        
    }
}
</script>

<style scoped>
.swiper1{
    height: 300px;
    overflow: hidden;
}
</style>