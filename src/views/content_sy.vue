<template>
	<div>
		<el-card style="width:90%;margin: 20px;margin-left: 50px;" shadow="hover" class="good_card">
			<el-collapse v-model="activeNames" @change="handleChange" style="font-size: 25px;">
				<el-collapse-item title="幼犬的初期饲养" name="1" style="font-size: 25px;">
					<div>刚买来的幼犬年龄基本在2-3个月左右，这个时间的狗狗刚刚开始认识这个世界，需要主人细心的教导和照顾。 这个时期的狗狗需要注意，由于它们刚刚断奶，对新食物需要一个适应过程，所以狗粮需要用温水泡软了以后再喂食哦。狗狗的不同时期都有针对该阶段的狗粮喂食，主人需要注意选择购买。 幼犬的肠胃还在发育，建议是少食多喂，一天四次左右为佳。等大一点就可以慢慢换成干狗粮喂食。 注意：该阶段不可以喂食人类的食物，不仅对狗狗脆弱的肠胃有刺激，一些小型的鸡骨头、鱼骨头甚至可能伤害到狗狗！
					</div>
				</el-collapse-item>
				<el-collapse-item title="驯养小建议" name="2">
					<div>3个月以后的狗狗发育基本成型，性格也开始显现，主人们可以开始训练它们开始定点便便，对环境做一个完全的认知。 同时狗狗需要带到宠物医院进行驱虫和打疫苗，因为这个阶段也是幼犬很容易染病的时期，只有打完狂犬疫苗的狗狗才可以放心洗澡和带出家门哦！ 注意：狗狗此时依然很脆弱，要记得时刻关注狗狗的状态！
					</div>
				</el-collapse-item>
				<el-collapse-item title="发育完全后的成犬饲养" name="3">
					<div>在安全健康地度过发育期以后，主人们就要开始考虑变换养育方式了哦。对于柔弱的幼犬，主人们往往都会悉心照料，但成年以后的狗狗是最有活力的时期，这个时期建议散养，多带狗狗出门运动，提高消化和代谢能力。 此时的狗狗要开始更换成年犬的狗粮，并且需要一些辅餐来保证营养的均衡，但是尽量不要喂食人类食物。还有就是不论什么时候狗狗都不能吃得太多哦，根据犬种的不同确定每餐合适的量是很有必要的。 需要注意的是，巧克力、葱、大蒜、韭菜、生鸡蛋、葡萄千万不可以喂给狗狗吃！也不要喂食含盐过高的食物和牛奶，前者容易造成狗狗掉毛，后者会让狗狗拉肚子。“馋不腻狗粮”低盐低油0添加，富含多种营养和膳食纤维，推荐作为狗狗的主食首选哦。

					</div>

				</el-collapse-item>
				<el-collapse-item title="狗狗的日常养护" name="4">
					<div>狗狗的被毛也是惹人喜欢的原因之一，但是在日常的喂养中也要注重护理，不然可能会出现掉毛的现象，某些犬种还有可能出现被毛褪色的问题。小编建议平时可以经常给狗狗顺毛，做一个梳理，保持营养均衡，同时也要注意不能太频繁地给狗狗洗澡，一到两周一次为佳，而且要使用狗狗专用的洗浴用品。</div>
				</el-collapse-item>
			</el-collapse>
		</el-card>
		<ul style="margin-left: 50px;">
				<li style="float:left;margin-left: 30px;margin-top: 10px;">
					<el-card shadow="hover" class="good_card">
						<div>
							<el-image style="width: 180px; height: 160px;" src="http://rluy2ixw3.hn-bkt.clouddn.com/bishe/1.jpg" :fit="fit"></el-image>
						</div>
						<div style="height:40px">
							<label style="color: white;font-size: 15px;">狗粮1</label><br>
						</div>
						<div>
							<label style="color: white;font-size: 18px;">￥20元</label><br>
							<label style="color: white;">出售者:宠物爱好者</label>
						</div>
					</el-card>
				</li>
				<li style="float:left;margin-left: 30px;margin-top: 10px;">
					<el-card shadow="hover" class="good_card">
						<div>
							<el-image style="width: 180px; height: 160px;" src="http://rluy2ixw3.hn-bkt.clouddn.com/bishe/2.jpg" :fit="fit"></el-image>
						</div>
						<div style="height:40px">
							<label style="color: white;font-size: 15px;">狗粮2</label><br>
						</div>
						<div>
							<label style="color: white;font-size: 18px;">￥22元</label><br>
							<label style="color: white;">出售者:宠物爱好者</label>
						</div>
					</el-card>
				</li>
				<li style="float:left;margin-left: 30px;margin-top: 10px;">
					<el-card shadow="hover" class="good_card">
						<div>
							<el-image style="width: 180px; height: 160px;" src="http://rluy2ixw3.hn-bkt.clouddn.com/bishe/3.jpg" :fit="fit"></el-image>
						</div>
						<div style="height:40px">
							<label style="color: white;font-size: 15px;">狗粮1</label><br>
						</div>
						<div>
							<label style="color: white;font-size: 18px;">￥18元</label><br>
							<label style="color: white;">出售者:宠物爱好者</label>
						</div>
					</el-card>
				</li>
				<li style="float:left;margin-left: 30px;margin-top: 10px;">
					<el-card shadow="hover" class="good_card">
						<div>
							<el-image style="width: 180px; height: 160px;" src="http://rluy2ixw3.hn-bkt.clouddn.com/bishe/4.jpg" :fit="fit"></el-image>
						</div>
						<div style="height:40px">
							<label style="color: white;font-size: 15px;">猫粮1</label><br>
						</div>
						<div>
							<label style="color: white;font-size: 18px;">￥25元</label><br>
							<label style="color: white;">出售者:宠物爱好者</label>
						</div>
					</el-card>
				</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				count: 2,
				loading: false
			};
		},
		methods: {
			handleChange(){}
		},
		mounted() {
			
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