<template>
    <div id="main" :style="{width: '600px', height: '200px'}"></div>
</template>
<script>
// 引入 ECharts 主模块
import echarts from 'echarts';
// // 引入环状图
// require("echarts/lib/chart/pie");
// // 引入提示框和标题组件
// require('echarts/lib/component/tooltip');
// require('echarts/lib/component/title');
    export default {
        
        methods: {
            drawPie(id) {
                var charts = echarts.init(document.getElementById(id));
                console.log(echarts,echarts.init(document.getElementById(id)));
                charts.setOption({
                    // tooltip: {
                    //     trigger: 'item',
                    //     formatter: '{a}<br/>{b}:{c} ({d}%)'
                    // },
                    legend: {
                        orient: 'vertical',
                        x: 'right',
                        y: 'center',
                        data: []
                    },
                    color:['#2872ef','#d6d6d6','#fc6e51'],
                    series: [
                        {
                            name:'访问来源',
                            type:'pie',
                            hoverAnimation:false,
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '20',
                                        fontWeight: 'bold'
                                    },
                                    position: 'center'
                                },
                                // emphasis: {
                                //     show: true,
                                //     textStyle: {
                                //         fontSize: '20',
                                //         fontWeight: 'bold'
                                //     }
                                // }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:335, name:'直接访问'}
                            ]
                        }
                    ]
                })
            }
        },
        mounted () {
            this.$nextTick(function () {
                this.drawPie('main')
            })
        }
    }
</script>
