<template>
    <view>
		<view class="d-content">
							<view class="d-box" @click="goBack">
								<image src="../../static/backk.png" class="d-title1"></image>
							</view>
							<view class="d-box1">
							  <image src="../../static/share.png" class="d-title"></image>
			               </view>
			  <video :src="details.trailer" :poster="details.cover"  objectFit="fill" class="d-video" controls></video>
		</view>
	<view class="d-div">
		<view class="d-contairt">
			<view class="content">
			<image :src="details.cover" class="d-img" mode=""></image>
			<view class="d-left2">
				<view class="d-name">{{details.name}}</view>
				<view class="d-info">{{details.basicInfo}}</view>
				<view class="d-info">{{details.originalName}}</view>
				<view class="d-info">{{details.releaseDate}}</view>
				<view class="d-rate">
					<view>
						<view class="rate-t">综合评分:</view>
						<span class="d-score">{{details.score}}</span>
					</view>
					<view>
						<uni-rate size="14" disabled="true" v-if="details.score>=0"  :value="details.score/2"></uni-rate>
						<view class="d-info">{{details.prisedCounts}}人点赞</view>
					</view>
				</view>
			</view>
			</view>
		</view>
		<plotDesc v-bind:details="details" ></plotDesc>
		<scroll-view  class="scroll-view" scroll-x="true">
		  <view class="s-view">
				   <view v-for="item in director" :key="item.id" class="former">
					   <image :src="item.photo" class="photo"></image>
					   <view class="p-name">{{item.name}}</view>
					   <view class="p-text">{{item.actName}}</view>
				   </view>
				   <view v-for="(item,index) in performer" :key="index" class="former">
					   <image :src="item.photo" class="photo"></image>
					   <view class="p-name">{{item.name}}</view>
					   <view class="p-text">饰演:{{item.actName}}</view>
				   </view>
		  </view>
		</scroll-view>  
		<view class="d-phoe">
		 <view  class="p-separate"></view>
		 <view class="f-text">剧照:</view>
		 </view> 
		 <view class="plotpics">
			 <view v-for="(item,index) in photo" :key="index">
				 <image :src="item"  class="p-item"></image>
			 </view>
		 </view>
		
     </view>	 
    </view>
</template>

<script>
import uniRate from '@/components/uni-rate/uni-rate.vue'
import plotDesc from '../../components/details/plotDesc.vue'
export default {
name: "",
components: {
uniRate,
plotDesc
},
props: {},
data () {
  return {
	  id:'',
	  details:{},
	  director:[],
	  performer:[],
	  photo:[]
    }
  },
  methods: {
    getDetails(){
		console.log(this.id);
		uni.request({
			url:`https://www.imovietrailer.com/superhero/search/trailer/${this.id}?qq=2684425594`,
			method:'POST',
			success:(res) => {
				this.details=res.data.data
				this.photo=JSON.parse(this.details.plotPics)
			
				
				
			}
		})
	},
	goBack(){
		uni.navigateBack({
			delta:2
		})
	},
	getRole(){
		uni.request({
			url:`https://www.imovietrailer.com/superhero/search/staff/${this.id}/1?qq=2684425594`,
			method:'POST',
			success: (res) => { 
				this.director=res.data.data
				
			}
		})
		uni.request({
			url:`https://www.imovietrailer.com/superhero/search/staff/${this.id}/2?qq=2684425594`,
			method:'POST',
			success: (res) => { 
				this.performer=res.data.data
				
			}
		})
	}
  },
  mounted () {

  },
  onLoad (option) {
	 this.id=option.id
	   this.getDetails()
	   this.getRole()
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
.d-content{
	width: 100%;
	height: 450rpx;
	position: relative;
}	
.d-video{
	width: 100%;
    height: 100%;
}
.d-title{
	width: 50rpx;
	height: 50rpx;
}
.d-title1{
	width: 40rpx;
	height: 40rpx;
	margin-left: -5rpx;
	
}
.d-box{
	width: 60rpx;
	height: 60rpx;
	border-radius: 80rpx;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 10rpx;
	left: 10rpx;
	z-index: 999;
}
.d-box1{
	width: 60rpx;
	height: 60rpx;
	border-radius: 80rpx;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	z-index: 999;
	top: 10rpx;
	right: 20rpx;
}
.d-img{
	width: 250rpx;
	height: 340rpx;
}
.content{
	display: flex;
	
}
.d-div{
	background-color: #F7F7F7;
}
.d-contairt{
	display: flex;
	width: 92%;
	height: 450rpx;
    margin: 0 auto;
	align-items: center;
}
.d-left2{
	margin-left: 45rpx;
}
.d-name{
	font-size: 38rpx;
	font-weight: bold;
}
.d-info{
	font-size: 28rpx;
	margin-top: 10rpx;
	color: #84878C;
}
.d-rate{
	width:370rpx;
	height: 120rpx;
	margin-top: 30rpx;
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: space-around;
	text-align: center;
}
.rate-t{
	font-size: 36rpx;
}
.d-score{
	color: #FEAC3C;
}

.p-text{
		font-size: 30rpx;
		color: #84878C;
	}
.p-name{
	font-size: 32rpx;
	width:220rpx;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}	
.s-view{
	margin-top: 20rpx;
	display: flex;
	width: 208%;
	
}
.p-name{
	font-size: 32rpx;
	width:220rpx;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.scroll-view{
	padding-right: 30rpx;
}	
.desc{
	margin-top: 20rpx;
	font-size: 32rpx;
}
.p-separate{
	width: 100%;
	height: 2rpx;
	background-color:#CFCFCF ;
}
.photo{
	width: 220rpx;
	height: 300rpx;
}
.former{
	margin-left: 30rpx;
}
.f-text{
		font-size: 30rpx;
		color: #84878C;
		margin-top: 20rpx;
	}
.d-phoe{
	width: 95%;
	margin:0 auto
}
.plotpics{
	display: flex;
	flex-wrap: wrap;
	padding-bottom: 100rpx;
}
.p-item{
	margin-left: 20rpx;
	margin-top: 15rpx;
	width: 230rpx;
	height: 250rpx;
}
</style>
