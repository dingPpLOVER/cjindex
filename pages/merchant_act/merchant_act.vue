<template>
	<view class="box">
		<view class="viewtop">
			<view class="scrollpage">
				<scroll-view class="sc" scroll-x="true" scroll-left="scrollLeft">
					<view :class="{'scrsintop_':currenttab == index }" class="scrsintop"
						v-for="(item,index) in tabtextP" @click="scrtab(index)" :key="index">{{item}}</view>
				</scroll-view>
			</view>
		</view>
		<swiper :style="{height:heights+'px'}" style="overflow: scroll; background-color: #f5f5f5;"
			:current="currenttab" @change="swiperchange">
			<!-- <swiper-item v-for="(item,index) in tabtextP" :key="index" class="sinswiper">{{item}}</swiper-item> -->
			<swiper-item>
				<view style="height: 98%;width: 100%; overflow: scroll;">
					<view class="switsin_act" v-for="(item,index) in fsta" :key="index"
						@click="openpoup(item.status,item.name,item.startime,item.endtime,item.win_num,item.cont,item.cj_num,item.prize,item.id)">
						<view class="act_left">
							<image :src="item.image" class="act_img"></image>
						</view>
						<view class="act_right" :style="back_n">
							<view class="act_name">{{item.name}}</view>
							<view>时间：{{item.startime}} 至 {{item.endtime}}</view>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view style="height: 98%;width: 100%; overflow: scroll;">
					<view class="switsin_act" v-for="(item,index) in tsta" :key="index"
						@click="openpoup(item.status,item.name,item.startime,item.endtime,item.win_num,item.cont,item.cj_num,item.prize,item.id)">
						<view class="act_left">
							<image :src="item.image" class="act_img"></image>
						</view>
						<view class="act_right" :style="back_y">
							<view class="act_name">{{item.name}}</view>
							<view>时间：{{item.startime}} 至 {{item.endtime}}</view>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view style="height: 98%;width: 100%; overflow: scroll;">
					<view class="switsin_act" v-for="(item,index) in jsonarr" :key="index"
						@click="openpoup(item.status,item.name,item.startime,item.endtime,item.win_num,item.cont,item.cj_num,item.prize,item.id)">
						<view class="act_left">
							<image :src="item.image" class="act_img"></image>
						</view>
						<view class="act_right" :style="item.status=='FALSE'?back_n:back_y">
							<view class="act_name">{{item.name}}</view>
							<view>时间：{{item.startime}} 至 {{item.endtime}}</view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<uni-popup ref="popup" type="center">
			<view class="test-popup_act">
				<view class="popup_title">申请信息单</view>
				<image :src="poupbj" class="popupimage"></image>
				<view class="poupbj">
					<view class="poupsin"><text class="poup_l">活动名称:</text>
						<tex class="poup_r">{{name}}</tex>
					</view>
					<view class="poupsin"><text class="poup_l">集字内容:</text>
						<tex class="poup_r">{{cont}}</tex>
					</view>
					<view class="poupsin"><text class="poup_l">申请人姓名:</text>
						<tex class="poup_r">张三</tex>
					</view>
					<view class="poupsin"><text class="poup_l">开始时间:</text>
						<tex class="poup_r">{{startime}}</tex>
					</view>
					<view class="poupsin"><text class="poup_l">结束时间:</text>
						<tex class="poup_r">{{endtime}}</tex>
					</view>
					<view class="poupsin"><text class="poup_l">微信昵称:</text>
						<tex class="poup_r">丁丁</tex>
					</view>
					<view class="poupsin"><text class="poup_l">最高中奖人数:</text>
						<tex class="poup_r">{{winnum}}</tex>
					</view>
					<view class="poupsin"><text class="poup_l">奖励:</text>
						<tex class="poup_r">{{prize}}</tex>
					</view>
					<view class="poupsin"><text class="poup_l">商家全称:</text>
						<tex class="poup_r">全聚德</tex>
					</view>

					<view class="poupbut" v-if="none=='normal'">
						<button @click="noconfirm" class="btn" style="background-color: #cccccc;">不通过</button>
						<button @click="confirm" class="btn">通过</button>
					</view>
					<view class="poupbut" v-if="none=='none'">
						<button @click="close_confirm" class="btn" style="margin-left:60px;">关闭</button>
					</view>
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="nopopup" type="center">
			<view class="no_passview">
				<view>
					<view class="popup_title">原因</view>
					<form @submit="submit">
						<textarea class="textarea" placeholder="请输入不通过原因..." v-model="textareaval"></textarea>
						<button form-type="submit" class="btn" style="margin-top: 5px;margin-left: 100px;">提交</button>
					</form>

				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	// import jsonarr from '@/static/json/merchant.json'
	import jsonarr from '@/static/json/sh_act.json'
	import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue'
	export default {
		components: { //vue2需要注册一下
			uniPopup
		},
		data() {
			return {
				tabtextP: ['待审核', '已审核', '全部'],
				currenttab: 0,
				heights: 0,
				jsonarr: jsonarr,
				fsta: [],
				tsta: [],
				status_m: '',
				poupbj: '',
				textareaval: '',
				none: '',
				startime: '',
				name: '',
				endtime: '',
				cont: '',
				prize: '',
				cjnum: '',
				winnum: '',
				id: '',
				back_y: 'background: url(https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/sh_yes.png) no-repeat center right; background-size: 30%;',
				back_n: 'background: url(https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/sh_no.png) no-repeat center right; background-size: 30%;'
			}
		},
		methods: {
			scrtab(index) {
				console.log(index)
				this.currenttab = index
			},
			swiperchange(e) {
				// console.log(e.detail.current)
				var index = e.detail.current
				this.scrtab(index)
			},
			getDivHeight() {
				// 创建选择器对象
				const query = uni.createSelectorQuery().in(this);
				// 选择div
				query.select('.box').boundingClientRect(data => {
					// data中包含了元素的尺寸信息，如宽、高等
					if (data) {
						// console.log('Div的高度:', data.height);
						this.heights = data.height - 110
						// console.log(this.heights)
					}
				}).exec(); // 执行选择器查询
			},
			openpoup(index, name, startime, endtime, winnum, cont, cjnum, prize, id) {
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持         
				//['top','left','bottom','right','center']
				//item.status,item.name,item.startime,item.endtime,item.win_num,item.cont,item.cj_num,item.prize,item.id
				console.log(index, name, startime, endtime, winnum, cont, cjnum, prize, id)
				this.id = id
				this.startime = startime
				this.name = name
				this.endtime = endtime
				this.winnum = winnum
				this.cont = cont
				this.cjnum = cjnum
				this.prize = prize
				this.$refs.popup.open('center') //中间弹出
				if (index == 'FALSE') {
					this.poupbj = 'https://232r34t830.zicp.fun/ftpData/tmp/dp/cj/cj/sh_no.png'
					this.none = 'normal'
				} else {
					this.poupbj = 'https://232r34t830.zicp.fun/ftpData/tmp/dp/cj/cj/sh_yes.png'
					this.none = 'none'
				}
			},
			confirm() {
				this.$refs.popup.close()
				console.log('标签绑定的ID：' + this.id)
				var newjsonarr = []
				var jsonarr = this.jsonarr;
				for (var i = 0; i < jsonarr.length; i++) {
					if (jsonarr[i].id == this.id) {
						jsonarr[i].status = "ture"
					}
				}
				this.jsonarr = jsonarr
				console.log(jsonarr)
				this.jsonarrfun()
				uni.showToast({
					title: '提交通过',
					icon: 'success',
					duration: 2000
				})
			},
			noconfirm() {
				this.$refs.nopopup.open('center')
			},
			close_confirm() {
				this.$refs.popup.close()
			},
			submit(event) {
				event.preventDefault(); // 阻止表单默认提交行为
				console.log(this.textareaval)
				uni.showToast({
					title: '原因已发送',
					icon: 'success',
					duration: 2000
				})
				this.$refs.nopopup.close()
				this.$refs.popup.close()
			},
			jsonarrfun() {
				const tsta = [];
				const fsta = [];
				var jsonarr = this.jsonarr;
				for (var i = 0; i < jsonarr.length; i++) {

					if (jsonarr[i].status == 'FALSE') {
						fsta.push(jsonarr[i])
					} else {
						tsta.push(jsonarr[i])
					}
				}
				this.fsta = fsta
				this.tsta = tsta
				jsonarr.sort((a, b) => {
					let categoryOrder = ['FALSE', 'ture'];
					return categoryOrder.indexOf(a.status) - categoryOrder.indexOf(b.status);
				});
				this.jsonarr = jsonarr
			}
		},
		mounted() {
			this.getDivHeight()
			this.jsonarrfun()
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/css/manager_.css";
</style>