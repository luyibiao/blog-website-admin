<template>
<div class="table-container">
    <el-table 
        v-loading="loading"
        :data="tableData" 
        :border="tableAttr.border" 
        :header-cell-class-name="tableAttr.headerRowClassName"
        :height="tableAttr.height" 
         @sort-change="sortChange"
    >
      <template v-for="(column,index) in columns">
            <el-table-column 
                v-if="column.render || column.header"
                :key="index"
                :prop="column.prop"
                :label="column.label" 
                :sortable="column.sortable"
                :width="column.width || 'auto'"
                :fixed="column.fixed || false"
            >
                <template slot="header" v-if="column.header">
                    <chhColumn :column="column" action="header"></chhColumn>
                </template>
                <template slot-scope="scope" v-if="column.render">
                    <chhColumn :scope="scope" :column="column" action="render"></chhColumn>
                </template>
            </el-table-column>
            <el-table-column 
                v-else
                :key="index"
                :prop="column.prop"
                :label="column.label" 
                :sortable="column.sortable"
                :width="column.width || 'auto'"
                :fixed="column.fixed || false"
            />
        </template>
    </el-table>
    <el-pagination
        v-if="hasPagination"
        @size-change="getTableData(pageIndex = 1)"
        @current-change="currentChange"
        
        :page-sizes="[10, 20, 30, 40]"
        :page-size.sync="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        class="pagination"
    ></el-pagination>
</div>
</template>

<script>
import chhColumn from "./column";
export default {
    name: 'bTable',
    props: {
        forms: {
            type: Object,
            default: () => ({})
        },
        // 请求参数
        action:{
            type: String,
        },
        // 列参数
        columns: {
            type: Array, 
            required: true
        },
        //请求的查询参数
        paramStr: {
            type: String,
            default: '[]'
        },
        hasPagination: {
            type: Boolean,
            default: false
        },
        refresh: {
            type: Boolean,
            default: false
        },
        // 表格配置
        tableAttr: {
            type: Object,
            default(){
                return {
                    height: 'auto',
                    maxHeight: '',
                    stripe: false,
                    border: false,
                    size: '',
                    fit: true,
                    showHeader: true,
                    highlightCurrentRow: false,
                    headerRowClassName: '',
                    emptyText: '',
                    defaultExpandAll: '',
                    defaultSort: '',
                }
            }
        },
        // 列配置
        columnAttr: {
            type: Object,
            default(){
                return {}
            }
        },

    },
    data() {
        return {
            loading: false,
            sort: [],
            tableData: [],
            pageSize: 10,
            pageIndex: 1,
            total: 0,
        };
    },
    created() {
        this.getTableData();
    },
    mounted() {

    },
    methods: {
        currentChange(v) {
            this.pageIndex = v
            this.getTableData()
        },
        //获取列表数据
        getTableData () {
            this.loading = true;
            var sendData = {
                pageSize: this.pageSize,
                pageIndex: this.pageIndex - 1,
                ...this.forms
            }
            this.$api[this.action](sendData).then(res => {
                this.tableData = res.list;
                this.total = res.total;
                this.loading = false
            }).catch(() => {
                this.loading = false
            });
        },
        // 排序变化
        sortChange(sort){
            // this.sort = formatSort(sort);
            this.getTableData();
        },

        // 重置分页
        resetPages() {
            
        }
    },
    components: {
        chhColumn
    },
    watch: {
        paramStr(){
            this.getTableData();
        },
        refresh(){
            this.pageIndex = 1
            this.getTableData();
        }
    }
};
</script>

<style lang="scss">
    .table-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        .el-table {
            flex: 1;
        }
        .el-table__body {
            // height: 800px;
        }
    }
</style>