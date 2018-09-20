<template>
    <div>
        <div :id="option.id"
            v-for="(option, index) in config.options"
            :key="index" :style="{width: '100%', height: '100%'}"
        ></div>
        <div id="wy" :style="{width: '100%', height: '100%'}"></div>

        <svg viewBox="0 0 100 100">
            <path d="M 50,50 m 0,-40
                a 40,40 0 1 1 0,80
                a 40,40 0 1 1 0,-80"
                stroke="#eaeef2"
                stroke-width="5"
                :fill-opacity="0"/>
            <path d="M 50,50 m 0,-40
            a 40,40 0 1 1 0,80
            a 40,40 0 1 1 0,-80"
            stroke-linecap="square"
            stroke="#eaeef2"
            stroke-width="5"
            fill-opacity="0"/>
        </svg>
    </div>
</template>
<script>
// 引入 ECharts 主模块
import echarts from 'echarts';
import config from './config';
    export default {
        data () {
            return {
                config
            };
        },
        methods: {
            drawPie(option) {
                var charts = echarts.init(document.getElementById(option.id));
                var _zr = charts.getZr();
                    _zr.add(new echarts.graphic.Text({
                        style: {            
                            x: _zr.getWidth() / 2,
                            y: _zr.getHeight() / 2,
                            color: '#666', 
                            text: `总数\n20`,
                            textAlign: 'center', 
                            textFont : 'bold 20px verdana'
                        }}  
                    ));
                charts.setOption({
                    id: option.id,
                    legend: option.legend,
                    series: option.series,
                });
            }
        },
        mounted () {
            this.$nextTick(function () {
                
                config.options.map((option, index) => {
                    this.drawPie(option);
                });
            })
        }
    }
</script>
