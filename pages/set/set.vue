<template>
	<div class="box">

		<div class="box_s">
			<div class="title">
				<div class="titlet">请设置抽奖规则</div>
			</div>
			<div class="content">
				<form @submit="onsubmit">
					<div class="fontc">
						<div class="fontcsin" v-for="(item,index) in sty" :key="index"
							:style="{marginLeft:item.sty+'vw'}">
							<input class="setfontinp" :placeholder="'集字'+item.num" placeholder-style="font-size:13px;"
								v-model="form[item.val]" @input="onInput" maxlength="1" />
						</div>
					</div>
					<div class="inputdiv">
						<input class="setinput" placeholder="给活动起个名字" v-model="form.name" />
					</div>
					<div class="inputdiv">
						<input class="setinput" placeholder="设置默认抽奖次数" v-model="form.number" type="number" />
					</div>
					<div class="inputdiv">
						<input class="setinput" placeholder="设置最多中奖人数" v-model="form.per" type="number" />
					</div>
					<div class="inputdiv">
						<input class="setinput" placeholder="设置奖品" v-model="form.prize" />
					</div>


					<view class="inputdiv" @click="show = true">
						<u-datetime-picker :show="show" v-model="value1" mode="datetime"></u-datetime-picker>
					</view>

					<div class="inputdiv" @click="show = true">
						<u-datetime-picker :show="show" v-model="value1" mode="datetime"></u-datetime-picker>
					</div>
					<button class="btn" form-type="submit">提交</button>
				</form>
				<view>

				</view>

			</div>
		</div>

	</div>
</template>

<script>
	import sty from '@/static/json/set.json'
	export default {
		data() {
			return {
				show: false,
				value1: Number(new Date()),
				sty: sty,
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: true
				},
				//用于动态获取选择的时间
				time: '',
				form: {
					font1: '',
					font2: '',
					font3: '',
					font4: '',
					font5: '',
					font6: '',
					font7: '',
					font8: '',
					name: '',
					number: '',
					per: '',
					prize: '',
					strtime: '',
					endtime: ''
				}
				
			}
		},
		methods: {
			onsubmit(event) {
				event.preventDefault(); // 阻止表单默认提交行为
				console.log(this.form)
				var form = this.form
				var formarr = [form.font1, form.font2, form.font3, form.font4, form.font5, form.font6, form.font7, form
					.font8, form.name, form.number, form.per, form.prize, form.strtime, form.endtime
				]
				var formtext = ['集字1', '集字2', '集字3', '集字4', '集字5', '集字6', '集字7', '集字8', '活动名称', '默认次数', '参与人数', '奖励',
					'开始时间', '结束时间'
				]
				var arrnull = []
				for (var i = 0; i < formarr.length; i++) {
					if (formarr[i] == '') {
						arrnull.push(formtext[i])
					}
				}
				if (arrnull.length > 0) {
					uni.showModal({
						title: '提示',
						content: '请完成' + arrnull + '部分的填写',
						confirmText: '确定',
						success: function(res) {

						}
					});
				} else {
					uni.showToast({
						title: '提交通过',
						icon: 'success',
						duration: 2000
					})
				}
			},
			formatter(type, value) {
				if (type === 'year') {
					return `${value}年`
				}
				if (type === 'month') {
					return `${value}月`
				}
				if (type === 'day') {
					return `${value}日`
				}
				if (type === 'hour') {
					return `${value}时`
				}
				if (type === 'minute') {
					return `${value}分`
				}
				return value
			},
			
			onInput(event) {
				// 输入内容处理，可以在这里添加额外逻辑
				console.log(event.target.value);
				var test = event.target.value
				if (event.target.value && event.target.value.length > 1) {
					event.target.value = event.target.value.substring(0, 1);
				}
			}
		},
		onReady() {
			// 微信小程序需要用此写法
			this.$refs.datetimePicker.setFormatter(this.formatter)
			this.$refs.datetimePickerEnd.setFormatter(this.formatter)
		},
		mounted() {

		}
	}
</script>

<style lang="scss" scoped>
	@import url("../../static/css/set.css");
</style>