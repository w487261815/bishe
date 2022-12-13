<template>
	<div>
		<el-card style="width:90%;margin: 20px;margin-left: 50px;height:400px" shadow="hover" class="good_card">
			<el-upload style="float:left" class="avatar-uploader" action="http://150.158.191.247:8088/api/common/upload" :show-file-list="false" :on-success="handleAvatarSuccess" :on-change="handleChange">
				<el-image v-if="imageUrl" class="avatar" style="width: 500px; height: 360px" :src="imageUrl"></el-image>
				<i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<div style="float:left;color: white;" class="fire">
				<div class="demo-input-suffix">
					<el-input placeholder="请输入姓名" prefix-icon="el-icon-s-opportunity" v-model="name">
					</el-input>
				</div><br>
				<div class="demo-input-suffix">
					性别：
					<el-select v-model="sex0" placeholder="请选择性别">
						<el-option v-for="item in sex" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div><br>
				<div class="demo-input-suffix">
					地区：
					<el-select v-model="city0" placeholder="请选择地区">
						<el-option v-for="item in city" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div><br>
				<div class="demo-input-suffix">
					年龄：
					<el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>

				</div><br>
				<el-button type="primary" style="margin-left: 100px;" @click="addrz">确定认证</el-button>
			</div>
		</el-card>
		<ul style="margin-left: 50px;">
			<li style="float:left;margin-left: 30px;margin-top: 10px;" v-for="item in rzdata">
				<el-card shadow="hover" class="good_card">
					<div>
						<el-image style="width: 180px; height: 160px;" :src="'http://150.158.191.247:8088/image/'+item.img" fit="fit"></el-image>
					</div>
					<div style="height:80px">
						<label style="color: white;font-size: 13px;">认证时间:{{item.identy}}</label><br>
						<label style="color: white;font-size: 18px;">姓名:{{item.name}}</label><br>
						<label style="color: white;font-size: 18px;">年龄:{{item.age}}岁</label><br>
						<label style="color: white;font-size: 16px;">所在地:{{item.city}}</label><br>
					</div>
				</el-card>
			</li>

		</ul>
	</div>
</template>

<script>
	import { showcwrz, addcwrz } from '@/service/cwrz'
	export default {
		data() {
			return {
				sex0: '',
				name: '',
				num: 1,
				count: 2,
				loading: false,
				imageUrl: 'http://rluy2ixw3.hn-bkt.clouddn.com/bishe/keji4.jpg',
				uploadImg:'',
				files: [],
				input2: '',
				sex: [{
					value: '公',
					label: '公'
				}, {
					value: '母',
					label: '母'
				}],
				city0: '',
				rzdata: [],
				city: [{
					value: '徐州',
					label: '徐州'
				}, {
					value: '连云港',
					label: '连云港'
				}, {
					value: '宿迁市',
					label: '宿迁市'
				}, {
					value: '淮安市',
					label: '淮安市'
				}, {
					value: '盐城',
					label: '盐城'
				}, {
					value: '扬州市',
					label: '扬州市'
				}, {
					value: '泰州市',
					label: '泰州市'
				}, {
					value: '南京市',
					label: '南京市'
				}, {
					value: '镇江',
					label: '镇江'
				}, {
					value: '南通市',
					label: '南通市'
				}, {
					value: '常州市',
					label: '常州市'
				}, {
					value: '无锡市',
					label: '无锡市'
				}, {
					value: '苏州市',
					label: '苏州市'
				}],
			};
		},
		methods: {
			async addrz() {
				let params={
					name: this.name,
					sex: this.sex0,
					age: this.num,
					city: this.city0,
					img: this.uploadImg,
					uid:this.$store.state.userObj.uid
				}
				const {
						data,
						resultCode
				}=await addcwrz(params)
				if(resultCode==200){
					this.$notify.success({
							title: '成功',
							message: "添加成功"
						});
						this.getrzlist();
				}
			},
			handleChange(file) {
				this.files = file.raw;
			},
			handleAvatarSuccess(res, file) {
				console.log(res)
				this.uploadImg=res.message
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if(!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if(!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
			ff() {
				console.log("dsa")
			},
			handleRemove(file) {
				console.log(file);
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			handleDownload(file) {
				console.log(file);
			},
			async getrzlist() {
				const {
						data,
						resultCode
				}=await showcwrz({uid:this.$store.state.userObj.uid})
				this.rzdata = data
			}
			
			
		},
		mounted() {
			//this.userToken = this.getCookie('check');
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