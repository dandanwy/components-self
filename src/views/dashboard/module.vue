<template>
    <div :class="type ? 'circle' : 'rectangle'">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                type: false
            };
        }
    };
</script>


<style lang="less" scoped>
    .circle {
        display: inline-block;
        background: #3aa2eb;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 20px;
    }
</style>
