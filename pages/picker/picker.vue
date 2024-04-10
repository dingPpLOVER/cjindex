<template>
	<u-picker mode="time" v-model="show" :params="params">{{time}}</u-picker>
</template>
<script>
	export default {
		data() {
			return {
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: true
				},
				show: true,
				time:'2024-04-10'
			}
		},

		methods: {
			onConfirm(value) {
				// 用户确认选择的时间
				console.log('选择的时间:', value);
			}
		}

	}
</script>
<style>

</style>