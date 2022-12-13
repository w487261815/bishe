<template>
	<div id="app">
		<el-container style="height: 100vh !important;">
			<el-aside width="25%" style="height: 100vh;">
				<navi class="layout"></navi>
			</el-aside>
			<el-main style="width:75%;padding: 0px;">
				<router-view />
			</el-main>
		</el-container>
	</div>
</template>
<script>
	import navi from '@/components/navi.vue'
	export default {
		name: 'App',
		components: {
			navi,
		},
	}
</script>

<style>
	ul {
		list-style: none;
	}
	
	.img_tj .el-card__body {
		padding: 0px;
	}
	
	.good_card {
		width: 220px;
		background: rgba(51, 43, 90);
	}
	
	.avatar-uploader .el-upload {
		border: 0px;
	}
	
	::-webkit-scrollbar {
		display: none
	}
	
	.el-table .warning-row {
		background-image: linear-gradient(#FF9900, #FF3300);
		color: #ffeb7b;
		padding: .05rem 0;
		font-family: Gotham, "Helvetica Neue", Helvetica, Arial, "sans-serif";
		font-weight: bold;
	}
	
	.el-table .success-row {
		background-image: linear-gradient(rgba(107, 167, 251), #9966FF);
		color: #ffeb7b;
		padding: .05rem 0;
		font-family: Gotham, "Helvetica Neue", Helvetica, Arial, "sans-serif";
		font-weight: bold;
	}
	
	ul {
		padding: 0px !important;
	}
	
	.layout {
		min-height: 100vh;
		background-color: #ffffff;
	}
	
	.container {
		height: 100vh;
	}
	
	body {
		background-color: rgba(38, 32, 40);
		height: 100%;
		margin: 0px;
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
	
	.fire {
		margin: 30px;
		text-shadow: 0 0 5px #fff, 0 0 20px #fefcc9, 10px -10px 30px #feec85, -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e;
	}
	
	.neon {
		margin: 30px;
		text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #6AB5FF, 0 0 70px #6AB5FF, 0 0 80px #6AB5FF, 0 0 100px #6AB5FF, 0 0 150px #6AB5FF;
	}
</style>