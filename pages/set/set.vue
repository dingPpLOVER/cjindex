<template>
	<div class="box">
		
		<div class="box_s">
			<div class="title">
				<div class="titlet">请设置抽奖规则</div>
			</div>
			<div class="content">
				<form @submit="onsubmit">
					<div class="fontc">
						<div class="fontcsin" v-for="(item,index) in sty" :key="index"
							:style="{marginLeft:item.sty+'vw'}">
							<input class="setfontinp" :placeholder="'集字'+item.num" placeholder-style="font-size:13px;"
								v-model="form[item.val]" @input="onInput" maxlength="1" />
						</div>
					</div>
					<div class="inputdiv">
						<input class="setinput" placeholder="给活动起个名字" v-model="form.name" />
					</div>
					<div class="inputdiv">
						<input class="setinput" placeholder="设置默认抽奖次数" v-model="form.number" type="number" />
					</div>
					<div class="inputdiv">
						<input class="setinput" placeholder="设置最多中奖人数" v-model="form.per" type="number" />
					</div>
					<div class="inputdiv">
						<input class="setinput" placeholder="设置奖品" v-model="form.prize" />
					</div>


					<view class="inputdiv" @click="show = true">
						<input class="setinput" placeholder="请选择开始时间" v-model="form.strtime" />
						<u-datetime-picker :show="show" v-model="value1" mode="datetime" @confirm="handleConfirm"
							ref="datetimePicker" @cancel="handcancel"></u-datetime-picker>
					</view>

					<div class="inputdiv" @click="show_ = true">
						<input class="setinput" placeholder="请选择结束时间" v-model="form.endtime" />
						<u-datetime-picker :show="show_" v-model="valuend" mode="datetime" ref="datetimePickerend"
							@confirm="handleConfirmend" @cancel="handcancelend"></u-datetime-picker>
					</div>
					<button class="btnset" form-type="submit">提交</button>
				</form>
				<view>

				</view>

			</div>
		</div>
		<uni-popup ref="popup" type="center">
			<view class="checkview">
				<view class="checkcon">
					<image src="https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/icon/takenote.png" class="icon_p"></image>
					<view class="poptitle">请核对提交信息内容，确认无误后，点击确定提交。</view>
					<view class="detailview">
						<view class="de_text">集字内容：</view>
						<view class="de_value">{{form.count}}</view>
					</view>
					<view class="detailview">
						<view class="de_text">活动名称：</view>
						<view class="de_value">{{form.name}}</view>
					</view>
					<view class="detailview">
						<view class="de_text">活动抽奖次数：</view>
						<view class="de_value">{{form.number}}</view>
					</view>
					<view class="detailview">
						<view class="de_text">最多中奖人数：</view>
						<view class="de_value">{{form.per}}</view>
					</view>
					<view class="detailview">
						<view class="de_text">活动奖品：</view>
						<view class="de_value">{{form.prize}}</view>
					</view>
					<view class="detailview">
						<view class="de_text">活动开始时间：</view>
						<view class="de_value">{{form.strtime}}</view>
					</view>
					<view class="detailview">
						<view class="de_text">活动结束时间：</view>
						<view class="de_value">{{form.endtime}}</view>
					</view>
					<view class="btn">
						<view class="btnsin" style="background-color: #cccccc;" @click="re_reg"> 重置</view>
						<view class="btnsin" style="background-color: #28c445;" @click="sualert"> 确认</view>
					</view>
				</view>
			</view>
		</uni-popup>
	</div>
</template>

<script>
	import sty from '@/static/json/set.json'
	import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue'
	export default {
		data() {
			return {
				show: false,
				show_: false,
				value1: Number(new Date()),
				valuend:Number(new Date())+24*60*60*1000,
				sty: sty,
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true,
					second: true
				},
				//用于动态获取选择的时间
				time: '',
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
					endtime: '',
					count:[]
				}

			}
		},
		methods: {
			onsubmit(event) {
				event.preventDefault(); // 阻止表单默认提交行为
				console.log(this.form)
				var form = this.form
				var formarr = [form.font1, form.font2, form.font3, form.font4, form.font5, form.font6, form.font7, form
					.font8, form.name, form.number, form.per, form.prize, form.strtime, form.endtime
				]
				var formtext = ['集字1', '集字2', '集字3', '集字4', '集字5', '集字6', '集字7', '集字8', '活动名称', '默认次数', '参与人数', '奖励',
					'开始时间', '结束时间'
				]
				var arrnull = []
				for (var i = 0; i < formarr.length; i++) {
					if (formarr[i] == '') {
						arrnull.push(formtext[i])
					}
				}
				if (arrnull.length > 0) {
					uni.showModal({
						title: '提示',
						content: '请完成' + arrnull + '部分的填写',
						confirmText: '确定',
						success: function(res) {

						}
					});
				} else {
					this.$refs.popup.open('center') //中间弹出
					this.form.count = form.font1+form.font2+ form.font3+form.font4+ form.font5+form.font6+ form.font7+ form
					.font8
				}
			},
			sualert(){
				var this_ = this
				uni.showModal({
					title: '提示',
					content: '提交成功,请等待审核,结果会在24小时内发送到系统,请登录查看',
					success: function(res) {
						if (res.confirm) {
							this_.$refs.popup.close()
							uni.navigateTo({
								url:'/pages/index/index'
							})
				
						} else if (res.cancel) {
				
						}
					}
				});
			},
			re_reg(){
				this.$refs.popup.close()
			},
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
			handleConfirm(value) {
				// console.log(new Date(value.value) )
				this.form.strtime = this.timef(value.value)
				this.show = false
			},
			handleConfirmend(value) {
				// console.log(value.value)
				this.form.endtime = this.timef(value.value)
				this.show_ = false
			},
			handcancel() {
				this.show = false;
			},
			handcancelend() {
				this.show_ = false
			},
			timef(value){
				var time = new Date(value)
				Date.prototype.format2nd = function (fmt) {
				  var o = {
				      "M+": this.getMonth() + 1, //月份
				      "d+": this.getDate(), //日
				      "h+": this.getHours(), //小时
				      "m+": this.getMinutes(), //分
				      "s+": this.getSeconds(), //秒
				      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
				      "S": this.getMilliseconds() //毫秒
				  };
				  if (/(y+)/.test(fmt)) {
				    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
				  }
				  for (var k in o) {
				    if (new RegExp("(" + k + ")").test(fmt)) {
				      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ?
				        (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
				    }
				  }
				  return fmt;
				}
				return time.format2nd("yyyy-MM-dd hh:mm")
			},
			
			onInput(event) {
				// 输入内容处理，可以在这里添加额外逻辑
				console.log(event.target.value);
				var test = event.target.value
				if (event.target.value && event.target.value.length > 1) {
					event.target.value = event.target.value.substring(0, 1);
				}
			},

		},
		onReady() {
			// 微信小程序需要用此写法
			this.$refs.datetimePicker.setFormatter(this.formatter)
			this.$refs.datetimePickerend.setFormatter(this.formatter)
		},
		mounted() {
			console.log(Number(new Date()))//返回毫秒数
		}
		
	}
</script>

<style lang="scss" scoped>
	@import url("../../static/css/set.css");
</style>