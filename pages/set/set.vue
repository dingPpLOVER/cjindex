<template>
	<div class="box">
		<div class="box_s">
			<div class="title">
				<div class="titlet">请设置抽奖规则</div>
				</div>
			<div class="content">
				<form >
					<div class="fontc">
						<div class="fontcsin" v-for="(item,index) in sty" :key="index" :style="{marginLeft:item.sty+'vw'}" >
							<input class="setfontinp" placeholder="请输入" placeholder-style="font-size:13px;"/>
						</div>
					</div>
					<div class="inputdiv">
						<input class="setinput" placeholder="给活动起个名字"/>
					</div>
					<div class="inputdiv">
						<input class="setinput" placeholder="设置默认抽奖次数"/>
					</div>
					<div class="inputdiv">
						<input class="setinput" placeholder="设置最多中奖人数"/>
					</div>
					<div class="inputdiv">
						<input class="setinput" placeholder="设置奖品"/>
					</div>
					<div class="inputdiv">
						<input class="setinput" placeholder="请选择开始时间"/>
					</div>
					<div class="inputdiv">
						<input class="setinput" placeholder="请选择结束时间"/>
					</div>
					<button class="btn">提交</button>
				</form>
				
			</div>
		</div>
	</div>
</template>

<script >
	import sty from '@/static/json/set.json'
	export default {
		data(){
			return {
				sty:sty
			}
		},
		mounted() {
			console.log(sty)
		}
	}
</script>

<style>
	@import url("../../static/css/set.css");
</style>