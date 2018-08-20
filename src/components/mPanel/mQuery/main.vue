<template>
    <div id="mQuery">
        <el-row>
            <el-col :span="config.showCollapse ? 22 : 24">
                <el-form :inline="config.inlineType" :model="config" :style="{maxHeight: collapse[collapseType].maxHeight, overflow: collapse[collapseType].overflow}" class="demo-form-inline">
                    <el-row v-for="(rowItem, rowIndex) in config.queryData.rows" :key="'row_'+rowIndex">
                        <el-col v-for="(item, index) in config.queryData.items" v-if="item.layout.row===rowItem" :key="'col_' + index" :span="item.layout.col">
                            <el-form-item :label="item.labelName">
                                <el-input v-if="item.type === 'input'" v-model="item.labelValue"/>
                                <el-select v-else-if="item.type === 'select'" v-model="item.labelValue">
                                    <el-option v-for="option in item.options" :value="option.value" :label="option.label" :key="option.key"></el-option>
                                </el-select>
                                <el-date-picker v-else-if="item.type === 'DatePicker'" v-model="item.labelValue" placeholder="选择日期"  style="width: 100%;"></el-date-picker>
                                <el-switch v-else-if="item.type === 'switch'" v-model="item.labelValue"></el-switch>
                                <el-checkbox-group v-else-if="item.type === 'checkbox'" v-model="item.labelValue" v-for="(checkboxItem, i) in item.checkboxes" :key="'checkbox_' + i">
                                    <el-checkbox :label="checkboxItem.label" :name="item.type"></el-checkbox>
                                </el-checkbox-group>
                                <el-radio-group v-else-if="item.type === 'radio'" v-model="item.labelValue" v-for="(radioItem, i) in item.radios" :key="'radio_' + i">
                                    <el-radio :label="radioItem.label"></el-radio>
                                </el-radio-group>
                                <el-input v-else-if="item.type === 'textarea'" type="textarea" v-model="item.labelValue"/>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row type="flex" :justify="(config.buttons&&config.buttons.justify) || 'center'">
                        <el-col :span="6">
                            <el-button type="primary" @click="handleSubmit">{{(config.buttons&&config.buttons.submitText) || '查 询'}}</el-button>
                            <el-button type="ghost">{{(config.buttons&&config.buttons.resetText) || '重 置'}}</el-button>
                        </el-col>
                    </el-row>
                </el-form>
            </el-col>
            <el-col v-if="config.showCollapse" :span="2">
                <a class="btn-collapse" href="javascript: void(0)" @click="handleCollapse">
                    <el-row>
                        <el-col :span="16">{{collapse[collapseType].text}}</el-col>
                        <el-col :span="8">
                            <i :class="collapse[collapseType].icon"></i>
                        </el-col>
                    </el-row>
                </a>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name:'mQuery',
        props: {
            config: Object
        },
        data() {
            return {
                formInline: {
                    user: '',
                    region: ''
                },
                collapse: {
                    up: {
                        text: '收起',
                        icon: 'el-icon-arrow-down',
                        maxHeight: '200px',
                        overflow: 'visible'
                    },
                    down: {
                        text: '展开',
                        icon: 'el-icon-arrow-right',
                        maxHeight: '42px',
                        overflow: 'hidden'
                    }
                },
                collapseType: 'up'
                    }
            },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            handleCollapse() {
                if (this.collapseType === 'up') {
                this.collapseType = 'down';
                } else {
                this.collapseType = 'up';
                }
            },
            // 查询条件值
            getCondition(config) {
                this.config.queryData.items.map((item, index) => {
                    console.log(item);
                });
            },
            handleSubmit() {
                this.getCondition(this.config);
            }
        },
        mounted () {
            
        }
    }
</script>

<style lang="less" scoped>
    #mQuery {
        .collapse-form {
        transition: max-height .5s;
        -moz-transition: max-height .5s; /* Firefox 4 */
        -webkit-transition: max-height .5s; /* Safari 和 Chrome */
        -o-transition: max-height .5s; /* Opera */
        }
        .btn-collapse {
        display: block;
        margin-left: 20px;
        margin-top: 9px;
        }
    }
</style>

