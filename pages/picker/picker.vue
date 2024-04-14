<template>

	<view>
		<u-collapse :value="['0']" ref="collapse">
			<u-collapse-item title="搜索" name="0">
				<u--form :model="formModel" ref="form">
					<u-form-item @click="dateTimePicker = true" label="时间:" labelWidth="100rpx" prop="maintenanceTime"
						style="align-items: center; border: 3px solid;">
						<u--input v-model="formModel.maintenanceTime" prefixIcon="calendar">
						</u--input>
					</u-form-item>
				</u--form>
			</u-collapse-item>
		</u-collapse>

		<u-datetime-picker @confirm="dateTimePickerConfirm" @cancel="dateTimePicker = false" :show="dateTimePicker"
			v-model="timeValue" ref="datetimePicker" mode="datetime" closeOnClickOverlay
			:defaultIndex="defaultTimeIndex">
		</u-datetime-picker>


	</view>
</template>
<script>
	export default {
		data() {
			return {
				dateTimePicker: false,
			}
		},
		onReady() {
			console.log('onReady')

			// 微信小程序需要用此写法
			this.$refs.datetimePicker.setFormatter(this.formatter)
		},
		methods: {

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
			dateTimePickerConfirm(e) {
				this.dateTimePicker = false
				console.log(e.value, e.mode)
				this.formModel.maintenanceTime = this.$u.date(e.value, 'yyyy-mm-dd hh:MM:ss')
				this.$refs.form.validateField('maintenanceTime')
				console.log(this.formModel.maintenanceTime)
			}
		},
	}	
</script>


<style lang="scss" scoped>
	.u-popup-slot {
		width: 200px;
		height: 80px;
		@include flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 10rpx;
	}
</style>