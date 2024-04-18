<template>
	<div id="box">
		<div class="register_mes" @click="mesclick">
			<image src="https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/icon/register_mes.png" class="icon_"></image>
			<view class="mescricle"  v-if="num>0">{{num}}</view>
		</div>
		<div class="introduce">
			<text class="inttext">尊敬的商户</text><text class="intvalue">{{nickvalue}} 你好！</text>
		</div>
		<div class="start_act" @click="toset"></div>
		<div class="act_detail" :style="{height:act_detail+'px'}">
			<div class="act_text">活动详情</div>
			<div class="act_name">勇敢冲冲冲！活动进行中....</div>
			<div class="act_list" :style="{height:act_detail-60+'px'}" >
				<div v-if="jsonlist.length>0">
					<div class="titpage">
						<div class="titsin">序号</div>
						<div class="titsin">用户名称</div>
						<div class="titsin1">奖品</div>
					</div>
					<div class="act_listta" :style="{height:act_detail-100+'px'}">
						<div class="titpage_" v-for="(item,index) in jsonlist" :key="index">
							<div class="titsin_">{{item.number}}</div>
							<div class="titsin_">{{item.name}}</div>
							<div class="titsin1_">{{item.awards}}</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>
		<div class="pos" @click="previous">往期回顾</div>
	</div>
</template>

<script>
	import jsonlistarr from '@/static/json/posindex.json'
	export default {
		data() {
			return {
				nickvalue: '',
				act_detail: '',
				jsonlist:jsonlistarr,
				num:1
			}
		},
		methods: {
			getDivHeight() {
				// 创建选择器对象
				const query = uni.createSelectorQuery().in(this);
				// 选择div
				query.select('#box').boundingClientRect(data => {
					// data中包含了元素的尺寸信息，如宽、高等
					if (data) {
						console.log('Div的高度:', data.height);
						this.act_detail = data.height - 150
					}
				}).exec(); // 执行选择器查询
			},
			toset(){
				// console.log(111)
				var nickvalue = this.nickvalue
				uni.navigateTo({
					url:'/pages/set/set?nickvalue='+nickvalue
				})
			},
			previous(){
				uni.navigateTo({
					url:'/pages/posindex_previous/posindex_previous'
				})
			},
			mesclick(){
				var nickvalue = this.nickvalue
				this.num = 0
				uni.navigateTo({
					url:'/pages/pos_mes/pos_mes?nickvalue='+nickvalue
				})
			},
		},
		mounted() {
			this.getDivHeight()
			console.log(this.jsonlist)
		},
		onLoad(option) {
			this.nickvalue = option.nickvalue
		}
	}
</script>

<style scoped>
	@import '../../static/css/posindex.css';
</style>