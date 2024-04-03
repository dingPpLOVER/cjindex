<template>
	<view class="box">
		<form >
			<view class="nicknameview">
				<input type="nickname" placeholder="登录" class="nickname" placeholder-class="plac" v-model="nickvalue" @blur="onInput"/>
			</view>
			<view class="logbot">
				<!-- <view class="">微信授权</view> -->
				<button open-type="agreePrivacyAuthorization" @click="handleAgreePrivacyAuthorization"
					class="logbotsin" >微信授权</button>
				<button class="logbotsin" @click="longinc" style="border: none;">登录系统</button>
			</view>
		</form>

		<view class="tip">*首次登录请先点击微信授权同意后，点击登录获取微信昵称，登录系统*</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				nickvalue: ''
			}
		},
		methods: {
			handleAgreePrivacyAuthorization() {
				wx.requirePrivacyAuthorize({
					success: res => {
						console.log('用户同意了隐私协议 或 无需用户同意隐私协议')
					},
					fail: res => {
						console.log('用户拒绝了隐私协议')
					}
				})
			},
			onInput(e){
				this.nickvalue = e.detail.value
			},
			longinc(e) {
				console.log('username'+this.nickvalue)
				var nickvalue = this.nickvalue
				if(this.nickvalue=='ding'|| this.nickvalue=='ping'){
					uni.navigateTo({
						url:'/pages/actend_alert/actend_alert?nickvalue='+nickvalue,
					})
				}else if(this.nickvalue=='di'){
					uni.navigateTo({
						url:'/pages/Lucky-Draw/Lucky-Draw ',
					})
				}else if(this.nickvalue=='丁丁'){
					uni.navigateTo({
						url:'/pages/posindex/posindex',
					})
				}else{
					
				}
			}
		}
	}
</script>

<style>
	.box {
		/* background: url('https://raw.githubusercontent.com/dingPpLOVER/image/master/cj/logincj.png'); */
		background: url(https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/logincj.png);
		height: 100%;
		width: 100%;
		position: absolute;
		background-size: 100% 100%;
	}

	.logbot {
		position: absolute;
		height: 35px;
		width: 80%;
		margin-left: 10%;
		bottom: 40px;
		display: flex;
		flex-direction: row;
		text-align: center;
		line-height: 35px;
	}

	.logbotsin {
		flex: 1;
		background-color: #00c964;
		border: none;
		color: #ffffff;
		margin: 0 20px;
		border-radius: 5px;
		font-size: 14px;
		line-height: 35px;
	}

	.nicknameview {
		position: absolute;
		bottom: 90px;
		width: 100%;
		height: 30px;
	}

	.nickname {
		width: 60%;
		height: 35px;
		margin: auto;
		border-top: 1px solid #c4def9;
		border-bottom: 1px solid #c4def9;
		padding: 0 8px;
		color: #ffffff;
	}

	.plac {
		font-size: 13px;
		color: #ffffff;
	}

	.tip {
		position: absolute;
		bottom: 0;
		line-height: 15px;
		font-size: 10px;
		color: #e59100;
		width: 80%;
		margin-left: 10%;
	}
</style>