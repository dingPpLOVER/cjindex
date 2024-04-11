<template>
	<view class="box">
		<view class="viewtop">
			<view class="scrollpage">
				<scroll-view class="sc" scroll-x="true" scroll-left="scrollLeft">
					<view :class="{'scrsintop_':currenttab == index }" class="scrsintop" v-for="(item,index) in tabtextP" @click="scrtab(index)" :key="index">{{item}}</view>
				</scroll-view>
			</view>	
		</view>
		<swiper  :style="{height:heights+'px'}" style="overflow: scroll; background-color: #f5f5f5;" :current="currenttab" @change="swiperchange">
			<!-- <swiper-item v-for="(item,index) in tabtextP" :key="index" class="sinswiper">{{item}}</swiper-item> -->
			<swiper-item>
				<view style="height: 100%;width: 100%; ">
					<view class="switsin"  v-for="(item,index) in fsta" :key="index">
						<view class="titlename">
							<text class="waitname">{{item.name}}<text style="color: #78c0e3; margin-left: 5px;">{{'( '+item.posi+' )'}}</text></text>
							<text class="waittext"> 待审核</text>
						</view>
						<view class="switsincon">
							<image src="../../static/logo.png" class="swimg"></image>
							<view class="swiurl">
								<view>所属行业:<text class="switex">{{'( '+item.trade+' )'}}</text></view>
								<view>商家地址:<text class="switex">{{item.URL}}</text></view>
							</view>
						</view>
						<view class="titlename_">
							<view class="tboot">
								<view>联系电话:<text class="switex">{{item.tel}}</text></view>
							</view>
							<view class="tbootline"></view>
							<view class="tboot">
								<view>注册时间:<text class="switex">{{item.time}}</text></view>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view style="height: 100%;width: 100%; ">
					<view class="switsin"  v-for="(item,index) in tsta" :key="index">
						<view class="titlename">
							<text class="waitname">{{item.name}}<text style="color: #78c0e3; margin-left: 5px;">{{'( '+item.posi+' )'}}</text></text>
							<text class="waittext_"> 审核通过</text>
						</view>
						<view class="switsincon">
							<image src="../../static/logo.png" class="swimg"></image>
							<view class="swiurl">
								<view>所属行业:<text class="switex">{{'( '+item.trade+' )'}}</text></view>
								<view>商家地址:<text class="switex">{{item.URL}}</text></view>
							</view>
						</view>
						<view class="titlename_">
							<view class="tboot">
								<view>联系电话:<text class="switex">{{item.tel}}</text></view>
							</view>
							<view class="tbootline"></view>
							<view class="tboot">
								<view>注册时间:<text class="switex">{{item.time}}</text></view>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>3</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import jsonarr from '@/static/json/merchant.json'
	export default {
		data(){
			return{
				tabtextP:['待审核','已审核','全部'],
				currenttab:0,
				heights:0,
				jsonarr:jsonarr,
				fsta :[],
				tsta:[]
			}
		},
		methods:{
			scrtab(index){
				console.log(index)
				this.currenttab = index
			},
			swiperchange(e){
				console.log(e.detail.current)
				var index = e.detail.current
				this.scrtab(index)
			},
			getDivHeight() {
				// 创建选择器对象
				const query = uni.createSelectorQuery().in(this);
				// 选择div
				query.select('.box').boundingClientRect(data => {
					// data中包含了元素的尺寸信息，如宽、高等
					if (data) {
						console.log('Div的高度:', data.height);
						this.heights = data.height - 120
						console.log(this.heights)
					}
				}).exec(); // 执行选择器查询
			},
			
		},
		mounted() {
			this.getDivHeight()
			const tsta = [] ;
			const fsta = [] ;
			var jsonarr = this.jsonarr ;
			for(var i = 0 ; i < jsonarr.length ; i ++ ){
				
				if(jsonarr[i].status == 'FALSE'){
					fsta.push(jsonarr[i])
				}else{
					tsta.push(jsonarr[i])
				}
			}
			this.fsta = fsta
			this.tsta = tsta
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/css/manager_.css";
</style>