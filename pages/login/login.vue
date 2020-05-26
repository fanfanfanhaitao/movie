<template>
    <view>
       <view class="d-box" @click="goBack">
       	<image src="../../static/backk.png" class="d-title1"></image>
       </view>
	   <view class="login-img">  
	    <image src="../../static/head.png" mode="" class="head"></image> 
	   </view>
	   <view class="l-input">
		   <view class="l-text"> 
			 <span class="word">账号</span><input class="input" type="text" placeholder="请输入用户名" @input="inputText($event)" />  
		   </view>
		   <view class="l-text">
		   	 <span class="word">密码</span><input class="input" password="" type="text" placeholder="请输入密码" @input="inputPassword($event)" />  
		   </view>
	   </view>
	    <view class="button">
			<button type="primary"  @click="login()">登录/注册</button>
		</view>
		
	 
    </view>
</template>

<script>
export default {
name: "",
components: {

},
props: {},
data () {
  return {
	  username:'',
	  password:'',
	  
    }
  },
  methods: {
     goBack(){
     	uni.navigateBack({
     		delta:2
     	})
     },
	 inputText(e){
		 this.username=e.detail.value
		
	 },
	 inputPassword(e){
		  this.password=e.detail.value
	 },
	 login(){
		 uni.request({
		 	url:`https://www.imovietrailer.com/superhero/user/registOrLogin?&qq=2684425594`,
				data: {
						username: this.username,
						password: this.password
					},
		 	method:'POST',
		 	success: (res) => {
				console.log(res);
				if(res.data.status===200){
					 this.$store.state.message=res.data.data
					 alert("登陆成功")
					 uni.navigateTo({
					 		url:'../message/message'
					 	})
					 }
					 else{
						 alert(res.data.msg)
				}
		 	  }
		 })
		 
	 }
	 
  },
  mounted () {

  },
  onLoad () {
  
  },
  filters: {

  },
  computed: {
 
  },
  watch: {

  },
  directives: {

  }
}
</script>

<style scoped lang="scss">
.d-title1{
	width: 40rpx;
	height: 40rpx;
	margin-left: -5rpx;
	
}
.d-box{
	width: 60rpx;
	height: 60rpx;
	border-radius: 80rpx;
	background-color:#AAAAAA;
	display: flex;
	justify-content: center;
	align-items: center;
    margin-top: 20rpx;
	margin-left: 20rpx;
}
.head{
	width: 200rpx;
	height: 200rpx;
}
.login-img{
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 30rpx;
	}
.l-input{
	width: 90%;
	margin: 0 auto;
}	
.l-text{
	display: flex;
	align-items: center;
	border-bottom: 1rpx solid #AAAAAA;
	height: 150rpx;
}
.word{
	font-size: 36rpx;
	margin-top: 40rpx;
	color: #88888F;
}
.input{
	font-size: 34rpx;
	margin-top: 40rpx;
	margin-left: 30rpx;
	}
.button{
	width: 70%;
	margin: 0 auto;
	margin-top: 100rpx;
	
}	
</style>
