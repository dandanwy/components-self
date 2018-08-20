<style>
    /*.m-col div{*/
        /*background: rgba(0,153,229,.7);*/
    /*}*/
</style>
<template>
    <div>
        <Row >
            <m-col span="6">
                col-6
            </m-col>
            <m-col span="6">
                col-6
            </m-col>
            <m-col span="6">
                col-6
            </m-col>
            <m-col span="6">
                col-6
            </m-col>
        </Row>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                n: 2
            }
        },
        methods: {
            add () {
                this.n++;
            }
        }
    }
</script>
