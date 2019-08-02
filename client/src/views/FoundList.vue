<template>
<div class="fillContainer">
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
</template>
<script>
export default {
   name: "foundList",
   data(){
       return{
       tableData:[]
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
             
      },
      handleDelete(index,row){

      }
   }
}
</script>
<style>
</style>
