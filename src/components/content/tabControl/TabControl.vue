<template>
  <div class="tab-control">
      <div v-for="(item,index) in title" 
      :key="index" class="tab-control-item"
      :class="{active:index === currentIndex}" @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:"TabControl",
    props:{
        title:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index;
            //告诉父组件我给点击了
            this.$emit('tabClick',index)
        }
    }
    
}
</script>

<style>
.tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: white;
}
.tab-control-item{
    flex:1;
    
}
.active{
    color:var(--color-high-text);
}
.active span{
    border-bottom:3px solid var(--color-tint);
    padding: 0 3px;
}
</style>