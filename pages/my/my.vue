<template>
    <view>
       <view class="my">
		   <image src="../../static/beij.jpg" mode="" class="bg-img"></image>
		 <view class="m-head">  
		   <view class="m-portrait">
			   <image :src="this.$store.state.message.faceImage ? this.$store.state.message.faceImage : '../../static/morentouxiang.png'" mode="" class="more"></image>
		   </view>
		   <view class="text-login" @click="goLogin">
			  {{this.$store.state.message.nickname ? this.$store.state.message.nickname : '注册/登录'}}
		   </view>
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
    }
  },
  methods: {
    goLogin(){
		uni.navigateTo({
			url:"../login/login"
		})
	}
  },
  mounted () {
console.log(this.$store.state.message);
  },
  onLoad () {
  console.log(this.$store.state.message);
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
.my{
	width: 100%;
	height: 400rpx;
	position: relative;
}
.bg-img{
	width: 100%;
}
.m-portrait{
	width: 150rpx;
	height: 150rpx;
	border-radius: 150rpx;
	background-color: #FFFFFF;
	display: flex;
	justify-content: center;
	align-items: center;
}
.more{
	width: 120rpx;
	height: 120rpx;
}
.m-head{
	display: flex;
	align-items: center;
	position: absolute;
	top: 180rpx;
	left: 30rpx;
	
}
.text-login{
	margin-left: 30rpx;
	font-size: 38rpx;
	font-weight: bolder;
}
</style>
