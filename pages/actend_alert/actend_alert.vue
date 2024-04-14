<template>
	<div id="app">
		
	</div>
</template>

<script>
	export default {
		
		onLoad(point) {
			var text = ''
			console.log(point.nickvalue)
			if(point.nickvalue == 'ding'){
				text = '您参与的抽奖活动已结束，您还可以成为商户，发起抽奖'
			}else{
				text = '您未参与过任何活动，是否选择成为商户，发起抽奖'
			}
			var num = point.num-1
			var nickvalue = point.nickvalue
			uni.showModal({
				title: '提示',
				content: text,
				confirmText:'成为商户',
				cancelText:'返回',
				success: function(res) {
					if (res.confirm) {
						uni.navigateTo({
							url:'/pages/log_pos/log_pos?nickvalue='+nickvalue+'&num='+num
						})
					} else if (res.cancel) {
						uni.navigateBack()
					}
				}
			});
		}
	}
</script>

<style>
	#app{
		height: 100%;
		width: 100%;
		position: absolute;
		background: url(https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/cjbj.png) no-repeat center;
		background-size: 100% 100%;
		font-size: 13px;
	}
</style>