<template>
    <div>
        <div v-for='(item, index) in newData' :key="index">
            <drag-node :model='item'></drag-node>
        </div>
    </div>
</template>

<script>
import dragNode from './drag_node.vue';
export default {
    components: {
        dragNode
    },
    props: {
        data: Array
    },
    computed: {
        newData: {
            // getter
            get() {
                return this.data;
            },
            // setter
            set(newValue) {
                // 移除原属性内部所有的值，为了要一个“干净”的引用对象。
                let length = this.data.length;
                for (let i = 0; i < length; i++) {
                this.data.shift(i);
                }
                // 然后利用对象深拷贝（返回target的引用），因此控制台不会报错～
                this.data = Object.assign(this.data, newValue);
            }
        }
    },
    methods: {
        emitCurNodeClicked(model, component) {
        this.$emit('current-node-clicked', model, component);
        },
        emitDrag(model, component, e) {
        this.$emit('drag', model, component, e);
        },
        emitDragEnter(model, component, e) {
        this.$emit('drag-enter', model, component, e);
        },
        emitDragLeave(model, component, e) {
        this.$emit('drag-leave', model, component, e);
        },
        emitDragOver(model, component, e) {
        this.$emit('drag-over', model, component, e);
        },
        emitDragEnd(model, component, e) {
        this.$emit('drag-end', model, component, e);
        },
        emitDrop(model, component, e) {
        this.$emit('drop', model, component, e);
        }
    }
}
</script>

