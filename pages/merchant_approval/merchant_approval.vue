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
					<view class="switsin" v-for="(item,index) in fsta" :key="index" @click="openpoup(item.status,item.tel,item.name,item.URL,item.trade,item.posi,item.id)">
						<view class="titlename">
							<text class="waitname">{{item.name}}<text
									style="color: #78c0e3; margin-left: 5px;">{{'( '+item.posi+' )'}}</text></text>
							<text class="waittext"> 待审核</text>
						</view>
						<view class="switsincon">
							<image :src="item.image" class="swimg"></image>
							<view class="swiurl">
								<view>所属行业:<text class="switex">{{'( '+item.trade+' )'}}</text></view>
								<view>商家地址:<text class="switex">{{item.URL}}</text></view>
							</view>
						</view>
						<view class="titlename_">
							<view class="tboot">
								<view>联系电话:<text class="switex">{{item.tel}}</text></view>
							</view>
							<view class="tbootline"></view>
							<view class="tboot">
								<view>注册时间:<text class="switex">{{item.time}}</text></view>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view style="height: 98%;width: 100%; overflow: scroll;">
					<view class="switsin" v-for="(item,index) in tsta" :key="index" @click="openpoup(item.status,item.tel,item.name,item.URL,item.trade,item.posi,item.id)">
						<view class="titlename">
							<text class="waitname">{{item.name}}<text
									style="color: #78c0e3; margin-left: 5px;">{{'( '+item.posi+' )'}}</text></text>
							<text class="waittext_"> 审核通过</text>
						</view>
						<view class="switsincon">
							<image :src="item.image" class="swimg"></image>
							<view class="swiurl">
								<view>所属行业:<text class="switex">{{'( '+item.trade+' )'}}</text></view>
								<view>商家地址:<text class="switex">{{item.URL}}</text></view>
							</view>
						</view>
						<view class="titlename_">
							<view class="tboot">
								<view>联系电话:<text class="switex">{{item.tel}}</text></view>
							</view>
							<view class="tbootline"></view>
							<view class="tboot">
								<view>注册时间:<text class="switex">{{item.time}}</text></view>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<view style="height: 98%;width: 100%; overflow: scroll;">
					<view class="switsin" v-for="(item,index) in jsonarr" :key="index" @click="openpoup(item.status,item.tel,item.name,item.URL,item.trade,item.posi,item.id)">
						<view class="titlename">
							<text class="waitname">{{item.name}}<text
									style="color: #78c0e3; margin-left: 5px;">{{'( '+item.posi+' )'}}</text></text>
							<text class="waittext_" v-if="item.status=='ture'"> 审核通过</text>
							<text class="waittext" v-if="item.status=='FALSE'"> 待审核</text>
						</view>
						<view class="switsincon">
							<image :src="item.image" class="swimg"></image>
							<view class="swiurl">
								<view>所属行业:<text class="switex">{{'( '+item.trade+' )'}}</text></view>
								<view>商家地址:<text class="switex">{{item.URL}}</text></view>
							</view>
						</view>
						<view class="titlename_">
							<view class="tboot">
								<view>联系电话:<text class="switex">{{item.tel}}</text></view>
							</view>
							<view class="tbootline"></view>
							<view class="tboot">
								<view>注册时间:<text class="switex">{{item.time}}</text></view>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<uni-popup ref="popup" type="center">
			<view class="test-popup">
				<view class="popup_title">申请信息单</view>
				<image :src="poupbj" class="popupimage"></image>
				<view class="poupbj" >
					<view class="poupsin"><text class="poup_l">商户全称:</text><tex class="poup_r">{{name}}</tex></view>
					<view class="poupsin"><text class="poup_l">申请人姓名:</text><tex class="poup_r">张三</tex></view>
					<view class="poupsin"><text class="poup_l">手机号:</text><tex class="poup_r">{{tel}}</tex></view>
					<view class="poupsin"><text class="poup_l">微信昵称:</text><tex class="poup_r">丁丁</tex></view>
					<view class="poupsin"><text class="poup_l">代理人职务:</text><tex class="poup_r">总经理</tex></view>
					<view class="poupsin"><text class="poup_l">商户地址:</text><tex class="poup_r">{{posi}}</tex></view>
					<view class="poupsin"><text class="poup_l">所属行业:</text><tex class="poup_r">{{trade}}</tex></view>
					<view class="poupsin"><text class="poup_l">所在城市:</text><tex class="poup_r">{{url}}</tex></view>
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
						<button  form-type="submit" class="btn" style="margin-top: 5px;margin-left: 100px;">提交</button>
					</form>
					
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import jsonarr from '@/static/json/merchant.json'
	import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue'
	export default {
		components: {//vue2需要注册一下
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
				status_m:'',
				poupbj:'',
				textareaval:'',
				none:'',
				tel:'',
				name:'',
				url:'',
				trade:'',
				posi:'',
				id:''
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
			openpoup(index,tel,name,url,trade,posi,id) {
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持         
				//['top','left','bottom','right','center']
				console.log(index,tel,name,url,trade,posi,id)
				this.id = id
				this.tel = tel
				this.name = name
				this.url = url
				this.trade = trade
				this.posi = posi
				this.$refs.popup.open('center') //中间弹出
				if(index=='FALSE'){
					this.poupbj = 'https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/sh_wait.png'
					this.none = 'normal'
				}else{
					this.poupbj = 'https://232r34t825.zicp.fun/ftpData/tmp/dp/cj/cj/sh_pass.png'
					this.none = 'none'
				}
			},
			confirm(){
				this.$refs.popup.close()
				console.log('标签绑定的ID：'+this.id)
				var newjsonarr = []
				var jsonarr = this.jsonarr;
				for(var i = 0 ; i < jsonarr.length ; i ++ ){
					if(jsonarr[i].id == this.id){
						jsonarr[i].status = "ture"
					}
				}
				this.jsonarr = jsonarr
				console.log(jsonarr)
				this.jsonarrfun()
				uni.showToast({
					title:'提交通过',
					icon:'success',
					duration:2000
				})
			},
			noconfirm(){
				this.$refs.nopopup.open('center')
			},
			close_confirm(){
				this.$refs.popup.close()
			},
			submit(event){
				event.preventDefault(); // 阻止表单默认提交行为
				console.log(this.textareaval)
				uni.showToast({
					title:'原因已发送',
					icon:'success',
					duration:2000
				})
				this.$refs.nopopup.close()
				this.$refs.popup.close()
			},
			jsonarrfun(){
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