<template>
	<view id="box">
		<div class="act_detail" :style="{height:act_detail+'px'}">
			
			<div class="act_name" style="border-bottom: 1px solid #ffffff22;">活动名称:{{name}}</div>
			<div class="act_name" style="border-bottom: 1px solid #ffffff22;">
				<text >开始时间:{{startime}}</text>
				<text style="margin-left: 8px;">结束时间:{{endtime}}</text>
			</div>
			<div class="act_name">
				<text>参与人数:{{cy_num}}</text>
				<text style="margin-left: 8px;">中奖人数:{{win_num}}</text>
			</div>
			<div class="act_text" style="margin-top: 10px;">中奖列表</div>
			<div class="act_list" :style="{height:act_detail-60+'px'}" style="margin-top: 20px;">
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
	</view>
</template>

<script>
	import jsonlistarr from '@/static/json/posindex.json'
	export default {
		data(){
			return{
				act_detail:'',
				jsonlist:jsonlistarr,
				name:'',
				startime:'',
				endtime:'',
				cy_num:'',
				win_num:''
			}
		},
		methods:{
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
		},
		onLoad(option) {
			console.log(option.oddmesname,option.startime,option.endtime,option.cy_num,option.win_num)
			this.name = option.oddmesname
			this.startime = option.startime
			this.endtime = option.endtime
			this.cy_num = option.cy_num
			this.win_num = option.win_num
			this.getDivHeight()
		}
	}
</script>

<style scoped>
	@import '../../static/css/posindex.css';
</style>