<template>
  <div class="table-layout">
    <div class="table-layout_forms">
      <slot name="form"></slot>
    </div>
    <div class="table-layout_list">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'table-layout'
}
</script>

<style lang="scss">
  .table-layout {
    height: 100%;
    display: flex;
    flex-direction: column;
    .table-layout_forms {
      margin-bottom: 20px;
    }
    .table-layout_list {
      flex: 1;
    }
  }
</style>