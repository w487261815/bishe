<template>
	<div>
		<div class="infinite-list-wrapper" style="overflow:auto;position:relative;top:-20px;height:760px;margin-top: 30px;">
			<el-card style="width:90%;margin: 20px;margin-left: 50px;" shadow="hover" class="good_card">
				<el-button type="primary" @click="showdata(2)">查看热门</el-button>
				<el-button type="success" @click="showdata(1)">查看最新</el-button>
				<el-button type="info" @click="dialogVisible = true">我要发表</el-button>
				<el-input style="width:300px;margin-left: 200px;" placeholder="请输入内容" v-model="content" clearable>
				</el-input>
				<el-button type="warning" @click="showdata(3)">搜索</el-button>

				<el-dialog title="请注意您的言论" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
					<el-input v-model="title" placeholder="请输入标题" style="position:relative;top:-20px"></el-input><br>
					<el-input type="textarea" :rows="3" maxlength="50" placeholder="请输入内容" v-model="textarea">
					</el-input>
					<br>
					
					<el-upload :limit="3" :auto-upload="true" class="upload-demo" action="http://150.158.191.247:8088/api/common/upload" :on-change="handleChange" :file-list="fileList"  :on-success="handleAvatarSuccess">
						<el-button size="small" type="primary">上传图片</el-button>
						<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb,最多三张</div>
					</el-upload>

					<span slot="footer" class="dialog-footer">
   						 <el-button @click="dialogVisible = false">取 消</el-button>
    					 <el-button type="primary" @click="addcomment">发 表</el-button>
  					</span>
				</el-dialog>

			</el-card>
			<ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled" :infinite-scroll-delay="500" :infinite-scroll-immediate="false">
				<li v-for="i in count" class="list-item">
					<el-card style="width:90%;margin: 20px;margin-left: 50px;" shadow="hover" class="good_card">
						<div style="float:left">
							<el-image style="width: 50px; height: 50px;border-radius: 50%;" :src="'http://150.158.191.247:8088/image/'+listData[i-1].img" fit="fit"></el-image>
						</div>
						<div style="float:left;margin-left: 20px;">
							<label style="color: white;">{{listData[i-1].title}}</label><br>
							<label style="color: #999999;font-size: 12px;">{{listData[i-1].name}}&nbsp;&nbsp;&nbsp;&nbsp;{{listData[i-1].time}}</label>
							<p style="color: white;font-size: 15px;">{{listData[i-1].content}}</p>
							<el-image v-if="listData[i-1].imgSrc!='nu'" style="width: 120px; height: 120px;" :src="'http://150.158.191.247:8088/image/'+listData[i-1].imgSrc" fit="fit"></el-image>
							<el-image v-if="listData[i-1].imgSrc1!='nu'" style="width: 120px; height: 120px;" :src="'http://150.158.191.247:8088/image/'+listData[i-1].imgSrc1" fit="fit"></el-image>
							<el-image v-if="listData[i-1].imgSrc2!='nu'" style="width: 120px; height: 120px;" :src="'http://150.158.191.247:8088/image/'+listData[i-1].imgSrc2" fit="fit"></el-image>
							<br>
						</div>
						<div style="text-align: center;width:100%;float:right">
							<el-button size="small" type="primary" icon="el-icon-edit" circle></el-button>
							<el-button @click="post(listData[i-1])" size="small" style="margin-left: 20px;" type="primary" icon="el-icon-thumb" circle></el-button><label style="color:#999999;font-size: 15px;">{{listData[i-1].post}}</label>​
						</div>
					</el-card>
				</li>
			</ul>
			<div style="text-align: center;">
				<p v-if="loading" style="color: white;font-size: 20px;">加载中...</p>
				<p v-if="noMore" style="color: white;font-size: 20px;">没有更多了</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { showacly, addpost, addlist } from '@/service/acly'
	import { uploadImg} from '@/service/common'
	export default {
		data() {
			return {
				count: 0,
				loading: false,
				noMore: false,
				url: '',
				content: '',
				listData: [],
				num0: 0,
				dialogVisible: false,
				textarea: '',
				fileList: [],
				files: [],
				title: '',
				userToken: '',
				userid: '',
				configType: 0,
				imgSrc:[],

			};
		},
		methods: {
			async post(i) {
				console.log(i)
				const {
					data,
					resultCode
				} = await addpost({
					uid:i.uid,
					comid:i.id
				})
				if(resultCode == 200)
					i['post'] = i['post'] + 1;
			},
			async addcomment() {
				let params={
					content: this.textarea,
					title: this.title,
					imgSrc: this.imgSrc[0]==undefined?'nu':this.imgSrc[0],
					imgSrc1: this.imgSrc[1]==undefined?'nu':this.imgSrc[1],
					imgSrc2: this.imgSrc[2]==undefined?'nu':this.imgSrc[2],
				}
				const {
					data,
					resultCode
				} = await addlist(params)
				if(resultCode==200){
					this.$message({
       				   message: '发表成功',
       				   type: 'success'
      				  });
      				  location.reload()
				}
			},
			handleAvatarSuccess(res, file) {
				this.imgSrc.push(res.message)
     		},
			async handleChange(file, fileList) {
				
			},
			handleClose() {

			},
			async showAcly(ct) {
				console.log(ct)
				if(ct==undefined&&this.configType==3){
					return 
				}
				const {
					data,
					resultCode
				} = await showacly({
					ConfigType: this.configType,
					start: this.count,
					limit: 3,
					content: ct
				})
				this.listData = data
				if(data.length < 3) {
					this.loading = false
					this.noMore = true
					this.count = data.length
				} else {
					this.loading = true
					this.count = 3
					this.load()
					this.noMore = false
				}
			},
			showdata(pand) {
				this.configType = pand
				this.count = 0
				if(pand == 3) {
					this.showAcly(this.content)
				} else {
					this.showAcly()
				}

				this.loading = true
				this.noMore = false
			},
			async load() {
				if(this.count >= 3) {
					console.log("loading")
					console.log(this.count)
					const {
						data,
						resultCode
					} = await showacly({
						ConfigType: this.configType,
						start: this.count,
						limit: 3,
						content:this.configType==3?(this.content==undefined?'':this.content):''
					})
					if(this.count >= 3)
						this.loading = true
					if(data.length == 0) {
						this.noMore = true
						this.loading = false
					} else {
						for(let i = 0; i < data.length; i++) {
							this.listData.push(data[i])
						}
						console.log(this.listData)
						setTimeout(() => {
							this.count += data.length
							this.loading = false
						}, 2000)
					}
				}
			}
		},
		computed: {
			noMore() {
				return this.count >= this.num0 - 1
			},
			disabled() {
				return this.loading || this.noMore
			}
		},
		watch: {
			noMore(newName, oldName) {
				console.log("watch" + newName)
			},
		},
		mounted() {
			this.userid = this.$store.state.userObj['uid']
			this.showAcly()
		}

	}
</script>

<style>
	.good_card {
    width: 220px;
    background: rgba(51, 43, 90);
}
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