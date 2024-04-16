<template>
	<view class="box">
		<view class="topbar"></view>
		<view class="top">
			<view class="left">
				<view class="tx_view">
					<button class="avatar-wrapper" open-type="chooseAvatar" @chooseavatar="onChooseAvatar">
						<image class="avatar" :src="avatarUrl"></image>
					</button>
					<view class="clicktext">*获取头像*</view>
				</view>
				<view style="flex: 1;">
					<view style=" margin-top: 20px;">你好！管理员</view>
					<view class="nickname">{{nickname}}</view>
				</view>
			</view>
			<view class="rig">
				<view class="backview" @click="backurl">退出登录</view>
			</view>
		</view>
		<view class="checkesin">
			<view class="title">审批</view>
			<view class="checont">
				<view class="checontsin" @click="toshurl">
					<image src="https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/icon/managericon_shsp.png" class="ima"></image>
					<view>商户审批</view>
				</view>
				<view class="line"></view>
				<view class="checontsin" @click="merchant_actf">
					<image src="https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/icon/managericon_actsp.png" class="ima"></image>
					<view>活动审批</view>
				</view>
			</view>
		</view>
		<view class="checkesin">
			<view class="title">商户管理</view>
			<view class="checont">
				<view class="checontsin" @click="tolist">
					<image src="https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/icon/managericon_shlist.png" class="ima"></image>
					<view>商户列表</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nickname:'',
				avatarUrl: 'https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/wxtx.png' 
			}
		},
		methods: {
			onChooseAvatar(e) {
				console.log('微信头像信息', e)
		        // 将数据赋值
				const { avatarUrl } = e.detail 
				this.avatarUrl = avatarUrl
			},
			backurl(){
				uni.navigateBack()
			},
			toshurl(){
				uni.navigateTo({
					url:'/pages/merchant_approval/merchant_approval'
				})
			},
			tolist(){
				uni.navigateTo({
					url:'/pages/merchant_shlist/merchant_shlist'
				})
			},
			merchant_actf(){
				uni.navigateTo({
					url:'/pages/merchant_act/merchant_act'
				})
			}
		},
		onLoad(option) {
			this.nickname = option.nickvalue
		}
	}
</script>

<style>
	@import "../../static/css/manager.css";
</style>