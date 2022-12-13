<template>
	<div style="height: 100vh;background:rgba(51,43,90);width:100%;position:relative;float:left">
		<br> <br>
		<label style="font-size:20px;color:white;font-family: '微软雅黑';margin-left:25px">动物爱好者平台</label>
		<div style="margin:20px;margin-top:15px;width:90%;background-color: rgba(38,32,70);height:50px">
			<i class="el-icon-user-solid" style="margin-left:8px;font-size:23px;color:white;margin-top: 12px;position:relative;float:left;">
				<label style="font-size:16px">{{islogin}}</label>
			</i>
			<el-button v-if="login" native-type="button" @click="open" type="primary" size="small" style="width:80px;margin-top: 8px;position:relative;float:right;margin-right: 8px;">登录</el-button>
			<el-button v-else native-type="button" @click="exitLogin" type="danger" size="small" style="width:80px;margin-top: 8px;position:relative;float:right;margin-right: 8px;">退出登录</el-button>
			<el-button @click="dialogFormVisible = true" native-type="button" v-show='login' type="success" size="small" style="width:80px;margin-top: 8px;position:relative;float:right;margin-right: 8px;">注册</el-button>

			<el-dialog title="注册" :visible.sync="dialogFormVisible">
				<el-form :model="form">
					<el-form-item :label-width="formLabelWidth">
						<el-input placeholder="请输入昵称" v-model="form.name" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item :label-width="formLabelWidth">
						<el-input placeholder="请输入用户名" v-model="form.user" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item :label-width="formLabelWidth">
						<el-input placeholder="请输入密码" v-model="form.pass" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item :label-width="formLabelWidth">
						<el-input placeholder="请输入年龄" v-model="form.age" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item :label-width="formLabelWidth">
						<el-input placeholder="请输入电话" v-model="form.tel" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item :label-width="formLabelWidth">
						<el-select v-model="form.sex" placeholder="请选择性别">
							<el-option label="男" value="男"></el-option>
							<el-option label="女" value="女"></el-option>
						</el-select>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogFormVisible = false">取 消</el-button>
					<el-button type="primary" @click="registe">注 册</el-button>
				</div>
			</el-dialog>
		</div>
		<div style="margin:20px;margin-top:15px;width:90%;background-color: rgba(38,32,70);height:70px;">
			<i class="el-icon-s-home" style="margin-left:8px;font-size:40px;color:white;margin-top: 12px;position:relative;float:left;">
			</i>
			<br>
			<div style="margin-left: 60px;">
				<label style="font-size:12px;color:#999999;">当前位置：<label style="color:white;font-size: 13px;">苏州市</label></label>
				<br>
				<label style="font-size:12px;color:#999999;">
					 粉丝数:
					<label style="font-size:13px;color:#FF0000;">{{love}}</label> &nbsp;&nbsp;关注数:
				<label style="font-size:13px;color:#00BFFF;">{{post}}</label> &nbsp;&nbsp;附近宠物数:
				<label style="font-size:13px;color:#42B983;">8</label>
				</label>
				<el-popover placement="right" width="300" trigger="click">
					<el-card class="box-card" style="text-align: center;">
						<label style="font-size:15px">昵称:卡爸奥里给</label><br>
						<label style="font-size:15px;margin-top: 200px;">年龄:20</label><br>
						<label style="font-size:15px">所在地:江苏苏州</label><br>
						<label style="font-size:15px">宠物数量:20</label><br>
						<label style="font-size:15px">粉丝数量:20</label><br>
						<label style="font-size:15px">关注数:15</label><br>
						<label style="font-size:15px">性别:男</label><br>
						<label style="font-size:15px">注册时间:2022-9-24</label><br>
					</el-card>
					<el-button slot="reference" size="middle" style="position:relative;float:right;margin-right:10px;top:-20px" icon="el-icon-plus" circle></el-button>

				</el-popover>
			</div>
		</div>
		<div style="margin:20px;margin-top:15px;width:90%;">
			<el-button type="primary" @click="buy" style="width:59%;height:80px;margin-left:0px">宠物购买</el-button>
			<el-button type="success" @click="dis" style="width:39%;height:80px;margin-left:5px">宠物识别</el-button>
			<br>
			<el-button type="warning" @click="sy" style="width:29%;height:80px;margin-top: 5px;margin-left:0px">饲养攻略</el-button>
			<el-button type="primary" @click="ley" style="width:69%;height:80px;margin-top: 5px;margin-left:5px">爱宠乐园</el-button>
		</div>
		<div style="margin:20px;margin-top:50px;width:90%;" id="indiviual">
			<el-button type="success" @click="updateuser" style="width:39%;height:80px;margin-left:0px">更新数据</el-button>
			<el-button type="danger" @click="rz" style="width:59%;height:80px;margin-left:5px">宠物认证</el-button>
			<br>
			<el-button type="warning" @click="gwc" style="width:29%;height:80px;margin-top: 5px;margin-left:0px">购物车</el-button>
			<el-button type="primary" @click="city0" style="width:29%;height:80px;margin-left:5px">附近宠物</el-button>
			<el-button type="success" @click="back" style="width:39%;height:80px;margin-left:5px">回到首页</el-button>
			<br>
		</div>
	</div>
