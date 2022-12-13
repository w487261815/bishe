
<template>
	<div>
		<div style="background:rgba(51,43,90);height:730px;margin: 15px 30px 0 30px;">
			<div style="width:350px;height:350px;margin: 10px;float:left;position:relative">
				<img style="width: 350px; height: 350px;" :src="'http://150.158.191.247:8088/image/'+andata.img" fit="fit"></img>
				<div>
					<ul style="margin-top: 10px;">
						<li style="float:left;margin-right: 10px;">
							<img style="width: 60px; height:60px;" :src="'http://150.158.191.247:8088/image/'+andata.img" fit="fit"></img>
						</li>
						<li style="float:left;margin-right: 10px;">
							<img style="width: 60px; height:60px;" :src="'http://150.158.191.247:8088/image/'+andata.img" fit="fit"></img>
						</li>
						<li style="float:left;margin-right: 10px;">
							<img style="width: 60px; height:60px;" :src="'http://150.158.191.247:8088/image/'+andata.img" fit="fit"></img>
						</li>
						<li style="float:left;margin-right: 10px;">
							<img style="width: 60px; height:60px;" :src="'http://150.158.191.247:8088/image/'+andata.img" fit="fit"></img>
						</li>
						<li style="float:left;margin-right: 10px;">
							<img style="width: 60px; height:60px;" :src="'http://150.158.191.247:8088/image/'+andata.img" fit="fit"></img>
						</li>
					</ul>
					<br>
				</div>
				<div style="margin-top: 70px;">

				</div>
			</div>
			<div style="float:left;position:relative;margin-left: 10px;width:690px;">
				<div style="text-align: center;margin-top: 10px;">
					<label style="color: white;font-size: 20px;">{{andata.content}}</label>
				</div>
				<div style="height:50px;line-height: 50px;margin-left: 40px;">
					<label style="margin-left: 10px;color: white;">价格</label>
					<label style="font-size: 25px;color: orange;margin-left: 50px;">￥{{andata.money}}.00</label>
				</div>
				<div style="margin-left: 40px;">
					<el-button type="success">查看同款</el-button>
					<el-button type="info" @click="openAddress">选择收货地址</el-button>
					<el-dialog title="提示" :visible.sync="dialogVisible" width="70%" :before-close="handleClose">
						<el-dialog width="30%" title="添加收货地址" :visible.sync="innerVisible" append-to-body>
							<el-form label-width="80px">
								<el-form-item label="收货人">
									<el-input v-model="Addaddress.name"></el-input>
								</el-form-item>
								<el-form-item label="电话">
									<el-input v-model="Addaddress.tel"></el-input>
								</el-form-item>
								<el-form-item label="详细地址">
									<el-input v-model="Addaddress.address"></el-input>
								</el-form-item>
								<el-form-item label="设为默认">
									<el-switch v-model="Addaddress.ismoren" active-color="#13ce66" inactive-color="#ff4949">
									</el-switch>
								</el-form-item>
								<div style="text-align: center;">
									<el-button @click="innerVisible = false">取 消</el-button>
									<el-button type="primary" style="text-align: center;" @click="addAddresssubmit">保存</el-button>
								</div>
							</el-form>
						</el-dialog>
						<div>
							<ul v-for="(item, index) in address" :key="index">
								<li style="">
									<div style="float:left;width:10%;line-height: 100px;">
										<i v-if="item.ismoren=='true'" class="el-icon-s-home" style="font-size: 35px;"></i>
										<i v-else class="el-icon-user" style="font-size: 35px;"></i>
									</div>
									<div style="float:left;width:72%;margin-left: 2%;">
										<label><strong>{{item.name}}</strong></label>
										<label style="font-size: 10px;color: #999999;">{{item.tel}}</label>
										<el-tag v-if="item.ismoren=='true'" size="small">默认</el-tag>
										<br>
										<p>
											{{item.address}}
										</p>
									</div>
									<div style="float:left;width:13%;line-height: 100px;margin-left: 3%;">

										<el-popover placement="top-start" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
											<p>请选择如下操作</p>
											<div style="text-align: right; margin: 0">
												<el-button type="danger" size="mini" @click="visible = false">编辑</el-button>
												<el-button type="primary" size="mini" @click="choiceMoren(item)">设为默认</el-button>
											</div>
											<el-button size="small" class="el-icon-edit" slot="reference"></el-button>
										</el-popover>
										<el-popover placement="top-start" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
											<p>确认删除吗？</p>
											<div style="text-align: right; margin: 0">
												<el-button type="danger" size="mini" @click="delAddress(item)">确认</el-button>
												<el-button type="primary" size="mini" @click="visible = false">取消</el-button>
											</div>
											<el-button size="small" class="el-icon-delete" slot="reference"></el-button>
										</el-popover>

									</div>
								</li>

							</ul>

						</div>
						<span slot="footer" class="dialog-footer">
   							 <el-button @click="dialogVisible = false">取 消</el-button>
   							 <el-button type="primary" @click="innerVisible = true">添加新的收货地址</el-button>
					  </span>
					</el-dialog>

					<label style="font-size: 15px;color:white;float:right;margin-right: 200px;margin-top: 10px;">当前人气({{andata.post}})</label>
				</div>
				<el-divider></el-divider>
				<div style="margin-left: 40px;">
					<label style="color: white;font-size: 15px;">宠物性别: <el-radio v-model="ansex" label="1">公</el-radio>
  					<el-radio v-model="ansex" label="2">母</el-radio></label>
					<br><br>
					<label style="color: white;font-size: 15px;">宠物品种: {{andata.type}}</label>
					<br><br>
					<label style="color: white;font-size: 15px;">出售人: {{andata.name}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电话{{andata.tel}}</label>
					<br><br>
					<label style="color: white;font-size: 15px;">年龄:{{andata.age}}</label>
					<br><br>
					<label style="color: white;font-size: 15px;">
						数量:
						<el-input-number v-model="num" size="mini" @change="numChange" :min="1" :max="2" label="描述文字"></el-input-number>
						件
					</label>
					<br><br>
					<el-button type="warning" @click="gm">立即购买</el-button>
					<el-button type="danger" @click="addgwc" style="width:200px">加入购物车</el-button>
				</div>
			</div>
			<div style="clear:both;margin-top: 50px;">
				<br>
				<label style="color: white;">宝贝推荐</label>
				<ul style="display: flex;margin-top: 0px!important;">
					<li  v-for="(i, index) in antj">
						<el-card class="img_tj" style="padding:0px;height:235px;margin: 20px;margin-right: 10px;width: 180px;background: rgba(51, 43, 90);" shadow="hover">
							<div @click="entertj(index)">
								<img :src="'http://150.158.191.247:8088/image/'+i.img" style="width:180px;height:180px">
								<div style="text-align: center;">
									<label style="color: white;font-size: 15px;">{{i.content}}</label><br>
									<label style="color: orangered;font-size: 15px;">￥{{i.money}}.00</label>
								</div>
							</div>
						</el-card>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import {showtj, showgood, addpost} from '@/service/goods'
	import {showaddress, changemoren, del, add} from '@/service/address'
	import {addlist} from '@/service/list'
	export default {
		data() {
			return {

				url: 'http://rluy2ixw3.hn-bkt.clouddn.com/bishe/keji1.jpg',
				count: 2,
				loading: false,
				ansex: '1',
				num: 1,
				vis1: false,
				andata: [],
				antj: [],
				dialogVisible: false,
				outerVisible: false,
				address: [],
				icon: [],
				innerVisible: false,
				Addaddress: {
					name: '',
					tel: '',
					address: '',
					ismoren: false,
				},
			};
		},
		methods: {
			async showGood(ids){
				const {
						data,
						resultCode
				}=await showgood({id:ids})
				this.andata = data[0]
				await addpost(data[0])
				
			},
			async showTj(){
				const {
						data,
						resultCode
				}=await showtj()
				this.antj=data
			},
			gm() {
				this.addList(1)
			},
			async addList(st){
				const {
					data,
					resultCode
				}=await addlist({
					status: st,
					productId: this.$route.query.goodsid
				})
				if(resultCode==200){
					this.$notify.success({
						title: '成功',
						message: st==0?"已加入购物车":"已加入订单"
					});
				}
				
			},
			async addgwc() {
				this.addList(0)
			},
			async delAddress(i) {
				console.log(i)
				const {
						data,
						resultCode
				}=await del({
					"adid":i.adid
				})
				if(resultCode==200){
					this.$notify.success({
						title: '成功',
						message: '删除成功'
					});
					this.showAddress()
				}
			},
			async choiceMoren(i) {
				console.log(i)
				const {
						data,
						resultCode
				}=await changemoren(i)
				if(resultCode==200){
					this.showAddress()
					this.$notify.success({
							title: '成功',
							message: '更改成功'
					});
				}
			},
			async addAddresssubmit() {
				const {
						data,
						resultCode
				}=await add({
							name: this.Addaddress.name,
							tel: this.Addaddress.tel,
							address: this.Addaddress.address,
							ismoren: this.Addaddress.ismoren,
						})
				if(resultCode==200){
					this.showAddress()
					this.$notify.success({
							title: '成功',
							message: '添加成功'
					});
				}
			},
			handleClose() {

			},
			async showAddress(){
				const {
						data,
						resultCode
				}=await showaddress()
				this.address = data
			},
			async openAddress() {
				this.dialogVisible = true;
				console.log("da")
				this.showAddress()
			},
			entertj(i) {
				console.log(this.antj[i]['id']);
				this.$router.push({
					path: '/goods',
					query: {
						goodsid: this.antj[i]['id']
					}
				})
				location.reload()
			},
			numChange() {

			},
		},
		computed: {

		},
		mounted() {
			this.showTj()
			this.showGood(this.$route.query.goodsid)
		}

	}
</script>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	
	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}
	
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	
	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
	
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
	
	.f1 {
		display: none;
	}
	
	.f2 {
		display: block;
	}
	
	.delete {
		display: none;
	}
</style>