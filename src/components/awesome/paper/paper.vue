<template>
    <div class="paper" ref="paper">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .paper {
        position: relative;
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 1px 4px #a5abbc;
        display: block;
        margin: 0 10px 10px 10px;
        padding: 20px;
        min-height: 100vh;
    }
</style>
