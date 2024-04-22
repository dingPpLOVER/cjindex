<template>
	<div class="larbox">
		<div id="box">
			<div class="nickname">
				<div class="wel">欢迎用户</div>
				<input type="nickname" class="inp" v-model="nickvalue" @blur="onInput"/>
			</div>
			<div class="actname">集字抽奖送福利</div>
			<div class="timese">
				<span>2024-04-01 08:00</span>至<span>2024-04-03 08:00</span>
			</div>
			<div class="scrollpage">
				<div>恭喜徐*完成集字</div>
			</div>
			<div class="bot">
				<div class="horselamp">
					<div class="lamptf" :class="item" v-for="(item,index) in lamparr" :key="index" :style="{'background-color':lamindex==index ?'#55ffff':''}"></div>
				</div>
				<div class="zptext">
					<!-- <view :style="{ color: isActive ? 'red' : 'blue' }"> -->
					<view class="zpsin " :class="item.class" v-for="(item,index) in jptext" :key="index"
						:style="{'background-color':intcol == index?'#ff3758':'#ffffff' }" >{{item.name}}</view>
					<div class="zpbut" @click="move">
						<div class="zpbut_" >开始抽奖</div>
					</div>
				</div>
				<div class="sydiv">可用抽奖次数 {{synumber}} 次</div>
			</div>
			<div class="com_pro_text">我的集字</div>
			<div class="com_pro">
				<div class="com_prosin" v-for="(item,index) in havetextarr_" :key="index"> 
					<div class="com_prosincon" :style="{'color':item.number>0?'#ca8000':'#eee8cd'}">
						<div class="com_prospan" :style="{'display':item.number>0?'noraml':'none'}">{{item.number>0 ?item.number: ''}}</div>
						{{item.name}}
					</div>
				</div>
			</div>
			<div class="pos" @click="tologpos">成为商户</div>
			<div class="tel">商家电话：15266666666</div>
		</div>
	</div>
</template>

<script>
	import classjson from '@/static/json/jptext.json'
	export default {
		data() {
			return {
				lamparr:[] ,
				lamindex:0,
				jptext: classjson,
				intcol: -1,
				intervalTime: 2000, // 间隔时间（毫秒）
				times: 0, //转动跑格子次数
				timer: 0, //转动定时
				cycle: 50, //转动基本次数，既至少需要转动多少次在进入抽奖环节
				speed: 10, //初始转动速度
				prize: 0, //中奖位置，接口返回
				synumber: 20, //剩余次数
				prize_data: { //中奖信息
					id: Number, //奖品ID
					name: '', //奖品名称
				},
				havetextarr:['大',"吉"],
				havetextarr_:[],
				nickvalue:''
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
				var id = Math.floor(Math.random()*7) //抽奖结果（0-7）随机
				console.log(id)
				if (this.synumber == 0) {
					uni.showModal({
						title: '今日抽奖次数已用完,明天再来吧'
					})
				} else if (this.times != 0) {
					uni.showModal({
						title: '抽奖中，请勿重复点击'
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
					uni.showModal({
						title: '恭喜你抽中了 "'+classjson[this.intcol].name +'"'
					})
					this.havetextarr.push(classjson[this.intcol].name)
					this.havee()
					
				} else {
					if (this.times > 60) {
						this.speed += 20 //抽奖即将结束，放慢转动速度
					}
					this.timer = setTimeout(this.startroll, this.speed); //开始转动
				}
			},
			lampscroll(){
				var lamindex = this.lamindex
				lamindex ++ 
				if(lamindex >11){
					lamindex = 0
				}
				this.lamindex = lamindex
			},
			havee(){
				var havetextarr = this.havetextarr
				var jptext = this.jptext
				var havetext = []
				for(var i = 0 ; i < jptext.length; i++ ){
					var arr = 0
					var obj = {}
					var name = ''
					for(var j = 0 ; j < havetextarr.length ; j ++ ){
						if(jptext[i].name == havetextarr[j]){
							arr ++ 
							name = jptext[i].name
						}
						else{
							name = jptext[i].name
						}
					}
					obj["name"] = name
					obj["number"] = arr
					havetext.push(obj)
				}
				console.log(havetext)
				this.havetextarr_ = havetext
				
			},
			tologpos(){
				var nickvalue = this.nickvalue
				// console.log(nickvalue)
				uni.navigateTo({
					url:'/pages/log_pos/log_pos?nickvalue='+nickvalue
				})
				
			},
			onInput(e){
				console.log(e.detail.value)
				this.nickvalue = e.detail.value
				
			},
		},
		mounted() {
			this.horselamp()
			this.lamparr = ["lamptf","lamptf1","lamptf2","lamptf3","lamptf4","lamptf5","lamptf6","lamptf7","lamptf8","lamptf9","lamptf10","lamptf11"]
			clearInterval(int)
			const int = setInterval(this.lampscroll,200)
			this.havee()
			console.log(this.nickvalue.length)
			var nicklength = this.nickvalue.length
			if(nicklength <= 0){
				wx.requirePrivacyAuthorize({
					success: res => {
						console.log('用户同意了隐私协议 或 无需用户同意隐私协议')
						this.nickvalue = '登录'
					},
					fail: res => {
						console.log('用户拒绝了隐私协议')
					}
				})
			}
		}
	}
</script>

<style scoped>
	@import '../../static/css/Lucky_Draw.css';
</style>