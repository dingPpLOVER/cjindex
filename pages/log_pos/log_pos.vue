<template>
	<div id="app">
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
				<button class="but" form-type="submit">注册TRAVELER</button>
			</form>

		</div>
	</div>
</template>

<script>
	import {onsubmit} from '../../static/js/log_pos.js'
	export default {
		data() {
			return {
				form: {
					name: '',
					tel: '',
					wxname: '',
					post: '',
					posname: '',
					address: '',

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
				var infarr = [name, tel, wxname, post, posname, address]
				var infarrtext = ["代理人姓名", "代理人手机号", "微信昵称", "代理人职务", "商户全称", "地址"]
				var onsarr = []
				for (var i = 0; i < infarr.length; i++) {
					if (infarr[i].length <= 0) {
						onsarr.push(infarrtext[i])
					}
				}
				if (onsarr.length == 0 && isMobile(tel)) {
					uni.showModal({
						title: '提示',
						content: '提交成功,请等待审核',
						success: function(res) {
							if (res.confirm) {

							} else if (res.cancel) {

							}
						}
					});
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

			}
		},
		onLoad(point) {
			console.log(point)
			this.form.wxname = point.nickvalue
		},
		mounted() {
			onsubmit()
		}
	}
</script>

<style scoped>
	@import '../../static/css/log_pos.css';
</style>