<template>
    <div>
        <broken-line
            :canvas-height="600" :canvas-width="600"
            :line-height="50" :line-width="50"
            :start-x="300" :start-y="0" :childrens="3">
        </broken-line>
    </div>
</template>

<script>
    import config from './config.json';
    import module from './module.vue';
    import brokenLine from './brokenLine.vue';
    export default {
        data () {
            return {
                config
            };
        },
        components: {
            module,
            brokenLine
        },
        methods: {
            
        },
        mounted() {
            
        },
        filters: {
            renderIcon(src) {
                return require('@/assets/img' + src);
            }
        }
    };
</script>

<style lang="less" scoped>
    .controller {
        .my-source {
            h2 {
                margin-bottom: 16px;
            }
            .my-source-card {
                margin-bottom: 10px;
                .num-bg {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    line-height: 20px;
                    border-radius: 10px;
                    text-align: center;
                    background: #3aa2eb;
                }
            }
        }
        .guide {
            .header {
                border-bottom: 1px solid #ccc;
                height: 36px;
                line-height: 36px;
            }
        }
    }
</style>