<template>
    <view class="plot">
       <view class="separate"></view>
	   <view class="f-text">剧情介绍:</view>
	   <view class="desc">{{details.plotDesc}}</view>
	   <view class="p-separate"></view>
	   <view class="f-text">演职人员:</view>
	  
    </view>
</template>

<script>
export default {
name: "",
components: {

},
props: {
	
	details:{
		type: Object,
		value:{}
	}
	
},
data () {
  return {
	
    }
  },
  methods: {
   
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
.plot{
		width: 92%;
		margin: 0 auto;
	}
.separate{
	width: 100%;
	height: 5rpx;
	background-color: #D9D9D9;
}
.f-text{
		font-size: 30rpx;
		color: #84878C;
		margin-top: 20rpx;
	}
.p-text{
		font-size: 30rpx;
		color: #84878C;
	}
.desc{
	margin-top: 20rpx;
	font-size: 32rpx;
}
.p-separate{
	width: 100%;
	height: 2rpx;
	margin-top: 40rpx;
	background-color:#CFCFCF ;
}
</style>
