<template>
	<div>
		<el-card style="width:90%;margin: 20px;margin-left: 50px;height:400px" shadow="hover" class="good_card">
			<el-upload style="float:left" class="avatar-uploader" action="/api/addrz">
				<el-image v-if="imageUrl" class="avatar" style="width: 500px; height: 360px" :src="'http://150.158.191.247:8088/image/'+listdata[idx].img"></el-image>
			</el-upload>
			<div style="float:left;color: white;" class="fire">
				<div class="demo-input-suffix">
					<label>姓名：{{listdata[idx].name}}</label>
				</div><br>
				<div class="demo-input-suffix">
					性别：{{listdata[idx].sex}}
				</div><br>
				<div class="demo-input-suffix">
					地区：{{listdata[idx].city}}
				</div><br>
				<div class="demo-input-suffix">
					主人：{{listdata[idx].uname}}
				</div><br>
				<div class="demo-input-suffix">
					年龄：{{listdata[idx].age}}岁
				</div><br>
				<div class="demo-input-suffix">
					认证时间：{{listdata[idx].identy}}
				</div><br>
			</div>
		</el-card>
		<el-button type="primary" @click="redpage" icon="el-icon-arrow-left" style="position:absolute;margin-top: 120px;margin-left: 20px;"></el-button>
		<el-button type="primary" @click="addpage" icon="el-icon-arrow-right" style="position:absolute;margin-top: 120px;margin-left: 1060px;"></el-button>
		<ul style="margin-left: 50px;">
			<li style="float:left;margin-left: 30px;margin-top: 10px;" v-for="(item,index) in listdata">
				<el-card shadow="hover" class="good_card">
					<div @click="listda(index)">
						<div>
							<el-image style="width: 180px; height: 160px;" :src="'http://150.158.191.247:8088/image/'+item.img" fit="fit"></el-image>
						</div>
						<div style="height:80px">
							<label style="color: white;font-size: 13px;">认证时间:{{item.identy}}</label><br>
							<label style="color: white;font-size: 18px;">姓名:{{item.name}}</label><br>
							<label style="color: white;font-size: 18px;">年龄:{{item.age}}岁</label><br>
							<label style="color: white;font-size: 16px;">所在地:{{item.city}}</label><br>
						</div>
					</div>
				</el-card>
			</li>

		</ul>
	</div>
</template>

<script>
	import { showrz } from '@/service/cwrz'
	export default {
		data() {
			return {
				idx: 0,
				page: 1,
				maxpage: 1,
				minpage: 1,
				loading: false,
				imageUrl: 'http://rluy2ixw3.hn-bkt.clouddn.com/bishe/keji4.jpg',
				files: [],
				input2: '',
				city0: '',
				rzdata: [],
				listdata: [],
				showlist: [],
				city2: '',
			};
		},
		methods: {
			async redpage(i) {
				//this.page--
				const {
						data,
						resultCode
				}=await showrz({
					city:this.$store.state.userObj.city,
					start:this.page-1,
					limit:4
				})
				this.listdata = data
				if(resultCode==200){
					this.page--
				}
			},
			async addpage(i) {
				const {
						data,
						resultCode
				}=await showrz({
					city:this.$store.state.userObj.city,
					start:this.page+1,
					limit:4
				})
				this.listdata = data
				if(resultCode==200){
					this.page++
				}
			},
			listda(i) {
				console.log(this.listdata[i]);
				this.idx = i;
			},
			getCookie(cname) {
				var name = cname + "=";
				var ca = document.cookie.split(';');
				for(var i = 0; i < ca.length; i++) {
					var c = ca[i].trim();
					if(c.indexOf(name) == 0) return c.substring(name.length, c.length);
				}
				return "";
			},
			ff() {
				console.log("dsa")
			},
			async getrzlist() {
				this.city2 = this.$store.state.userObj.city
				const {
						data,
						resultCode
				}=await showrz({
					city:this.$store.state.userObj.city,
					start:this.page,
					limit:4
				})
				this.listdata = data
				console.log(this.rzdata)
			}
		},
		created() {

		},
		computed: {
			noMore() {
				return this.count >= 20
			},
			disabled() {
				return this.loading || this.noMore
			}
		},
		mounted() {
			
			this.getrzlist();
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
</style>