<template>
    <div id="mToolbar">
        <el-row>
            <el-col :span="14">
                <el-button v-for="(item, index) in config.toolbar.buttons" 
                :key="index" type="primary" 
                :icon="item.icon"
                @click="handleClick(item.event)">
                    {{item.label}}
                </el-button>
            </el-col>
            <el-col :span="10">
                <el-input v-model="richInputValue"
                :style="{width: config.toolbar.miniSearch.richInput.width, float: 'right'}">
                    <el-select v-model="richInputKey" :style="{width: config.toolbar.miniSearch.richInput.options.width}"
                    slot="prepend">
                        <el-option v-for="(option, i) in config.toolbar.miniSearch.richInput.options.items"
                        :value="option.value" :key="i" :label="option.label"></el-option>
                    </el-select>
                    <el-button icon="el-icon-search" slot="append" @click="handleSearch"></el-button>
                </el-input>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'mToolbar',
        data () {
            return {
                richInputValue: '',
                richInputKey: ''
            }
        },
        props: {
            config: Object
        },
        mounted () {
        },
        methods: {
            handleSearch() {
                console.log(JSON.parse(`{"${this.richInputKey}":"${this.richInputValue}"}`));
            },
            handleClick(event) {
                this.$emit(event);
            }
        }
    }
</script>
