<template>
	<view id="app">
		<view v-if="nickvalue=='ding'" class="boxhis">
			<view class="mes_sintext">历史参与</view>
			<view class="mes_sin" @click="mes_sin(index)" v-for="(item,index) in mesharr" :key="index">
				<image src="../../static/logo.png" class="img"></image>
				<view class="mestext">
					<view class="nametext">{{item.name}}</view>
					<view class="timecl">时间:{{item.startime}}至{{item.endtime}}</view>
				</view>
			</view>
		</view>
		<view v-if="nickvalue=='ping'">
			<view class="mes_sintext">没有记录</view>
		</view>
		<uni-popup ref="popup" type="center">
			<view class="checkview">
				<view class="checkcon">
					<view class="title_che">参与活动基本信息</view>
					<view class="checkconsin">
						<view class="che_l">活动名称:</view>
						<view class="che_r">{{name}}</view>
					</view>
					<view class="checkconsin">
						<view class="che_l">活动开始时间:</view>
						<view class="che_r">{{startime}}</view>
					</view>
					<view class="checkconsin">
						<view class="che_l">活动结束时间:</view>
						<view class="che_r">{{endtime}}</view>
					</view>
					<view class="checkconsin">
						<view class="che_l">发起活动商家:</view>
						<view class="che_r">{{sh_name}}</view>
					</view>
					<view class="checkconsin">
						<view class="che_l">完成情况:</view>
						<view class="che_r">{{completion_status}}</view>
					</view>
					<button class="btn" @click="surec">确认</button>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import actend_alert from '@/static/json/actend_alert.json'
	import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue'
	export default {
		data(){
			return {
				nickvalue:'',
				mesharr:actend_alert,
				name:'',
				startime:'',
				endtime:'',
				sh_name:'',
				completion_status:''
			}
		},
		methods:{
			mes_sin(index){
				console.log(index)
				this.$refs.popup.open('center') //中间弹出
				this.name = this.mesharr[index].name
				this.startime = this.mesharr[index].startime
				this.endtime = this.mesharr[index].endtime
				this.sh_name = this.mesharr[index].sh_name
				this.completion_status = this.mesharr[index].completion_status
			},
			surec(){
				this.$refs.popup.close()
			}
		},
		onLoad(point) {
			var text = ''
			console.log(point.nickvalue)
			this.nickvalue = point.nickvalue
			
			if(point.nickvalue == 'ding'){
				text = '您参与的抽奖活动已结束，您还可以成为商户，发起抽奖'
				var num = point.num-1
				var nickvalue = point.nickvalue
				uni.showModal({
					title: '提示',
					content: text,
					confirmText:'成为商户',
					cancelText:'历史参与',
					success: function(res) {
						if (res.confirm) {
							uni.navigateTo({
								url:'/pages/log_pos/log_pos?nickvalue='+nickvalue+'&num='+num
							})
						} else if (res.cancel) {
							
						}
					}
				});
			}else{
				text = '您未参与过任何活动，是否选择成为商户，发起抽奖'
				var num = point.num-1
				var nickvalue = point.nickvalue
				uni.showModal({
					title: '提示',
					content: text,
					confirmText:'成为商户',
					cancelText:'返回',
					success: function(res) {
						if (res.confirm) {
							uni.navigateTo({
								url:'/pages/log_pos/log_pos?nickvalue='+nickvalue+'&num='+num
							})
						} else if (res.cancel) {
							uni.navigateTo({
								url:'/pages/index/index'
							})
						}
					}
				});
			}
			
		}
	}
</script>

<style>
	#app{
		height: 100%;
		width: 100%;
		position: absolute;
		background: url(https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/cjbj.png) no-repeat center;
		background-size: 100% 100%;
		font-size: 13px;
	}
	.mes_sin{
		width: 95%;
		height: 60px;
		border-radius: 5px;
		background: linear-gradient(to bottom,#3d8eea ,#ffffff66);
		margin-top: 8px;
		margin-left: 2.5%;
	}
	.img{
		width: 40px;
		height: 40px;
		margin-left: 10px;
		margin-top: 10px;
	}
	.mes_sintext{
		color: #ffffff;
		width: 95%;
		line-height: 30px;
		margin-top: 10px;
		margin-left: 2.5%;
	}
	.boxhis{
		overflow: scroll;
		height: 100%;
		width: 100%;
	}
	.mestext{
		display: inline-block;
		vertical-align: top;
		width: 75%;
		margin-top: 15px;
		margin-left: 10px;
		color: #4f4f4f;
		font-weight: bold;
	}
	.timecl{
		font-weight: 200;
		color: #646464;
		margin-top: 5px;
	}
	.checkview{
		width: 280px;
		height: 260px;
		border-radius: 10px;
		background-color: #ffffff;
	}
	.title_che{
		line-height: 40px;
		font-weight: bold;
		width: 100%;
		text-align: center;
	}
	.checkconsin{
		width: 80%;
		height: 30px;
		margin: auto;
		background: linear-gradient(to bottom,#3d8eea88,#3d8eea22);
		line-height: 30px;
		border-radius: 8px;
		margin-top: 5px;
	}
	.che_l{
		display: inline-block;
		vertical-align: top;
		width: 90px;
		margin-left: 8px;
	}
	.che_r{
		display: inline-block;
		vertical-align: top;
		font-weight: bold;
	}
	.btn{
		width: 80px;
		height: 30px;
		border-radius: 5px;
		background-color: #3d8eea;
		color: #ffffff;
		line-height: 30px;
		margin-top: 10px;
		font-size: 14px;
		font-weight: bold;
	}
	
</style>