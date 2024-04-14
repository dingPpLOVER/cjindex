<template>
	<view class="box">
		<view class="top">
			<view class="top_ot"></view>
			<view class="top_b">
				<view class="top_bcon">
					<view class="top_bconsin">
						<view class="topvalue">222</view>
						<view class="toptext">注册的商户</view>
					</view>
					<view class="top_bconsin">
						<view class="topvalue">35</view>
						<view class="toptext">发起过活动</view>
					</view>
					<view class="top_bconsin">
						<view class="topvalue">2024-04-14</view>
						<view class="toptext">上次登录时间</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style>
	.box{
		height: 100%;
		width: 100%;
		position: absolute;
		font-size: 13px;
	}
	.top{
		height: 150px;
		width: 100%;
		background: linear-gradient(to right,#84f4f2,#abe4f6,#c9b9fd);
	}
	.top_b{
		position: absolute;
		height: 60px;
		width: 100%;
		margin-top: 100px;
	}
	.top_bcon{
		width: 90%;
		height: 50px;
		margin: auto;
		display: flex;
		flex-direction: row;
		text-align: center;
		color: #7d739d;
	}
	.top_bconsin{
		flex: 1;
	}
	.topvalue{
		line-height: 25px;
		color: #000000;
		font-size: 15px;
		font-weight: bold;
	}
	.toptext{
		font-size: 13px;
	}
</style>