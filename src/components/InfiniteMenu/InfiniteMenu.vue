<template>
    <div>
        <infinite-menu-node
         v-for="(item, index) in data"
         :key="index"
         :data="item"
         :depth='increaseDepth'></infinite-menu-node>
    </div>
</template>

<script>
import infiniteMenuNode from './InfiniteMenuNode';
export default {
    components: {
        infiniteMenuNode
    },
    props: {
        data: Array,
        depth: {
            type: Number,
            default: 0
        }
    },
    computed: {
        increaseDepth() {
            return this.depth + 1;
        },
    }
}
</script>