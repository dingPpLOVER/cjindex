<template>
	<div id="box">
		<div class="introduce">
			<text class="inttext">尊敬的商户</text><text class="intvalue">{{nickvalue}} 你好！</text>
		</div>
		<div class="start_act"></div>
		<div class="act_detail" :style="{height:act_detail+'px'}">
			<div class="act_text">活动详情</div>
			<div class="act_list"></div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nickvalue: '',
				act_detail: ''
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
			}
		},
		mounted() {
			this.getDivHeight()
		},
		onLoad(option) {
			this.nickvalue = option.nickvalue
			console.log(this.nickvalue)
		}
	}
</script>

<style scoped>
	@import '../../static/css/posindex.css';
</style>