<template>
	<div>
		<el-card style="width:90%;margin: 20px;margin-left: 50px;" shadow="hover" class="good_card">
			<el-button type="primary" @click="showall">查看全部</el-button>
			<el-button type="success" @click="showwfk">查看未付款</el-button>
			<el-button type="info" @click="showyfk">查看已付款</el-button>
			<el-button type="danger" @click="delall">批量删除</el-button>
		</el-card>
		<div style="width:90%;margin-left: 50px;">
			<template>
				<el-table :row-class-name="tableRowClassName" ref="multipleTable" :data="listdata" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="55" v-model="multipleSelection[0]">
					</el-table-column>
					<el-table-column prop="img" label="商品图片" width="100">
						<template slot-scope="scope">
							<el-image style="width: 70px; height: 70px" :src="'http://150.158.191.247:8088/image/'+scope.row.img"></el-image>
						</template>
					</el-table-column>
					<el-table-column prop="content" label="商品介绍" width="280" style="font-size:10px">
					</el-table-column>
					<el-table-column prop="money" label="单价" width="80">
					</el-table-column>
					<el-table-column prop="img" label="数量" witdh="80">
						1
					</el-table-column>
					<el-table-column prop="money" label="小计" witdh="80">

					</el-table-column>
					<el-table-column prop="img" label="收货地址" witdh="80">
						<template slot-scope="scope">
							<el-popover placement="top-start" title="标题" width="200" trigger="hover" :content="scope.row.address">
								<el-button slot="reference" icon="el-icon-search" circle></el-button>
							</el-popover>
						</template>

					</el-table-column>
					<el-table-column prop="img" label="操作" width="180">
						<template slot-scope="scope">
							<el-button type="success" @click="changesta(scope.row)" icon="el-icon-check" circle v-if="scope.row.status==0"></el-button>
							<el-button type="danger" @click="dellist(scope.row)" icon="el-icon-delete" circle></el-button>
						</template>
					</el-table-column>
				</el-table>
			</template>
		</div>
		<div style="margin-left: 150px;">
			<el-pagination :current-page="current" @current-change="handleCurrentChange" style="clear:both;margin-top: 20px;margin-left: 35%;" :background="false" layout="prev, pager, next" :total="total">
			</el-pagination>
		</div>
		
	</div>
</template>

<script>
import {showlist, dellist, changstatus} from '@/service/list'
	export default {
		data() {
			return {
				current:1,
				input: '',
				choiceall: "全选",
				allmoney: 9999,
				total: 50,
				tableData0: [],
				count: 2,
				loading: false,
				listdata: [],
				multipleSelection: [],
				tData: [],
				testData: [1, 2, 3, 4],
				status:'-1',
			};
		},
		methods: {
			delall() {
				let item=this.multipleSelection
				console.log(item)
				let ids=new Array()
				for(let i=0;i<item.length;i++){
					ids.push(Number(item[i].listid))
				}
				this.delList(ids)	
			},
			showall() {
				this.status='-1'
				this.current=1
				this.showList()
			},
			async delList(d){
				const {
						data,
						resultCode
				}=await dellist({
					ids:d
				})
				if(resultCode==200){
					this.$message({
        			  message: '删除成功',
       				  type: 'success'
     			   });
     			   location.reload()
				}
			},
			async showList(){
				const {
						data,
						resultCode
				}=await showlist({
					status:this.status,
					start:this.current,
					limit:5
				})
				this.listdata=data.gwcData
				this.total=data.size/5*10
				console.log(this.listdata)
				//this.antj=data
			},
			showyfk() {
				this.status='1'
				this.current=1
				this.showList()
			},
			showwfk() {
				this.status='0'
				this.current=1
				this.showList()
			},
			dellist(i) {
				console.log(typeof(i.listid))
				let ids = new Array()
				ids.push(Number(i.listid))
				ids.push(16)
				this.delList(ids)
			},
			async changesta(mess) {
				console.log(mess.listid)
				const {
						data,
						resultCode
				}=await changstatus({
					listid: mess.listid
				})
				if(resultCode==200){
					this.$message({
        			  message: '支付成功',
       				  type: 'success'
     			   });
     			   location.reload()
				}
			},
			handleSelectionChange(i) {
				this.multipleSelection = i
			},
			tableRowClassName({
				row,
				rowIndex
			}) {
				if(rowIndex % 2 == 0) {
					return 'warning-row';
				} else {
					return 'success-row';
				}
				return '';
			},
			handleCurrentChange(i) {
				this.current=i
				this.showList()
			}
		},
		mounted() {
			this.showList(0)
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