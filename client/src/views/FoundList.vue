<template>
<div class="fillContainer">
  <div>
    <el-form :inline="true" ref="add_data">
       <el-form-item class="btnRight">
          <el-button type="primary" size="small" icon="view" @click="handleAdd()">
            添加
          </el-button>
       </el-form-item>
    </el-form>
  </div>
  <div class="table_container">
<el-table
v-if="tableData.length > 0"
:data="tableData"
max-height="450"
border
style="width: 100%">
 <el-table-column
     type="index"
     label="序号"
     align='center'
     width="70">               
</el-table-column>
<el-table-column
      prop="date"
      label="创建时间"
      algin="center"
      width="250">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
<el-table-column
      prop="type"
      label="收支类型"
       algin="center"
      width="150">
    </el-table-column>
    <el-table-column
      prop="describe"
      label="收支描述"
       algin="center"
      width="180">
    </el-table-column>
    <el-table-column
      prop="income"
      label="收入"
       algin="center"
      width="170">
      <template slot-scope="scope">
        <span style="color: #00d053">{{ scope.row.income}}</span>
      </template>
    </el-table-column>
     <el-table-column
      prop="expend"
      label="支出"
       algin="center"
      width="170">
      <template slot-scope="scope">
        <span style="color: #00d053">{{ scope.row.expend}}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="cash"
      label="账户现金"
       algin="center"
      width="170">
      <template slot-scope="scope">
        <span style="color: #00d053">{{ scope.row.cash}}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="remark"
      label="备注"
       algin="center"
      width="220">
    </el-table-column>
    <el-table-column 
    label="操作"
    prop="operation"
    algin="center"
    fixe="right"
    width="320"
    >
      <template slot-scope="scope">
        <el-button
          type="warning"
          size="small"
          icon="edit"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          icon="delete"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
</el-table>
</div>

<Dialog :dialog="dialog" :formData="formData" @updata="getProfile"></Dialog>
</div>
</template>
<script>
import Dialog from '../components/Dialog'
export default {
   name: "foundList",
   data(){
       return{
       tableData:[],
       formData: {
        type: "",
        describe: "",
        income: "",
        expend: "",
        cash: "",
        remark: "",
        id: ""
      },
       dialog:{
         show: false,
         option: 'edit',
         title: ''
       } 
       }
   },
   created(){
       this.getProfile()
   },
   methods:{
       getProfile(){
           //获取数据
           this.$axios
           .get('api/profiles')
           .then(res=>{
              // console.log(res)
              this.tableData = res.data
           })
       },
      handleEdit(index,row){
            //编辑
            this.dialog={
              show: true,
              title: '修改资金信息',
              option: 'edit'
            } 
            this.formData={
              type: row.type,
              describe: row.describe,
              income: row.income,
              expend: row.expend,
              cash: row.cash,
              remark: row.remark,
              id: row._id
            }
      },
      handleDelete(index,row){
              this.$axios.delete(`api/profiles/delete/${row._id}`)
              .then(res=>{
                  this.$message('删除成功')
                  this.getProfile()
              })
      },
      handleAdd(){
        //this.dialog.show = true
        this.dialog={
              show: true,
              title: '修改资金信息',
              option: 'add'
            } 
            this.formData={
              type: '',
              describe:'',
              income: '',
              expend: '',
              cash: '',
              remark: '',
              id: ''
            }
      }
   },
   components:{
     Dialog
   }
}
</script>
<style scoped>
.fillcontainer {
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;
}
.btnRight {
  float: right;
}
.pagination {
  text-align: right;
  margin-top: 10px;
}
</style>
