<template>
	<view>
		<canvas id="qrcode" canvas-id="qrcode" style="width: 200px;height: 200px;margin: 30px auto; "></canvas>
	</view>
</template>

<script>
	// 引入qrcode库//创建二维码
	import UQRCode from 'uqrcodejs'; // npm install uqrcodejs
	export default {
		data() {
			return {

			}
		},
		mounted() {
			this.createQRCode()
		},
		methods: {
			createQRCode() {
				// 获取uQRCode实例
				var qr = new UQRCode();
				// 设置二维码内容
				qr.data = "https://github.com/dingPpLOVER/dingping";
				// 设置二维码大小，必须与canvas设置的宽高一致
				qr.size = 200;
				// 调用制作二维码方法
				qr.make();
				// 获取canvas上下文
				var canvasContext = uni.createCanvasContext('qrcode', this); // 如果是组件，this必须传入
				// 设置uQRCode实例的canvas上下文
				qr.canvasContext = canvasContext;
				// 调用绘制方法将二维码图案绘制到canvas上
				qr.drawCanvas();

			}
		}
	}
</script>

<style>
</style>