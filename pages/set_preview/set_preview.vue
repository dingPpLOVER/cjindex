<template>
	<div class="larbox">
		<div id="box">
			<div class="nickname">
				<div class="wel">欢迎用户</div>
				<input type="nickname" class="inp" v-model="nickvalue" @blur="onInput"/>
			</div>
			<div class="actname">{{act_name}}</div>
			<div class="timese">
				<span>{{strtime}}</span>至<span>{{endtime}}</span>
			</div>
			<div class="scrollpage">
				<div>恭喜***完成集字</div>
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
			<!-- <div class="pos" @click="tologpos">成为商户</div> -->
			<div class="backview" @click="backurl">退出预览</div>
			<div class="tel">商家电话：15266666666</div>
		</div>
	</div>
</template>

<script>
	import classjson from '@/static/json/jptext.json'
	export default {
		data(){
			return {
				nickvalue:'set',
				act_name:'',
				strtime:'',
				endtime:'',
				lamparr:[],
				synumber:'',
				jptext:[],
				class_:classjson,
				havetextarr_:[],
			}
		},
		methods:{
			horselamp() {
				console.log(122)
				var arr = []
				for (var i = 0; i < 12; i++) {
					arr.push(i)
				}
				this.lamparr = arr
			},
			lampscroll(){
				var lamindex = this.lamindex
				lamindex ++ 
				if(lamindex >11){
					lamindex = 0
				}
				this.lamindex = lamindex
			},
			havee(cc){
				var havetext = []
				for(var i = 0 ; i < cc.length ; i ++ ){
					var obj = {}
					var arr = 0
					obj["name"] = cc[i]
					obj["number"] = arr
					havetext.push(obj)
				}
				this.havetextarr_ = havetext
				
			},
			backurl(){
				uni.showModal({
					title: '提示',
					content: '活动规则确认无误，点击确定既可',
					confirmText:'确定',
					// cancelText:'历史参与',
					success: function(res) {
						if (res.confirm) {
							uni.navigateTo({
								url:'/pages/set/set'
							})
						} else if (res.cancel) {
							
						}
					}
				});
			}
		},
		mounted() {
			this.horselamp()
			
			this.lamparr = ["lamptf","lamptf1","lamptf2","lamptf3","lamptf4","lamptf5","lamptf6","lamptf7","lamptf8","lamptf9","lamptf10","lamptf11"]
			clearInterval(int)
			const int = setInterval(this.lampscroll,200)
		},
		onLoad(option) {
			var cc = option.conut
			var setcount = []
			for(var i = 0 ; i < cc.length ; i ++ ){
				var obj = {}
				obj["class"] = this.class_[i].class
				obj["name"] = cc[i]
				setcount.push(obj)
			}
			this.jptext = setcount
			this.act_name = option.act_name
			this.strtime = option.strtime
			this.endtime = option.endtime
			this.synumber = option.number
			this.havee(cc)
		}
	}
</script>

<style>
	@import '../../static/css/Lucky_Draw.css';
	.backview{
		height: 25px;
		width: 60px;
		position: absolute;
		right: 0;
		top: 20px;
		line-height: 25px;
		border-radius: 5px;
		color: #ffffff;
		border: 1px solid #ffffff;
		font-weight: bold;
		text-align: center;
	}
</style>