</template>

<script>
	import { login, getUserInfo, updateCity, register, logout} from '@/service/user'
	import axios from 'axios';
	import { localSet } from '@/until/index'
	import { mapGetters, mapMutations } from 'vuex'
	export default {
		data() {
			return {
				form: {
					name: '',
					user: '',
					pass: '',
					age: '',
					sex: '',
					tel:''
				},
				formLabelWidth: 100,
				post: '0',
				love: '0',
				sta: 'success',
				login: true,
				loginstatus: 0,
				islogin: '你还没有登录',
				city: '',
				cheap: false,
				value: true,
				radio: '1',
				dialogFormVisible: false,
				username: '123',
				password: '',
				src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
			}
		},
		methods: {
			...mapMutations([
				'setUser'
			]),
			bAction() {
				this.$bus.$emit('brotherEvent', '')
			},
			gwc() {
				this.$router.push({
					path: '/gwc',
					query: {}
				})
			},
			city0() {
				this.$router.push({
					path: '/city',
					query: {}
				})
			},
			rz() {
				this.$router.push({
					path: '/rz',
					query: {}
				})
			},
			updateuser() {
				this.$router.push({
					path: '/userdata',
					query: {}
				})
			},
			ley() {
				this.$router.push({
					path: '/ley',
					query: {}
				})
			},
			dis() {
				this.$router.push({
					path: '/dis',
					query: {}
				})
			},
			buy() {
				this.$router.push({
					path: '/buy',
					query: {}
				})
			},
			sy() {
				this.$router.push({
					path: '/sy',
					query: {}
				})
			},
			back() {
				this.$router.push({
					path: '/main',
					query: {}
				})
			},
			async exitLogin() {
				const {
						data,
						resultCode
				}=await logout()
				location.reload()
			},
			async registe() {
				this.dialogFormVisible = false;
				const {
						data,
						resultCode
				}=await register({
						user: this.form.user,
						pass: this.form.pass,
						age: this.form.age,
						name: this.form.name,
						sex: this.form.sex,
						tel: this.form.tel
				})
				if(resultCode==200){
					localSet('token', data.header+" "+data.token)
					this.$message({
						type: 'success',
						message: '登录成功!'
					});
					location.reload();
				}

			},
			showPosition(position) {
				this.$axios.get('/reverse_geocoding/v3', {
					params: {
						ak: 'kiwOZ9idP9w5AmHzqjXIHi8HYc15sIR6',
						output: 'json',
						coordtype: 'wgs84ll',
						location: position.coords.latitude + ',' + position.coords.longitude
					}
				}).then(res => {
					this.$bus.$emit('brotherEvent', res.data.result.addressComponent.city)
					this.changeCity(res.data.result.addressComponent.city)
					this.city = res.data.result.addressComponent.province + res.data.result.addressComponent.city
				})

				console.log("Latitude: " + position.coords.latitude + " " + position.coords.longitude)
			},
			showError(error) {
				switch(error.code) {
					case error.PERMISSION_DENIED:
						x.innerHTML = '用户拒绝地理定位请求';
						break;
				}
			},
			async getInfo(){
				const {
						data,
						resultCode
					}=await getUserInfo()
				console.log(resultCode)
				this.setUser(data)
				console.log(data)
				if(resultCode==200){
					this.login = false;
					this.islogin = data['name']
					this.post = data['post'];
					this.love = data['lovernum'];
				}	
			},
			async changeCity(ct){
				const {
						data,
						resultCode
				}=await updateCity({city:ct})	
			},
			async logins(params){
				const {
						data,
						resultCode
					}=await login(params)
				if(resultCode==200){
					localSet('token', data.header+" "+data.token)
					this.$message({
						type: 'success',
						message: '登录成功!'
					});
					location.reload();
				}
			},
		    open() {
				this.display = 'none';
				this.$alert("<input type='text' id='username' class='el-input__inner' placeholder='请输入用户名'> <input type='password' id='password' style='margin-top:20px' class='el-input__inner' placeholder='请输入密码'>", '用户登录', {
					dangerouslyUseHTMLString: true,
					confirmButtonText: '登录',
					cancelButtonText: '取消',
					showConfirmButton: true,
					showCancelButton: true,
					center: true
				}).then(() => {
					var a = document.getElementById('username');
					var b = document.getElementById('password');
					this.username = a.value
					this.password = b.value
					this.logins({username:this.username,password:this.password})
				})
			},
		},
		async mounted() {
			if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
			} else {
				console.log("当前浏览器不支持地理定位");
			}
			this.getInfo()
		}
	}
</script>

<style scoped>
	#indiviual>button:nth-child(6) {
    background-color: rgba(154, 0, 255);
    border-color: rgba(154, 0, 255);
}
	@import url("//unpkg.com/element-ui@2.15.7/lib/theme-chalk/index.css");
	.img_card0 {
		width: 20%;
		height: 250px;
		float: left;
		margin-left: 4%;
		margin-bottom: 30px;
		text-align: center;
		box-shadow: 2px 3px 5px rgb(248, 248, 255);
	}
	
	.img_card_img {
		width: 100%;
		height: 200px;
		transition: all 0.4s;
	}
</style>