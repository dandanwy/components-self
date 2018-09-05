<template>
    <div class="animate1">
        <div class="translate">
            <img src="../../assets/transition/transition01.png" alt="">
        </div>
    </div>
</template>

<style lang="less" scoped>
    .animate1 {
        width: 100%;
        height: 570px;
        background: url('../../assets/slider/sliderImg_01.jpg') center center no-repeat ;
        .translate {
            height: 100%;
            // background: url('../../assets/transition/transition01.png') 30 70 no-repeat;
            // animation: animate 1s infinite;
            transform-origin:center 285px;/*定义动画的旋转中心点*/ 
        }
    }

    @keyframes animate {
        0% {transform: rotate(0deg)}
        50% {transform: rotate(180deg)}
        100% {transform: rotate(360deg)}
    }
</style>
