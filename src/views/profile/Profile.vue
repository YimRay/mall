<template>
<div id="profile">
  <nav-bar class="profile-nav">
    <template v-slot:center>
      我的档案
    </template>
  </nav-bar>
  <div class="login">
    <div class="login-left">
      <img src="../../assets/img/profile/avatar.svg" alt="">
    </div>
    <div class="login-center">
      <h3>登录/注册</h3>
      <div class="denglu">
        <img src="../../assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span>
        </div>
    </div>
    <div class="login-right">
      <img src="../../assets/img/profile/jiantou.svg" alt="">
    </div>
  </div>
  <div class="profile-info">
    <div class="info-item">
        <div class="item1">
          <span>0.00</span>元
        </div>
        <div class="item2">我的余额</div>
      
    </div>
    <div class="info-item">
        <div class="item1">
          <span>0</span>个
        </div>
        <div class="item2">我的优惠</div>
      
    </div>
    <div class="info-item">
        <div class="item1">
          <span>0</span>分
        </div>
        <div class="item2">我的积分</div>
      
    </div>
  </div>
  <div class="middle-info">
    <div class="middle-item">
      <img src="../../assets/img/profile/message.svg" alt="">
      <div>我的消息</div>
    </div>
    <div class="middle-item">
      <img src="../../assets/img/profile/pointer.svg" alt="">
      <div>积分商城</div>
    </div>
    <div class="middle-item">
      <img src="../../assets/img/profile/vip.svg" alt="">
      <div>会员卡</div>
    </div>
  </div>
  <div class="footer-info">
    <div class="middle-item">
      <img src="../../assets/img/profile/cart.svg" alt="">
      <div>我的消息</div>
    </div>
    <div class="middle-item">
      <img src="../../assets/img/profile/shopping.svg" alt="">
      <div>积分商城</div>
    </div>
    
  </div>
</div>
  
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    name:"Profile",
    components:{
      NavBar
    }
}
</script>

<style scoped>
.profile-nav{
  background-color: var(--color-tint);
  color: white;
}
.login{
  background-color: var(--color-tint);
  color: white;
  display: flex;
  height: 100px;
}
.login-left{
  width: 100px;
  /* background-color:aquamarine; */
  position: relative;
}
.login-left img{
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

}
.login-center{
  flex: 1;
  
}
.login-center h3{
  margin-left: 5px;
  margin-top: 20px;
  font-weight: 500;
  font-size: 22px;
}
.login-center .denglu{
  font-size: 14px;
  margin-top: 10px;
  height: 28px;
  line-height: 28px;
}
.denglu img{
  /* display: inline-block; */
  height: 25px;
  width: 25px;
    vertical-align: middle;
}
.login-right{
  width: 35px;
  /* background-color:yellow; */
  /* line-height: 100px;
  vertical-align: middle; */
  display: flex;
  align-items: center;
  color: white;
}
.login-right img{
  width: 20px;
  height: 20px;
  /* margin-top: 50%;
  margin-left: 0;
  transform: translateY(-50%); */
  
}

.profile-info{
  height: 100px;
  border-bottom:15px solid #eee;
  display: flex;
}
.info-item{
  flex: 1;
  height: 100px;
  /* background-color: thistle; */
  border-right: 2px solid #eee;
  /* text-align: center; */
  display: flex;
  align-items: center;
  flex-direction:column;
  justify-content: center;

}
.info-item:nth-child(3){
  border: none;
}
.item1 span{
  font-size: 24px;
  font-weight: 600;
  color: red;
}
.item2{
  font-size: 14px;
}
.middle-item{
  display: flex;
  height: 45px;
  line-height: 45px;
}
.middle-item img{
  width: 25px;
  height: 25px;
  margin-top: 11px;
  margin-left: 16px;
}
.middle-item div{
  border-bottom: 1px #eee solid;
  flex: 1;
  margin-left: 10px;
}
.middle-info{
  border-bottom: 15px #eee solid;

}
.footer-info{

}
</style>