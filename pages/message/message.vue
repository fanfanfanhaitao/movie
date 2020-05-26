<template>
    <view class="message">
        <view class="m-content">
			<view class="m-content-1">
				<view class="message-1">
					<view class="h-text">头像</view>
					<view class="m-face">
						<image :src="message.faceImage" class="face" mode=""></image>
						<image src="../../static/go.png" mode="" class="go"></image>
					</view>
				</view>
				<view class="message-1">
					<view class="h-text">昵称</view>
					<view class="m-face">
						<view class="nickname">{{message.nickname}}</view>
						<image src="../../static/go.png" mode="" class="go"></image>
					</view>
				</view>
				<view class="message-1">
					<view class="h-text">生日</view>
					<view class="m-face">
						<view class="nickname">{{message.birthday}}</view>
						<image src="../../static/go.png" mode="" class="go"></image>
					</view>
				</view>
				<view class="message-1">
					<view class="h-text">性别</view>
					<view class="m-face">
						<view class="nickname">{{message.sex ? message.sex : '保密'}}</view>
						<image src="../../static/go.png" mode="" class="go"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="m-button">
			<view class="m-button">
				<button ><span class="sp-1">清理缓存</span></button>
				</view>
			<view class="m-button" @click="out()">
				<button ><span class="sp-1">退出登录</span></button>
				</view>	
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
	  message:{}
    }
  },
  methods: {
     out(){
		 console.log(this.message.id);
		 uni.request({
		 	url:`https://www.imovietrailer.com/superhero/user/logout?userId=${this.message.id}&qq=2684425594`,
		 	method:'POST',
		 	success: (res) => {
					console.log(res);
		 	    if(res.data.status===200){
					this.$store.state.message={}
					uni.navigateBack({
						delta:2
					})
				}
		 	
		 		
		 	}
		 })
	 }
  },
  mounted () {
    this.message=this.$store.state.message
	
	console.log(this.message);
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
.message{
	width: 100%;
	height: 1200rpx;
	background-color: #F3F3F3;
	display: flex;
	flex-wrap: wrap;
	align-content: space-between;
	
}
.m-content{
	width: 100%;
	height: 600rpx;
	margin-top: 20rpx;
	background-color:#FFFFFF;
}
.m-content-1{
	width: 95%;
	margin: 0 auto;
}
.h-text{
	font-size: 32rpx;
}
.face{
	width: 80rpx;
	height: 80rpx;
	border-radius: 80rpx;
}
.go{
	width: 30rpx;
	height: 30rpx;
	margin-left: 20rpx;
}
.message-1{
	display: flex;
	height: 110rpx;
	justify-content: space-between;
	align-items: center;
}
.m-face{
	display: flex;
	align-items: center;
}
.nickname{
	font-size: 30rpx;
	color: #C6C6C6;
}
.m-button{
	width: 100%;
	background-color: #FFFFFF;	
}
.sp-1{
	font-size: 34rpx;
	}
</style>
