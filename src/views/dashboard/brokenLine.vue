<template>
    <canvas id="myCanvas" :width="canvasWidth" height="canvasHeight">
        
    </canvas>
</template>

<script>
export default {
    props: {
        canvasWidth: {
            type: Number,
            default: 600
        },
        canvasHeight: {
            type: Number,
            default: 600
        },
        lineHeight: {
            type: Number,
            default: 50
        },
        lineWidth: {
            type: Number,
            default: 50
        },
        startX: {
            type: Number,
            default: 200
        },
        startY: {
            type: Number,
            default: 0
        },
        childrens: {
            type: Number,
            default: 3
        },
    },
    methods: {
        line() {
            var c=document.getElementById("myCanvas");
            var ctx=c.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(this.startX,this.startY);
            ctx.lineTo(this.startX,this.startY + this.lineHeight);
            ctx.stroke();
            if(this.childrens % 2 === 0) {
                for(let i =1; i <= this.childrens / 2;i++) {
                    // 左边
                    ctx.beginPath();
                    ctx.moveTo(this.startX,this.startY + this.lineHeight);
                    ctx.lineTo(this.startX + i* this.lineWidth,this.startY + this.lineHeight);
                    ctx.lineTo(this.startX + i* this.lineWidth,this.startY + 2 * this.lineHeight);
                    ctx.stroke();
                    // 右边
                    ctx.beginPath();
                    ctx.moveTo(this.startX,this.startY + this.lineHeight);
                    ctx.lineTo(this.startX - i* this.lineWidth,this.startY + this.lineHeight);
                    ctx.lineTo(this.startX - i* this.lineWidth,this.startY + 2 * this.lineHeight);
                    ctx.stroke();
                }
            }else {
                for(let i =1; i <= (this.childrens-1) / 2;i++) {
                    // 中间线
                    ctx.beginPath();
                    ctx.moveTo(this.startX,this.startY);
                    ctx.lineTo(this.startX,this.startY + 2* this.lineHeight);
                    ctx.stroke();
                    // 左边
                    ctx.beginPath();
                    ctx.moveTo(this.startX,this.startY + this.lineHeight);
                    ctx.lineTo(this.startX + i* this.lineWidth,this.startY + this.lineHeight);
                    ctx.lineTo(this.startX + i* this.lineWidth,this.startY + 2 * this.lineHeight);
                    ctx.stroke();
                    // 右边
                    ctx.beginPath();
                    ctx.moveTo(this.startX,this.startY + this.lineHeight);
                    ctx.lineTo(this.startX - i* this.lineWidth,this.startY + this.lineHeight);
                    ctx.lineTo(this.startX - i* this.lineWidth,this.startY + 2 * this.lineHeight);
                    ctx.stroke();
                }
            }
        }
    },
    mounted() {
        this.line()
        console.log(this.$props);
    }
}
</script>

