<template>
	<view class="box">
		<view class="box_view">
			<view class="noreadmes">
				<view class="messin" @click="cread">
					<view class="messin_l">
						<image src="../../static/logo.png" class="img"></image>
						<view class="circle" v-if="status!='FALSE'"></view>
					</view>
					<view class="messin_r"> 您的活动申请不合格，请点击查看详情</view>
				</view>
			</view>
			<view class="readmes"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return{
				status:'',
				nickvalue:'',
				num:0
			}
		},
		methods: {
			cread() {
				var nickvalue = this.nickvalue
				this.status = 'FALSE'
				uni.showModal({
					title: '提示',
					content: '您的活动申请不合格,原因如下',
					confirmText: '重新申请',
					cancelText: '返回',
					success: function(res) {
						if (res.confirm) {
							uni.navigateTo({
								url: '/pages/set/set?nickvalue='+nickvalue
							})
						} else if (res.cancel) {
							uni.navigateBack()
						}
					}
				});
				console.log(111)
			}
		},
		onLoad(options) {
			this.nickvalue = options.nickvalue
			
		}
	}
</script>

<style>
	.box {
		height: 100%;
		width: 100%;
		position: absolute;
		background-color: #f5f5f5;
	}
	
	.box_view {
		overflow: scroll;
	}
	
	.messin {
		background-color: #ffffff;
		width: 100%;
		height: 60px;
		border-bottom: 1px solid #cccccc66;
		display: flex;
		flex-direction: row;
	}
	
	.messin_l {
		width: 70px;
		height: 60px;
	}
	
	.img {
		height: 40px;
		width: 40px;
		margin-top: 10px;
		margin-left: 15px;
		border-radius: 5px;
	}
	
	.circle {
		height: 8px;
		width: 8px;
		background-color: #ff0000;
		display: inline-block;
		vertical-align: top;
		margin-top: 8px;
		margin-left: -5px;
		border-radius: 50%;
	}
	
	.messin_r {
		font-size: 12px;
		color: #cccccc;
		margin-top: 20px;
	}
</style>