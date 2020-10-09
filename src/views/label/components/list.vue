<template>
  <div class="components-label_list">
    <b-table :columns="columns" action="queryLabelList" hasPagination></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {label: '标签名称', prop: 'label'},
        {label: '创建时间', prop: 'create_time'},
        {label: '操作', prop: 'label'}
      ]
    }
  },
}
</script>