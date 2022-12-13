<template>
	<div>
		<div style="width:95%;float:left;margin-left: 30px;background:rgba(51,43,90);text-align: center;">
			<ul style="list-style:none;background:rgba(51,43,90);margin-left: 150px;">
				<li style="float:left">
					<el-image style="border-radius:50%;width: 50px; height: 50px" src="http://rluy2ixw3.hn-bkt.clouddn.com/bishe/hashiqi.jpg" :fit="fit"></el-image>
					<br>
					<label style="color:white">哈士奇</label>
				</li>
				<li style="float:left;margin-left: 20px;text-align: center;">
					<el-image style="border-radius:50%;width: 50px; height: 50px" src="http://rluy2ixw3.hn-bkt.clouddn.com/bishe/jinmao.jpg" :fit="fit"></el-image>
					<br>
					<label style="color:white">金毛</label>
				</li>
				<li style="float:left;margin-left: 20px;text-align: center;">
					<el-image style="border-radius:50%;width: 50px; height: 50px" src="http://rluy2ixw3.hn-bkt.clouddn.com/bishe/yingduan.jpg" :fit="fit"></el-image>
					<br>
					<label style="color:white">英短</label>
				</li>
				<li style="float:left;margin-left: 20px;text-align: center;">
					<el-image style="border-radius:50%;width: 50px; height: 50px" src="http://rluy2ixw3.hn-bkt.clouddn.com/bishe/labuladuo.jpg" :fit="fit"></el-image>
					<br>
					<label style="color:white">拉布拉多</label>
				</li>
				<li style="float:left;margin-left: 20px;text-align: center;">
					<el-image style="border-radius:50%;width: 50px; height: 50px" src="http://rluy2ixw3.hn-bkt.clouddn.com/bishe/bomei.jpg" :fit="fit"></el-image>
					<br>
					<label style="color:white">博美</label>
				</li>
				<li style="float:left;margin-left: 20px;text-align: center;">
					<el-image style="border-radius:50%;width: 50px; height: 50px" src="http://rluy2ixw3.hn-bkt.clouddn.com/bishe/zheer.jpg" :fit="fit"></el-image>
					<br>
					<label style="color:white">折耳猫</label>
				</li>
				<li style="float:left;margin-left: 20px;text-align: center;">
					<el-image style="border-radius:50%;width: 50px; height: 50px" src="http://rluy2ixw3.hn-bkt.clouddn.com/bishe/xianluo.jpg" :fit="fit"></el-image>
					<br>
					<label style="color:white">暹罗猫</label>
				</li>
				<li style="float:left;margin-left: 20px;text-align: center;">
					<el-image style="border-radius:50%;width: 50px; height: 50px" src="http://rluy2ixw3.hn-bkt.clouddn.com/bishe/keji.jpg" :fit="fit"></el-image>
					<br>
					<label style="color:white">柯基犬</label>
				</li>
				<li style="float:left;margin-left: 20px;text-align: center;">
					<el-image style="border-radius:50%;width: 50px; height: 50px" src="http://rluy2ixw3.hn-bkt.clouddn.com/bishe/caiquan.jpg" :fit="fit"></el-image>
					<br>
					<label style="color:white">柴犬</label>
				</li>
				<li style="float:left;margin-left: 20px;text-align: center;">
					<el-image style="border-radius:50%;width: 50px; height: 50px" src="http://rluy2ixw3.hn-bkt.clouddn.com/bishe/samoye.jpg" :fit="fit"></el-image>
					<br>
					<label style="color:white">萨摩耶</label>
				</li>
				<li style="float:left;margin-left: 20px;text-align: center;">
					<el-image style="border-radius:50%;width: 50px; height: 50px" src="http://rluy2ixw3.hn-bkt.clouddn.com/bishe/qiutian.jpg" :fit="fit"></el-image>
					<br>
					<label style="color:white">秋田犬</label>
				</li>

			</ul>
		</div>
		<div style="clear:both;margin-left: 50px;width:95%">
			<br>
			<ul style="list-style: none;" v-for="(item, index) in animal">
				<li style="float:left;margin-left: 30px;margin-top: 10px;">
					<el-card shadow="hover" class="good_card" style="text-align: center;">
						<div @click="enterGoods(index)">
							<div style="text-align: center;">
								<img style="width: 180px; height: 160px;" :src="'http://150.158.191.247:8088/image/'+item.img" ></img>
							</div>
							<div style="height:40px">
								<label style="color: white;font-size: 15px;">{{item.content}}</label><br>
							</div>
							<div>
								<label style="color: white;font-size: 18px;">￥{{item.money}}元</label><br>
								<label style="color: white;">出售者:{{item.name}}</label>
							</div>
						</div>
					</el-card>
				</li>
			</ul>
		</div>

		<el-pagination :current-page="current" @current-change="handleCurrentChange" style="clear:both;margin-top: 20px;margin-left: 40%;" :background="back" layout="prev, pager, next" :total="total">
		</el-pagination>
	</div>
</template>

<script>
	import { show} from '@/service/goods'
	export default {
		data() {
			return {
				back:1,
				innerVisible: false,
				radio11: '首页',
				annimaldata: [],
				animal: [],
				fit: 'fit',
				total: 50,
				userToken: '',
				dialogFormVisible: false,
				address: [],
				current:1,
				icon: [],
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				Addaddress: {
					name: '',
					tel: '',
					address: '',
					ismoren: false,
				},
				formLabelWidth: '120px'

			}
		},
		methods: {
			async showgoods(){
				const {
						data,
						resultCode
				}=await show({
					start:this.current,
					limit:8
				})
				this.animal=data.goodsData
				this.total=data.size/8*10
			},
			enterGoods(i) {
				console.log(this.animal[i]['id'])
				this.$router.push({path:'/goods',query: {goodsid:this.animal[i]['id']}})
			},
			handleCurrentChange(i) {
				this.current = i
				this.showgoods()
			}
		},
		computed: {

		},
		mounted() {
			this.showgoods()
		}

	}
</script>

<style>
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
	.el-card__body{
		padding:20px;
	}
</style>