<template>
    <view>
     <view class="c-notice">
		 <image src="../../static/notice.png" class="notice" mode=""></image>
		 <view class="hot-text">热门预告</view>
	 </view>
	 <view class="box">
		 <view v-for="(item,index) in trailer" :key="index" class="box1">
				<video :src="item.trailer" :poster="item.cover" class="n-box" controls></video>
		 </view>
	 </view>
	 <view v-for="(item,index) in like" :key="index" class="like" @click="goDetails(item.id)">
		 <image :src="item.cover" mode="" class="n-like"></image>
		 <view class="n-like1">
			 <view class="name">{{item.name}}</view>
			 <view  class="rate"><uni-rate size="14" disabled="true"  :value="item.score/2"></uni-rate></view>
			 <view class="n-text">{{item.basicInfo}}</view>
			 <view class="n-text">{{item.releaseDate}}</view>
		 </view>
		 <view class="n-like2">
			 <view class="n-like3">
			 <image src="../../static/good.png" class="good" mode=""></image>
			 <view class="n-good">赞一下</view>
			 </view>
		 </view>
	 </view>
    </view>
</template>

<script>
import uniRate from '@/components/uni-rate/uni-rate.vue'
export default {
name: "",
components: {
uniRate
},
props: {},
data () {
  return {
	 trailer:[],
	 like:[]
    }
  },
  methods: {
	  getTrailer(){
	  		uni.request({
	  			url:'https://www.imovietrailer.com/superhero/index/movie/hot?type=trailer&qq=2684425594',
	  			method:'POST',
	  			success: (res) => {
	  				this.trailer=res.data.data
	  			
	  			}
	  		})
	  	},
	getLike(){
		uni.request({
			url:'https://www.imovietrailer.com/superhero/index/guessULike?qq=2684425594',
			method:'POST',
			success: (res) => {
				this.like=res.data.data
				console.log(this.like);
			}
		})
	},
	goDetails(e){
		uni.navigateTo({
			url:`../details/details?id=${e}`
		})
	}     
  },
  mounted () {
   this.getTrailer()
  this.getLike()
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
.notice{
	width: 50rpx;
	height: 45rpx;
}
.c-notice{
	display: flex;
	height: 80rpx;
	
	align-items: center;
}
.hot-text{
	margin-left: 20rpx;
	font-size: 30rpx;
	font-weight: bold;
}


.box{
	width: 100%;
	height: 630rpx;
	margin-left: -10rpx;
	flex-wrap: wrap;
	display: flex;
	justify-content: space-around;
	
	
}
.box1{
	width: 350rpx;
	height: 300rpx;
}
.n-box{
	width: 100%;
	height: 100%;
}
.play{
	width: 50rpx;
	height: 50rpx;
	position: absolute;
	top: 130rpx;
	left: 170rpx;
}
.name{
	font-size: 36rpx;
	width: 310rpx;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.like{
	margin-top: 50rpx;
	display: flex;
}
.n-like{
	width: 220rpx;
	height: 280rpx;
}
.rate{
	margin-top: 15rpx;
}
.n-text{
	font-size: 30rpx;
	margin-top: 10rpx;
	color: #84878C;
}
.n-like1{
	margin-left: 20rpx;
	width: 310rpx;
}
	
.n-like2{
	border-left: 5rpx dashed #84878C;
    display: flex;
	align-items: center;
	margin-left: 20rpx;
	text-align: center;
}
.n-like3{
	margin-left: 30rpx;
}
.good{
	width: 50rpx;
	height: 50rpx;
}
.n-good{

	color: #FEB631;
	font-size: 30rpx;
}
</style>
