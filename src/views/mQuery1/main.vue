<template>
    <mquery :config="config"></mquery>
</template>

<script>
import mquery from '../../components/awesome/mPanel/mQuery';
import config from './config'
export default {
    components: {
        mquery
    },
    data () {
        return {
            config
        }
    }
}
</script>

