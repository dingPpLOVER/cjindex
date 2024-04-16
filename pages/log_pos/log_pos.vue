<template>
	<div id="app">
		<div class="register_mes" @click="mesclick">
			<image src="https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/icon/register_mes.png" class="icon_"></image>
			<view class="mescricle"  v-if="num>0">{{num}}</view>
		</div>
		<div class="box">
			<div class="titletext">注册成为商户</div>
			<form class="formclass" @submit="onsubmit">
				<div class="inpsin">
					<image src="https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/icon/name.png" class="icon"></image>
					<input class="inpclass" placeholder="代理人姓名" type="text" placeholder-class="plac"
						v-model="form.name" />
				</div>
				<div class="inpsin">
					<image src="https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/icon/tel.png" class="icon"></image>
					<input class="inpclass" placeholder="代理人手机号" type="number" placeholder-class="plac"
						v-model="form.tel" />
				</div>
				<div class="inpsin">
					<image src="https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/icon/wxname.png" class="icon"></image>
					<input class="inpclass" placeholder="代理人微信昵称" type="text" placeholder-class="plac"
						v-model="form.wxname" disabled="" />
				</div>
				<div class="inpsin">
					<image src="https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/icon/post.png" class="icon"></image>
					<input class="inpclass" placeholder="代理人职务" type="text" placeholder-class="plac"
						v-model="form.post" />
				</div>
				<div class="inpsin">
					<image src="https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/icon/posname.png" class="icon"></image>
					<input class="inpclass" placeholder="商户全称" type="text" placeholder-class="plac"
						v-model="form.posname" />
				</div>
				<div class="inpsin">
					<image src="https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/icon/address.png" class="icon"></image>
					<input class="inpclass" placeholder="地址" type="text" placeholder-class="plac"
						v-model="form.address" />
				</div>
				<div class="inpsin">
					<image src="https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/icon/register_trade.png" class="icon"></image>
					<input class="inpclass" placeholder="所属行业" type="text" placeholder-class="plac"
						v-model="form.trade" />
				</div>
				<div class="inpsin">
					<image src="https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/icon/register_city.png" class="icon"></image>
					<input class="inpclass" placeholder="所在城市" type="text" placeholder-class="plac"
						v-model="form.city" />
				</div>
				<button class="but" form-type="submit">注册TRAVELER</button>
			</form>
		</div>
		<uni-popup ref="popup" type="center">
			<view class="checkview">
				<view class="checkcon">
					<image src="https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/icon/takenote.png" class="icon_p"></image>
					<view class="poptitle">请核对提交信息内容，确认无误后，点击确定提交。</view>
					<view class="detailview">
						<view class="de_text">代理人姓名：</view>
						<view class="de_value">{{form.name}}</view>
					</view>
					<view class="detailview">
						<view class="de_text">代理人联系电话：</view>
						<view class="de_value">{{form.tel}}</view>
					</view>
					<view class="detailview">
						<view class="de_text">代理人微信昵称：</view>
						<view class="de_value">{{form.wxname}}</view>
					</view>
					<view class="detailview">
						<view class="de_text">代理人职务：</view>
						<view class="de_value">{{form.post}}</view>
					</view>
					<view class="detailview">
						<view class="de_text">商户全称：</view>
						<view class="de_value">{{form.posname}}</view>
					</view>
					<view class="detailview">
						<view class="de_text">地址：</view>
						<view class="de_value">{{form.address}}</view>
					</view>
					<view class="detailview">
						<view class="de_text">所属行业：</view>
						<view class="de_value">{{form.trade}}</view>
					</view>
					<view class="detailview">
						<view class="de_text">所在城市：</view>
						<view class="de_value">{{form.city}}</view>
					</view>
					<view class="btn">
						<view class="btnsin" style="background-color: #cccccc;" @click="re_reg"> 重置</view>
						<view class="btnsin" style="background-color: #28c445;" @click="sualert"> 确认</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</div>
</template>

<script>
	import {onsubmit} from '../../static/js/log_pos.js'
	import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue'
	export default {
		data() {
			return {
				num:1,
				status:'',
				form: {
					name: '',
					tel: '',
					wxname: '',
					post: '',
					posname: '',
					address: '',
					trade:'',
					city:'',
					status:'',
				}
			}
		},
		methods: {
			onsubmit(event) {
				event.preventDefault(); // 阻止表单默认提交行为
				console.log(this.form)
				var form = this.form
				var name = form.name
				var tel = form.tel

				function isMobile(phone) {
					const regex = /^1[3-9]\d{9}$/;
					return regex.test(phone);
				}
				console.log(isMobile(tel))
				var wxname = form.wxname
				var posname = form.posname
				var post = form.post
				var address = form.address
				var trade = form.trade
				var city = form.city
				var infarr = [name, tel, wxname, post, posname, address,trade,city]
				console.log(infarr)
				var infarrtext = ["代理人姓名", "代理人手机号", "微信昵称", "代理人职务", "商户全称", "地址","所属行业","所在城市"]
				var onsarr = []
				for (var i = 0; i < infarr.length; i++) {
					if (infarr[i].length <= 0) {
						onsarr.push(infarrtext[i])
					}
				}
				
				if (onsarr.length == 0 && isMobile(tel)) {
					this.$refs.popup.open('center') //中间弹出
				} else if (onsarr.length == 0 && !isMobile(tel)) {
					var tt = ''
					if (!isMobile(tel)) {
						tt = '请输入正确的手机号码'
					}
					uni.showModal({
						title: '提示',
						content: tt,
					});
				} else {
					uni.showModal({
						title: '提示',
						content: onsarr + '不能为空',
					});
				}

			},
			mesclick(){
				var nickvalue = this.form.wxname
				var num = this.num
				uni.navigateTo({
					url:'/pages/mes/mes?nickvalue='+nickvalue+'&num='+num
				})
			},
			sualert(){
				var this_ = this
				uni.showModal({
					title: '提示',
					content: '提交成功,请等待审核,结果会在24小时内发送到系统,请登录查看',
					success: function(res) {
						if (res.confirm) {
							this_.$refs.popup.close()
							uni.navigateTo({
								url:'/pages/index/index'
							})
				
						} else if (res.cancel) {
				
						}
					}
				});
			},
			re_reg(){
				this.$refs.popup.close()
			}
		},
		onLoad(options) {
			console.log(options)
			this.form.wxname = options.nickvalue
			if(options.num){
				this.num = options.num
			}
			
		},
		mounted() {
			onsubmit()
			
		}
	}
</script>

<style scoped>
	@import '../../static/css/log_pos.css';
</style>