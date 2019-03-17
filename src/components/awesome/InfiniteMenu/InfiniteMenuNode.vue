<template>
    <div>
        <ul>
            <li :style="{ 'padding-left': (this.depth - 1) * 8 + 'px'}">
                <div :class="isHover ? 'is-hover' : ''" @mouseover='mouseOver' @mouseout='mouseOut'>
                    <span @click="handleExpand">
                        <i v-if="isClicked" class="el-icon-arrow-down"></i>
                        <i v-else class="el-icon-arrow-right"></i>
                    </span>
                    <span>{{data.name}}</span>
                </div>
            </li>
        </ul>
        <div v-show="open" v-if="isFolder">
            <infinite-menu-node
                v-for="(item, index) in data.children"
                :key="index"
                :data="item"
                :depth='increaseDepth'>
            </infinite-menu-node>
        </div>
    </div>
</template>

<script>
export default {
    name: 'infiniteMenuNode',
    data () {
        return {
            open: false,
            expand: false,
            isClicked: false, // 当前节点被点击
            isHover: false, // 当前节点被hvoer
        }
    },
    props: {
        data: Object,
        depth: {
            type: Number,
            default: 0
        },
    },
    methods: {
        handleExpand() {
            if(this.isFolder) {
                this.open = !this.open;
            }
            // 纪录节点被点击的状态
            this.isClicked = !this.isClicked;
        },
        mouseOver() {
            this.isHover = true;
        },
        mouseOut() {
            this.isHover = false;
        }
    },
    computed: {
        isFolder() {
            return this.data.children && this.data.children.length
        },
        increaseDepth() {
            return this.depth + 1
        },
    }
}
</script>

<style lang="less" scoped>
    ul {
        li {
            list-style: none;
            div {
                padding: 5px 4px;
            }
        }
    }
    .is-hover {
        background: #ccc;
    }
    .nodeClicked {
        transform: rotate(90deg);
    }
</style>
