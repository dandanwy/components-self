<template>
    <div :style='styleObj'>
        <div :class='{"is-clicked": isClicked,"is-hover":isHover}' @click="toggle" @mouseover='mouseOver' @mouseout='mouseOut'>
            <div class='treeNodeText' :id='model.id' :style="{ 'padding-left': (this.depth - 1) * 1.5 + 'rem' }">
                <span :class="[isClicked ? 'nodeClicked' : '','vue-drag-node-icon']"></span>
                <span class='text'>{{model.name}}</span>
            </div>
        </div>
        <div class='treeMargin' v-show="open" v-if="isFolder">
            <div v-for="(item2, i) in model.children" :key="i" :allowDrag='allowDrag' :allowDrop='allowDrop' :depth='increaseDepth' :model="item2" :defaultText='defaultText'>
            </div>
        </div>
    </div>
</template>
<script>
let id = 1000
let rootTree = null // drag_tree组件引用

import findRoot from '../../utils/dragtree.js';
export default {
    name: 'DragNode',
    data () {
        return {
            open: false,
            styleObj: {
                opacity: 1
            },
            isClicked: false, // 当前节点被点击
            isHover: false, // 当前节点被hvoer
        }
    },
    props: {
        model: Object,
        allowDrag: {
            type: Function,
            default: () => true
        },
        allowDrop: {
            type: Function,
            default: () => true
        },
        depth: {
            type: Number,
            default: 0
        },
        defaultText: {
            // 填加节点时显示的默认文本．
            type: String,
            default: '新增节点'
        },
    },
    computed: {
        isFolder() {
            return this.model.children && this.model.children.length
        },
        increaseDepth() {
            return this.depth + 1
        },
    },
    methods: {
        toggle() {
            if (this.isFolder) {
                this.open = !this.open
            }
        },
        mouseOver(e) {
            this.isHover = true
        },
        mouseOut(e) {
            this.isHover = false
        },
    },
    beforeCreate() {
        console.log(this.$options.components);
        this.$options.components.item = require('./drag_node.vue')
    },
    created () {
        // rootTree = findRoot(this)
        // console.log(this);
    }
}
</script>

<style lang="less" scoped>
    .is-clicked {
        background: #e5e9f2;
    }
    .treeNodeText {
        height: 28px;
        box-sizing: border-box;
        width: fit-content;
        font-size: 18px;
        color: #324057;
        display: flex;
        align-items: center;
    }
    .vue-drag-node-icon {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 10px;
        margin-right: 8px;
        border-left: 4px solid grey;
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;
        border-right: 0 solid yellow;
        transition: transform 0.3s ease-in-out;
    }
    .nodeClicked {
        transform: rotate(90deg);
    }
</style>
