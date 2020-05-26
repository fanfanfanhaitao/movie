<template>
    <view>
          <view class="mseaarch">
			  <mSearch @search="goto($event)"></mSearch>
		  </view>
		  <view class="search" >
		   <view class="s-content">
			  <view v-for="(item,index) in search" :key="index" class="s-item" @click="goDetails(item.id)">
			  	<image :src="item.cover" class="s-cover" mode=""></image>
			  	<view class="s-name">{{item.name}}</view>
			  </view>
		   </view>
		 </view> 
		<!-- <view v-else-if="this.search.length===0" class="else">
			 暂无数据
		 </view> -->
    </view>
	
</template>

<script>
import mSearch from '@/components/mehaotian-search/mehaotian-search.vue';
export default {
name: "",
components: {
  mSearch
},
props: {},
data () {
  return {
	  keywords:'',
	  page:1,
	  size:30,
	  search:[]

    }
	
  },
  methods: {
	goto(e) {
	            this.keywords=e
				this.getSearch()
	          },
	goDetails(e){
	
		uni.navigateTo({
			url:`../details/details?id=${e}`
		})
	},      
    getSearch(){
		uni.request({
			url:`https://www.imovietrailer.com/superhero/search/list?keywords=${this.keywords}&qq=2684425594&page=${this.page}&pageSize=${this.size}`,
			method:'POST',
			success: (res) => {
			    this.search=res.data.data.rows
				console.log(res);
				
			}
		})
	},
	
  },
  mounted () {
    this.getSearch()
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
.search{
		width: 96%;
		margin: 0 auto;
	}
.mseaarch{
	width: 100%;
	height: 80rpx;
	}
.else{
	margin-top: 30rpx;
	margin-left: 30rpx;
	font-size: 36rpx;
}	
.s-content{
	display: flex;
	flex-wrap: wrap;
   justify-content: space-between;
}
.s-item{
	margin-top: 50rpx;
}
.s-cover{
	width: 210rpx;
	height: 330rpx;
}
.s-name{
	width: 210rpx;
	font-size: 33rpx;
}
</style>
