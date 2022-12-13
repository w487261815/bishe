<template>
	<div>
		<el-card style="height:730px;width:30%;float:right;margin: 20px;position:relative;background: rgba(51, 43, 90);" shadow="hover">
			<div style="text-align: center;margin-top: 30px;">
				<el-upload  style="border-radius: 50%;border-width: 0px;" class="avatar-uploader" action="http://150.158.191.247:8088/api/common/upload" :show-file-list="false" :on-success="handleAvatarSuccess" :on-change="handleChange">
					<el-image :src="'http://150.158.191.247:8088/image/'+BaseData.imgSrc" v-if="BaseData.imgSrc" class="avatar" style="width: 100px; height: 100px;border-radius: 50%;" fit="fit"></el-image>
				</el-upload>
				<br><br>
				<label style="font-size: 30px;color:white">Hi,{{BaseData.name}}<a style="color:#00BFFF;font-size: 20px;" href="#" @click="dialogVisible = true">修改</a></label>

				<el-dialog title="修改名称" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
					<el-input v-model="newName" placeholder="请输入新名称"></el-input>
					<span slot="footer" class="dialog-footer">
   					 	<el-button @click="dialogVisible = false">取 消</el-button>
    					<el-button type="primary" @click="changeName">确 定</el-button>
				  	</span>
				</el-dialog>

				<br>
				<label style="font-size: 18px;color:white;">{{BaseData.tel}}</label>
				<div>
					<el-divider></el-divider>
					<label style="font-size: 30px;color:white">帮助中心</label>
				</div>
				<br>
				<el-button type="primary">密码忘记怎么办？</el-button>
				<br><br>
				<el-button type="success">遇到风险如何冻结？</el-button>
				<br><br>
				<el-button type="info">无法修改密码？</el-button>
				<br>
			</div>
		</el-card>
		<el-card style="position:absolute;width:45%;float:left;margin: 20px;margin-left: 50px;height:730px;background: rgba(51, 43, 90);" shadow="hover">
			<label style="font-size: 30px;color:white">设置新密码</label>
			<br><br>
			<label style="font-size: 18px;color:white;">用户名</label>
			<br>
			<el-input style="width:300px;margin-top: 10px;" :disabled="true" v-model="BaseData.username" placeholder="请输入内容"></el-input>
			<br><br>
			<label style="font-size: 18px;color:white">旧密码</label>
			<br>
			<el-input style="width:300px;margin-top: 10px;" v-model="oldpass" placeholder="请输入内容"></el-input>
			<br><br>
			<label style="font-size: 18px;color:white">新密码</label>
			<br>
			<el-input style="width:300px;margin-top: 10px;" v-model="newpass" placeholder="请输入内容"></el-input>
			<br><br>

			<el-button type="primary" @click="updatepass">确定修改</el-button>
		</el-card>
	</div>
</template>

<script>
	import { updatedata, changepass, updatename, updateImg} from '@/service/user'
	import { mapState, mapGetters, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				dialogVisible: false,
				userToken: '',
				input: '',
				count: 2,
				loading: false,
				_url: "",
				newName: '',
				imageUrl: 'http://rluy2ixw3.hn-bkt.clouddn.com/bishe/keji4.jpg',
				name: '',
				tel: '',
				user: '',
				oldpass: '',
				newpass: '',
				BaseData: '',
			};
		},
		computed: {
			...mapGetters([
				'userObj' // 新增修改收货地址
			]),
			...mapState([
				'userObj'
			])
		},
		methods: {
			async updatepass() {
				console.log(this.BaseData['username'])
				const {
					data,
					resultCode
				} = await changepass({
					username:this.BaseData['username'],
					newpass:this.newpass,
					oldpass:this.oldpass,
				})
				if(resultCode == 200) {
					this.$message({
						message: '操作成功',
						type: 'success'
					});
					location.reload()
				}
			},
			handleClose() {

			},
			async changeName() {
				this.BaseData = this.$store.state.userObj
				this.BaseData['name']=this.newName
				let params={
					data:"da",
					da:"ss"
				}
				console.log(this.BaseData)
				console.log(params)
				const {
					data,
					resultCode
				} = await updatename(this.BaseData)
				if(resultCode == 200) {
					this.$message({
						message: '操作成功',
						type: 'success'
					});
					location.reload()
				}
			},
			async handleAvatarSuccess(res, file) {
				console.log(res)
				this.BaseData = this.$store.state.userObj
				this.BaseData['imgSrc'] = res['message']
				console.log(this.BaseData)
				const {
					data,
					resultCode
				} = await updateImg(this.BaseData)
				if(resultCode == 200) {
					this.$message({
						message: '操作成功',
						type: 'success'
					});
					//location.reload()
				}
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
				console.log(file);
			},
			handleDownload(file) {
				console.log(file);
			},
			handleChange(file) {
				console.log(file)
				var files = file.raw;
				var fd = new FormData();
				fd.append("files", files);
				this.$Axios.post('/test', fd, {
					headers: {
						"token": this.userToken,
					},
					params: {
						token: this.userToken
					}
				}).then(res => {
					console.log(res);
				})
			},

		},
		mounted() {
			this.BaseData = this.$store.state.userObj
			console.log(this.BaseData)
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