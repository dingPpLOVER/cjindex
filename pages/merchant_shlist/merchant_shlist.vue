<template>
	<view class="box">
		<view class="top">
			<view class="top_b">
				<view class="top_bcon">
					<view class="top_bconsin">
						<view class="topvalue">222</view>
						<view class="toptext">商户总计</view>
					</view>
					<view class="top_bconsin">
						<view class="topvalue">35</view>
						<view class="toptext">活动总数</view>
					</view>
					<view class="top_bconsin">
						<view class="topvalue">50%</view>
						<view class="toptext">活动比例</view>
					</view>
				</view>
			</view>
		</view>
		<view class="botview" :style="{'height':botviewL}">
			<view class="list_top">
				<view class="list_topsin1">排名</view>
				<view class="list_topsin2">活动次数</view>
				<view class="list_topsin3">所属行业</view>
				<view class="list_topsin4">操作</view>
			</view>
			<view class="list_cont" :style="{'height':list_contH}">
				<view class="list_contsin" v-for="(item,index) in listarr" :key="index">
					<view class="list_topsin1">
						<view class="imgview">
							<image :src="item.image" class="img"></image>
						</view>
						<view class="circle" v-if="item.listnew<=3">{{item.listnew}}</view>
						<view class="name">{{item.name}}</view>
					</view>
					<view class="list_topsin2">{{item.actnum}}</view>
					<view class="list_topsin3">{{item.trade}}</view>
					<view class="list_topsin4">
						<view class="serach" @click="serch(index)">查看</view>
						<view class="delete" @click="delet(index,listarr)">删除</view>
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="nopopup" type="center">
			<view class="no_passview">
				<view>
					<view class="popup_title">商户基本信息</view>
					<view class="poupbj" >
						<image class="poupimg" :src="srcurl"></image>
						<view class="poupsin"><text class="poup_l">商户全称:</text><tex class="poup_r">{{name}}</tex></view>
						<view class="poupsin"><text class="poup_l">手机号:</text><tex class="poup_r">138****1234</tex></view>
						<view class="poupsin"><text class="poup_l">商户地址:</text><tex class="poup_r">xx街道xx号</tex></view>
						<view class="poupsin"><text class="poup_l">所属行业:</text><tex class="poup_r">{{trade}}</tex></view>
						<view class="poupsin"><text class="poup_l">所在城市:</text><tex class="poup_r">{{urli}}</tex></view>
						<view class="poupsin"><text class="poup_l">活动次数:</text><tex class="poup_r">{{num}}</tex></view>
						<view class="poupbut">
							<button @click="close_confirm" class="btn" style="margin-left:60px;">关闭</button>
						</view>
					</view>
					
				</view>
			</view>
		</uni-popup>
		
	</view>
</template>

<script>
	import listjson from '@/static/json/shlist.json'
	import uniPopup from '@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue'
	export default {
		data(){
			return{
				botviewL:'',
				list_contH:'',
				listarr:[],
				listjsonarr:listjson,
				srcurl:'',
				name:'',
				trade:'',
				num:'',
				urli:''
				
			}
		},
		methods:{
			getDivHeight() {
				// 创建选择器对象
				const query = uni.createSelectorQuery().in(this);
				// 选择div
				query.select('.box').boundingClientRect(data => {
					// data中包含了元素的尺寸信息，如宽、高等
					if (data) {
						this.botviewL = data.height - 170 +'px'
						this.list_contH = data.height - 190  +'px'
						console.log(this.botviewL,this.list_contH)
					}
				}).exec(); // 执行选择器查询
			},
			serch(index){
				this.$refs.nopopup.open('center')
				var listarr = this.listarr
				this.srcurl = listarr[index].image
				this.name = listarr[index].name
				this.trade = listarr[index].trade
				this.num = listarr[index].actnum
				this.urli = listarr[index].urli
			},
			close_confirm(){
				this.$refs.nopopup.close()
			},
			delet(index,listarr){
				var this_ = this
				uni.showModal({
					title: '提示',
					content: '确定删除该商户的所有信息吗',
					confirmText:'确定',
					cancelText:'返回',
					success: function(res) {
						if (res.confirm) {
							listarr.splice(index,1)
							var listjson = listarr
							this_.listarrf(listjson)
							
						} else if (res.cancel) {
							uni.navigateBack()
						}
					}
				});
				
			},
			listarrf(listjson){
				listjson.sort(function(a,b){
					return  b.actnum - a.actnum 
				})
				console.log(listjson)
				var newlist = []
				for(var i = 0 ; i < listjson.length ; i ++ ){
					var obj ={}
					obj["listnew"] = i+1
					obj["actnum"] = listjson[i].actnum
					obj["name"] = listjson[i].name
					obj["trade"] = listjson[i].trade
					obj["image"] = listjson[i].image
					obj["urli"] = listjson[i].urli
					newlist.push(obj)
				}
				console.log(newlist)
				this.listarr = newlist
			}
		},
		mounted() {
			this.getDivHeight()
			var listjson = this.listjsonarr
			this.listarrf(listjson)
		}
	}
</script>

<style>
	@import "../../static/css/shlist.css";
	
</style>