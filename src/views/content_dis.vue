<template>
	<div>
		<div style="clear:both;float:right;background:rgba(51,43,90);height:760px;width:250px">
			<ul style="margin-top: 20px;margin-left:;">
				<el-card v-for="(item, index) in scdata" :key="index" style="width:85%;margin: 20px;height:150px;padding: 0px;" shadow="hover" class="good_card">
					<el-button @click="delsc(index)" style="position:absolute;margin-left: 90px;margin-top: 100px;z-index: 20;" type="danger" icon="el-icon-delete" circle></el-button>
					<el-button @click="showsc(index)" style="position:absolute;z-index: 20;margin-top: 100px;margin-left: 45px;" type="primary" icon="el-icon-search" circle></el-button>
					<el-image v-if="imageUrl" class="avatar" style="margin:0px;padding:0px;width: 175px; height: 115px" :src="'http://150.158.191.247:8088/image/'+item.img"></el-image>
				</el-card>

			</ul>
		</div>
		<div style="width:800px;float:left">
			<el-upload :headers="headerObj" style="margin-top:30px;margin-left: 50px;" class="avatar-uploader" action="http://150.158.191.247:8088/api/dis/upload" :show-file-list="false" :on-success="handleAvatarSuccess" :on-change="handleChange">
				<el-image v-if="imageUrl" class="avatar" style="width: 800px; height: 500px" :src="imageUrl"></el-image>
				<i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
	
			<div style="background:rgba(51,43,90);margin-left: 50px;margin-top: 30px;width:800px;height:175px">
				<label style="color: white;margin: 20px;font-size: 20px;">预测结果如下</label>
				<div style="margin-top: 30px;margin-left: 50px;">
					<ul>
						<li style="float:left;margin-left: 25px;" v-for="(item, index) in yucedata">
							<el-card style="width:100%;height:100px" shadow="hover" class="good_card">
								<label style="color: white;font-size: 15px;">{{item.name}}</label>
								<br>
								<label style="color: white;font-size: 15px;">概率:{{item.score}}</label>
							</el-card>

						</li>

						<li style="float:left;margin-left: 25px;">
							<br>
							<el-button @click="addsc" type="primary" style="margin-top: 10px;margin-left: 20px;" plain>添加收藏</el-button>
						</li>
					</ul>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import { localGet } from '@/until/index'
	import { showcwyc, addlist, dellist, showsc } from '@/service/cwyc'
	export default {
		data() {
			return {
				dialogImageUrl: '',
				dialogVisible: false,
				disabled: false,
				Visible: false,
				uploadcss: 'f2',
				_url: "",
				imageUrl: 'http://rluy2ixw3.hn-bkt.clouddn.com/bishe/keji4.jpg',
				yucedata: [],
				scdata: [],
				files: [],
				userId:'',
				headerObj:{
					Authorization:''
				}
			};
		},
		methods: {
			ss(){
				this.$forceUpdate();
			},
			async showss() {
				const {
						data,
						resultCode
				}=await showcwyc({uid:this.$store.state.userObj.uid})
				this.scdata = data
			},
			async delsc(i) {
				const {
						data,
						resultCode
				}=await dellist({
					id:this.scdata[i]['listid']
				})
				if(resultCode==200){
					this.$notify.success({
						title: '成功',
						message: "删除成功"
					});
					location.reload()
				}
			},
			async showsc(i) {
				console.log(this.scdata[i])
				const {
						data,
						resultCode,
						message
					}=await showsc(this.scdata[i])
				console.log(message)
				this.imageUrl = 'http://150.158.191.247:8088/image/'+this.scdata[i]['img']
				
				this.yucedata = JSON.parse(message).result.slice(0, 3)
				this.yucedata[0]['score'] = parseFloat(this.yucedata[0]['score']).toFixed(2);
				this.yucedata[1]['score'] = parseFloat(this.yucedata[1]['score']).toFixed(2);
				this.yucedata[2]['score'] = parseFloat(this.yucedata[2]['score']).toFixed(2);
			},
			async addsc() {
				if(this.imageUrl=='http://rluy2ixw3.hn-bkt.clouddn.com/bishe/keji4.jpg'){
					this.$message.error('请选择图片');
				}else{
					const {
						data,
						resultCode
					}=await addlist()
				if(resultCode==200){
					this.$notify.success({
						title: '成功',
						message: "添加成功"
					});
					location.reload()
				}
				}
			},
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
				this.yucedata = JSON.parse(res.message).result.slice(0, 3)
				this.yucedata[0]['score'] = parseFloat(this.yucedata[0]['score']).toFixed(2);
				this.yucedata[1]['score'] = parseFloat(this.yucedata[1]['score']).toFixed(2);
				his.yucedata[2]['score'] = parseFloat(this.yucedata[2]['score']).toFixed(2);
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
				this.$forceUpdate();
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
				console.log(file);
			},
			handleDownload(file) {
				this.$forceUpdate();
				console.log(file);
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
			handleChange(file) {
				this.$forceUpdate();
				this.$Axios.get('/showannimal', {
					params: {

					}
				}).then(res => {
					this.annimaldata = res.data.data
					console.log(res.data.data)
					this.getPage(1);
					if(this.annimaldata.length % 8 == 0) {
						this.total = this.annimaldata.length / 8 * 10 - 10;
					} else {
						this.total = this.annimaldata.length / 8 * 10;
					}

				})

				this.files = file.raw;
				var fd = new FormData();
				fd.append("files", this.files);
				this.$Axios.post('/test5', fd, {
					headers: {
						"token": this.userToken,
					},
					params: {
						token: this.userToken,
						pand: 0
					}
				}).then(res => {
					console.log(res.data['data'])
					this.yucedata = JSON.parse(res.data['data']).result.slice(0, 3)
					this.yucedata[0]['score'] = parseFloat(this.yucedata[0]['score']).toFixed(2);
					this.yucedata[1]['score'] = parseFloat(this.yucedata[1]['score']).toFixed(2);
					this.yucedata[2]['score'] = parseFloat(this.yucedata[2]['score']).toFixed(2);
					//console.log(JSON.stringify(res.data['data']));
				})
			},
		},
		computed: {
			getHeight: function() {
				return window.innerHeight
			},

		},
		mounted() {
			this.headerObj.Authorization=localGet('token') || ''
			this.showss();
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