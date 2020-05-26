<template>
    <view>
        <swiper class='u-wrp-bnr' indicator-dots='true' autoplay='true' interval='5000' duration='1000' circular='true'>
          <block v-for="(item,index) in banners" :key="index" >
            <swiper-item>
              <image :src="item.image"  class="banners"
                   ></image>
            </swiper-item>
          </block>
        </swiper>
		<view class="m-left2">
		  <view class="hot-list">
			<image src="../../static/hot.png" class="hot"></image>
			<view class="hot-text">热门超英</view>
		  </view>
		  <scroll-view  class="scroll-view" scroll-x="true">
			  <view class="content">
				  <view  v-for="(item,index) in superhero" :key="index" @click="goDetails(item.id)">
					    <image :src="item.cover"  class="superhero"></image>
						<view class="s-name">{{item.name}}</view>
						<view class="rate">
							<uni-rate size="14" disabled="true"  :value="item.score/2"></uni-rate>
						    <view class="score">{{item.score}}</view>
						</view>
				  </view>
			  </view>
		  </scroll-view>
		  <notice></notice>
		</view>
    </view>

</template>

<script>
import uniRate from '@/components/uni-rate/uni-rate.vue'	
import notice from "../../components/home/notice.vue"
export default {
name: "",
components: {
uniRate,
notice
},
props: {},
data () {
  return {
	  banners:[],
	  superhero:[],
	  trailer:[]
    }
  },
  methods: {
    getBanner(){
		uni.request({
			url:'https://www.imovietrailer.com/superhero/index/carousel/list?qq=2684425594',
			method:'POST',
			success:(res) => {
				console.log(res);
				this.banners=res.data.data
				
			}
		})
	},
	getHot(){
		uni.request({
			url:'https://www.imovietrailer.com/superhero/index/movie/hot?type=superhero&qq=2684425594',
			method:'POST',
			success: (res) => {
				this.superhero=res.data.data
				console.log(this.superhero);
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
       this.getBanner()
	   this.getHot()
	 
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
.u-wrp-bnr{
	width: 100%;
	height: 480rpx;
	margin-top: 15rpx;
	
}

.banners{
	width: 98%;
	height: 100%;
	margin-left: 1%;
}
.hot{
	width: 50rpx;
	height: 45rpx;
	
}
.hot-list{
	display: flex;
	height: 80rpx;
	align-items: center;
}
.hot-text{
	margin-left: 20rpx;
	font-size: 30rpx;
	font-weight: bold;
}
.scroll-view{
	
}
.superhero{
	width: 180rpx;
	height: 190rpx;
}
.content{
	display: flex;
	justify-content: space-between;
	width: 220%;
	padding-right: 20rpx;
}
.s-name{
	font-size: 30rpx;
	width: 180rpx;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.rate{
	width: 180rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.score{
	font-size: 28rpx;
}
</style>
