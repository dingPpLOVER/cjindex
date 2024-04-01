<template>
	<div id="box">
		<div class="actname">集字抽奖送福利</div>
		<div class="timese">
			<span>2024年4月1日</span>-<span>2024年4月11日</span>
		</div>
		<div class="scrollpage">
			<div>徐*抽到500元现金抵用券</div>
		</div>
		<div class="bot">
			<!-- <div class="horselamp"> -->
			<!-- <div :class="lamptf" v-for="item in lamparr" class="lamptf"></div> -->
			<!-- </div> -->
			<div class="zptext">
				<!-- <view :style="{ color: isActive ? 'red' : 'blue' }"> -->
				<view class="zpsin " :class="item.class" v-for="(item,index) in jptext" :key="index"
					:style="{'color':intcol == index?'#ff0000':'#000000' }" >{{item.name}}</view>
				<!-- "{'md_page_':selectedTab === index}" -->
				<!-- <div class="zpsin" style=""></div>
				<div class="zpsin" style=""></div>
				<div class="zpsin" style="" ></div>
				<div class="zpsin" style=""></div>
				<div class="zpsin" style=""></div>
				<div class="zpsin" style=""></div>
				<div class="zpsin" style=""></div> -->
				<div class="zpbut" @click="move">开始抽奖</div>
			</div>
		</div>
	</div>
</template>

<script>
	import classjson from '@/static/json/jptext.json'
	export default {
		data() {
			return {
				lamparr: [],
				jptext: classjson,
				intcol: -1,
				intervalTime: 2000, // 间隔时间（毫秒）
				times: 0, //转动跑格子次数
				timer: 0, //转动定时
				cycle: 100, //转动基本次数，既至少需要转动多少次在进入抽奖环节
				speed: 40, //初始转动速度
				prize: 0, //中奖位置，接口返回
				synumber: 10, //剩余次数
				prize_data: { //中奖信息
					id: Number, //奖品ID
					name: '', //奖品名称
				},
				
			}
		},
		methods: {
			horselamp() {
				console.log(122)
				var arr = []
				for (var i = 0; i < 12; i++) {
					arr.push(i)
				}
				this.lamparr = arr
			},
			move() { //点击开始抽奖
				var id = Math.floor(Math.random()*7) 
				console.log(id)
				if (this.synumber == 0) {
					uni.showModal({
						title: '今日抽奖次数已用完,明天再来吧'
					})
				} else if (this.times != 0) {
					uni.showModal({
						tilte: '正在抽奖中，请勿重复点击'
					})
				} else {
					this.synumber-- //抽奖次数减一
					this.speed = 40 //每次抽奖速度初始化为200
					this.prize_data = 1 ; //已经拿到中奖信息，页面展示，等抽奖结束后，将弹窗弹出
					this.prize = id;//中奖位置赋值，跑马灯最终停留位置，这里实际位置需要-1
					this.startroll();//执行抽奖
				}
			},
			tostart() { //每一次转动
				var intcol = this.intcol //当前转动到那个位置
				const count = 8; //总共有多少个位置
				intcol++
				if (intcol > count - 1) {
					intcol = 0
				}
				this.intcol = intcol
				// console.log(this.intcol)
			},
			startroll() {
				this.times++ //转动次数
				this.tostart() //转动过程调用的每一次转动方法，这是第一次调用初始化
				this.useprize()
			},
			useprize() {
				// 如果当前转动次数达到要求 && 目前转到的位置是中奖位置
				if (this.times > this.cycle - 20 && this.prize === this.intcol) {
					clearTimeout(this.timer) //清除转动定时器
					this.times = 0 //转动跑格子次数初始化为0， 可以开始下次抽奖
				} else {
					if (this.times > 60) {
						this.speed += 20 //抽奖即将结束，放慢转动速度
					}
					this.timer = setTimeout(this.startroll, this.speed); //开始转动
				}
			}

		},
		mounted() {
			this.horselamp()
			
		}
	}
</script>

<style scoped>
	@import '../../static/css/luck-draw.css';
</style>