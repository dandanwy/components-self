<template>
    <mtoolbar
        :config="config"
        @on-add="handleAdd"
        @on-edit="handleEdit"
        @on-delete="handleDelete"
        @on-view="handleView"
    ></mtoolbar>
</template>

<script>
    import mtoolbar from '../../components/awesome/mPanel/mToolbar';
    import config from './config';
    export default {
        components: {
            mtoolbar,
        },
        data () {
            return {
                config
            }
        },
        methods: {
            handleAdd() {
                console.log('新增');
            },
            handleEdit() {
                console.log('修改');
            },
            handleDelete() {
                console.log('删除');
            },
            handleView() {
                console.log('查看');
            }
        }
    }
</script>

