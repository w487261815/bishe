<template>
	<div>
		<div style="position:relative;float:left;margin-left:10px;width:61.2%">
			<div :style="{height:getHeight/2+40 + 'px',background:'rgba(51,43,90)',width:'100%',position:'relative',float:'left',left:'20px'}">
				<template>
					<div class="block">
						<el-carousel height="420px">
							<el-carousel-item v-for="item in 4" :key="item">
								<div class="block">
									<el-image :src="src"></el-image>
								</div>

							</el-carousel-item>
						</el-carousel>
					</div>
				</template>
			</div>
			<br>
			<div :style="{height:getHeight/2-60 + 'px',background:'rgba(51,43,90)',width:'46%',position:'relative',float:'left',left:'20px',top:'20px'}">
				<i class="el-icon-message-solid" style="font-size: 25px;color: #999999;margin:10px;">
				<label style="font-size: 20px;font-family: '微软雅黑';">最新宠物认证</label>
			</i>
				<ul style="position:relative;top:-15px">
					<li style="clear: both;" v-for="(item,index) in newrz">
						<div style="width:30%;margin-left: 20px;position:relative;float:left">
							<br>
							<img :src="'http://150.158.191.247:8088/image/'+item.img" style="width:100%;height:70px">
						</div>
						<div style="width:50%;margin-left: 2%;position:relative;float:left">
							<br>
							<label style="color:#D8D8D8;font-size: 10px;">姓名:{{item.name}}</label><br>
							<label style="color:#D8D8D8;font-size: 10px;">城市:{{item.city}}</label><br>
							<label style="color:#D8D8D8;font-size: 10px;">加入时间:{{item.identy}}</label><br>
						</div>

					</li>
				</ul>
			</div>
			<br>
			<div class="box2" :style="{height:getHeight/2-60 + 'px',background:'rgba(51,43,90)',width:'52%',position:'relative',float:'left',left:'20px',top:'20px'}">
				<div style="margin-top: 40px;margin-left: 30px;">
					<div style="width:50%;position:relative;float:left">
						<label style="color:#D8D8D8;font-size: 10px;">个人信息公开</label>
						<el-switch style="margin-left: 40px;" v-model="value" active-color="#13ce66" inactive-color="#ff4949">
						</el-switch>
						<br><br>
						<label style="color:#D8D8D8;font-size: 10px;">宠物信息公开</label>
						<el-switch style="margin-left: 40px;" v-model="value" active-color="#13ce66" inactive-color="#ff4949">
						</el-switch>
						<br><br>
						<label style="color:#D8D8D8;font-size: 10px;">获赞数量公开</label>
						<el-switch style="margin-left: 40px;" v-model="value" active-color="#13ce66" inactive-color="#ff4949">
						</el-switch>
					</div>
					<div style="width:50%;position:relative;float: right;">
						<label style="color:#D8D8D8;font-size: 10px;">地理位置公开</label>
						<el-switch style="margin-left: 40px;" v-model="value" active-color="#13ce66" inactive-color="#ff4949">
						</el-switch>
						<br><br>
						<label style="color:#D8D8D8;font-size: 10px;">宠物数量公开</label>
						<el-switch style="margin-left: 40px;" v-model="value" active-color="#13ce66" inactive-color="#ff4949">
						</el-switch>
						<br><br>
						<label style="color:#D8D8D8;font-size: 10px;">分数数量公开</label>
						<el-switch style="margin-left: 40px;" v-model="value" active-color="#13ce66" inactive-color="#ff4949">
						</el-switch>
					</div>
				</div>

				<div>
					<i class="el-icon-s-data" style="font-size: 20px;color:#999999;margin:20px;">
						<label style="font-size: 15px;font-family: '微软雅黑';">智能分析</label>
					</i>
					<br>
					<div style="width:48%;height:100px;position:relative;float:left" id='main'>

					</div>
					<div style="width:48%;height:100px;position:relative;float:left" id='main1'>

					</div>
				</div>
			</div>
		</div>

		<div class="box3" :style="{height:getHeight + 'px',width:'33.5%',position:'relative',float:'left'}">
			<div style="width:48%;height:27%;float:left;position:relative">
				<div style="background-color:rgba(51,43,90);width:100%;height:100%">
					<div style="text-align:center;">
						<label style="color: white;font-size: 20px;">明星宠物:哈士奇</label>
					</div>
					<br>
					<img src="http://rluy2ixw3.hn-bkt.clouddn.com/bishe/hasq7.jpg" style="width:100%;height:160px">
				</div>
				<div style="background-color:rgba(51,43,90);width:100%;height:100%;margin-top:5%">
					<div style="text-align:center;">
						<label style="color: white;font-size: 20px;">明星宠物:金毛</label>
					</div>
					<br>
					<img src="http://rluy2ixw3.hn-bkt.clouddn.com/bishe/jm2.jpg" style="width:100%;height:160px">
				</div>
			</div>
			<div style="width:48%;height:27%;float:left;position:relative;margin-left: 3%;">
				<div style="background-color:rgba(51,43,90);width:100%;height:100%">
					<div style="text-align:center;">
						<label style="color: white;font-size: 20px;">明星宠物:柯基</label>
					</div>
					<br>
					<img src="http://rluy2ixw3.hn-bkt.clouddn.com/bishe/keji1.jpg" style="width:100%;height:160px">
				</div>
				<div style="background-color:rgba(51,43,90);width:100%;height:100%;margin-top:5%">
					<div style="text-align:center;">
						<label style="color: white;font-size: 20px;">明星宠物:英短</label>
					</div>
					<br>
					<img src="http://rluy2ixw3.hn-bkt.clouddn.com/bishe/yd3.jpg" style="width:100%;height:160px">
				</div>
			</div>
			<div style="background-color:rgba(51,43,90);width:100%;height:42%;clear:both;margin-top: 442px;">
				<i class="el-icon-s-data" style="font-size: 20px;color: #999999;margin:20px;">
						<label style="font-size: 15px;font-family: '微软雅黑';">城市分布</label>
					</i>
				<br>
				<div style="width:100%;height:200px" id='main2'>
					dsa
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { shownewrz } from '@/service/cwrz'
	import * as echarts from 'echarts';
	export default {
		data() {
			return {
				newrz: [],
				sexnum: [],
				citynum: [],
				userToken: '',
				cheap: false,
				value: true,
				radio: '1',
				dialogFormVisible: false,
				username: '123',
				password: '',
				src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
			
			};
		},
		methods: {
			async getNewrz() {
				const {
					data,
					resultCode
				} = await shownewrz()
				console.log("dsadsa")
				if(resultCode == 200) {
					this.newrz = data;
				}
			}
		},
		computed: {
			getHeight: function() {
				return window.innerHeight
			}
		},
		mounted() {
			this.getNewrz()
			var myChart = echarts.init(document.getElementById('main'), 'dark');
			var myChart2 = echarts.init(document.getElementById('main2'), 'dark');
			var myChart3 = echarts.init(document.getElementById('main1'), 'dark');
			this.$Axios.get('http://150.158.191.247:8088/api/cwrz/showsexnum').then(res => {
				this.sexnum = res.data.data;
				console.log(this.sexnum[0].num)
				var option = {
					title: {
						left: 'left',
						top: 'left'
					},
					backgroundColor: 'rgba(51,43,90)',
					legend: { //标签
						orient: 'vertical',
						left: 'right',
						top: 'center',
						data: ['公', '母'],

						tooltip: {
							show: true
						},

					},
					grid: {
						x: '200',
						left: '30%',
						right: '40%',
						bottom: '30%',
						containLabel: true
					},
					series: [{
						type: 'pie',
						avoidLabelOverlap: false,
						label: {
							show: false,

							emphasis: {
								show: false
							}
						},
						labelLine: {
							show: false
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '30',
								fontWeight: 'bold'
							}
						},
						data: [{
								value: this.sexnum[0].num,
								name: '公'
							},
							{
								value: this.sexnum[1].num,
								name: '母'
							},
						],
						center: ['30%', '50%'],
						radius: ['60%', '70%']
					}]
				};
				myChart.setOption(option)
			})
			this.$Axios.get('http://150.158.191.247:8088/api/cwrz/showcitynum').then(res => {
				this.citynum = res.data.data;
				console.log(this.citynum[0]['num'])
				var option2 = {
					legend: { //标签
						orient: 'vertical',
						left: 'right',
						top: 'center',
						data: [this.citynum[0]['city'], this.citynum[1]['city'], this.citynum[2]['city'], this.citynum[3]['city'], this.citynum[4]['city']],
						tooltip: {
							show: true
						},

					},
					backgroundColor: 'rgba(51,43,90)',
					series: [{
						type: 'pie',
						data: [{
								value: this.citynum[0]['num'],
								name: this.citynum[0]['city']
							},
							{
								value: this.citynum[1]['num'],
								name: this.citynum[1]['city']
							},
							{
								value: this.citynum[2]['num'],
								name: this.citynum[2]['city']
							},
							{
								value: this.citynum[3]['num'],
								name: this.citynum[3]['city']
							},
							{
								value: this.citynum[4]['num'],
								name: this.citynum[4]['city']
							}
						],
						roseType: 'area'
					}]
				};
				myChart2.setOption(option2)
			})

			var option1 = {
				title: {
					left: 'left',
					top: 'left'
				},
				backgroundColor: 'rgba(51,43,90)',
				legend: { //标签
					orient: 'vertical',
					left: 'right',
					top: 'center',
					data: ['猫', '狗', '鸟'],

					tooltip: {
						show: true
					},

				},
				grid: {
					x: '200',
					left: '30%',
					right: '40%',
					bottom: '30%',
					containLabel: true
				},
				series: [{
					type: 'pie',
					avoidLabelOverlap: false,
					label: {
						show: false,

						emphasis: {
							show: false
						}
					},
					labelLine: {
						show: false
					},
					emphasis: {
						label: {
							show: true,
							fontSize: '30',
							fontWeight: 'bold'
						}
					},
					data: [{
							value: 95,
							name: '猫'
						},
						{
							value: 105,
							name: '狗'
						}, {
							value: 105,
							name: '鸟'
						},
					],
					center: ['30%', '50%'],
					radius: ['60%', '70%']
				}]
			};

			let currentIndex = -1;
			setInterval(function() {
				var dataLen = 5;
				// 取消之前高亮的图形
				myChart.dispatchAction({
					type: 'downplay',
					seriesIndex: 0,
					dataIndex: currentIndex
				});
				currentIndex = (currentIndex + 1) % dataLen;
				// 高亮当前图形
				myChart.dispatchAction({
					type: 'highlight',
					seriesIndex: 0,
					dataIndex: currentIndex
				});
				// 显示 tooltip
				myChart.dispatchAction({
					type: 'showTip',
					seriesIndex: 0,
					dataIndex: currentIndex
				});
			}, 1000);
			let currentIndex1 = -1;

			myChart3.setOption(option1)
			echarts.connect([myChart2, myChart3, myChart]); //连接起来
		}
	}
</script>

<style>
	@import url("//unpkg.com/element-ui@2.15.7/lib/theme-chalk/index.css");
	.good_card {
		width: 220px;
		background: rgba(51, 43, 90);
	}
	
	_content {
		width: 200px;
		height: 40px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	#indiviual>button:nth-child(6) {
		background-color: rgba(154, 0, 255);
		border-color: rgba(154, 0, 255);
	}
	
	.box2 {
		margin-left: 2%;
	}
	
	.box3 {
		margin-left: 50px;
	}
</style>