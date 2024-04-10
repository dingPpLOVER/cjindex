<template>
	<div class="box">
		<u-picker v-model="show" mode="time">this is picker</u-picker>
		<uni-datetime-picker @confirm="onConfirm" :show="show" v-model="valuel" mode="date"></uni-datetime-picker>
		
		<div class="box_s">
			<div class="title">
				<div class="titlet">请设置抽奖规则</div>
			</div>
			<div class="content">
				<form @submit="onsubmit">
					<div class="fontc">
						<div class="fontcsin" v-for="(item,index) in sty" :key="index"
							:style="{marginLeft:item.sty+'vw'}">
							<input class="setfontinp" placeholder="请输入" placeholder-style="font-size:13px;"
								v-model="form[item.val]" />
						</div>
					</div>
					<div class="inputdiv">
						<input class="setinput" placeholder="给活动起个名字" v-model="form.name" />
					</div>
					<div class="inputdiv">
						<input class="setinput" placeholder="设置默认抽奖次数" v-model="form.number" />
					</div>
					<div class="inputdiv">
						<input class="setinput" placeholder="设置最多中奖人数" v-model="form.per" />
					</div>
					<div class="inputdiv">
						<input class="setinput" placeholder="设置奖品" v-model="form.prize" />
					</div>
					<view class="inputdiv">
						<u-picker title="选择器" :columns="columns" @change="onChange"></u-picker>
					</view>
					<div class="inputdiv">
						<!-- <u-button>click me</u-button> -->
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
				sty: sty,
				strtime: '2000-01-01', // 默认选中的日期
				valuel: Number(new Date()),
				columns: [{
					values: ['中国', '美国', '日本', '德国']
				}],
				params: {
					year: true,
					month: true,
					day: true,
					hour: false,
					minute: false,
					second: false
				},
				show: false,
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
			},
			onTimeChange(e) {
				this.strtime = e.detail.value;
				console.log(111)
			},
			onConfirm(e) {
				console.log('选择的时间为：', e)
			},
			onChange(e) {
				console.log(e.detail.value);
				// 处理选中的值
			}
		},
		mounted() {
			console.log(sty)
			console.log('当前uniapp版本:', getApp().globalData.VUE_APP_VERSION);
		}
	}
</script>

<style>
	@import url("../../static/css/set.css");
</style>