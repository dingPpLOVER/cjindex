<template>
	<view class="box">
		<view class="box_">
			<view class="boxsin" v-for="(item,index) in oddmes_" @click="wqact(index)">
				<view class="sintop">{{item.name}}</view>
				<view class="sinbot">
					<view class="sintime">
						<image src="https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/icon/time.png" class="img"
							mode="aspectFit"></image>
						<view class="timeview">{{item.startime}}</view>
					</view>
					<view style="width: 30px;">至</view>
					<view class="sintime">
						<image src="https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/icon/time.png" class="img"
							mode="aspectFit"></image>
						<view class="timeview">{{item.endtime}}</view>
					</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import oddmes from '@/static/json/oddmes.json'
	
	export default {
		data() {
			return {
				oddmes_: oddmes
			}
		},
		methods: {
			wqact(index) {
				var oddmes = this.oddmes_
				console.log(index)
				uni.navigateTo({
					url: '/pages/pos_wqact/pos_wqact?oddmesname=' + oddmes[index].name + '&startime=' + oddmes[
							index].startime + '&endtime=' + oddmes[index].endtime + '&cy_num=' + oddmes[index]
						.cy_num + '&win_num=' + oddmes[index].win_num 
				})
			}
		},
		mounted() {
			// console.log(this.oddmes_)
		}
	}
</script>

<style>
	.box {
		height: 100%;
		width: 100%;
		position: absolute;
		background-color: #cccccc22;
		font-size: 14px;
	}

	.box {
		height: 100%;
		width: 100%;
		overflow: scroll;
	}

	.boxsin {
		height: 80px;
		width: 95%;
		margin: auto;
		border-radius: 5px;
		background-color: #ffffff;
		margin-top: 8px;
	}

	.sintop {
		font-weight: bold;
		margin-left: 10px;
		margin-top: 10px;
		line-height: 25px;
	}

	.sinbot {
		width: 100%;
		height: 40px;
		line-height: 40px;
		display: flex;
		flex-direction: row;
	}

	.sintime {
		flex: 1;
		line-height: 40px;
	}

	.img {
		width: 25px;
		height: 25px;
		margin: 7.5px;
	}

	.timeview {
		display: inline-block;
		vertical-align: top;
	}
</style>