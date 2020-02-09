<template>
    <div class="Bottom">
        <div class="adress">
            <div class="Bott-adre">
                {{copys}}
            </div>
            <div class="boots">
                {{zhus}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Bottom",
    data () {
        return {
            copys:"Copyright © 2020.01 - 2020.02 https://github.com/liusir-123/QQ-.git",
            zhus: "liusir-123 仿qq音乐 / 著"
        }
    }
}
</script>

<style lang="less">
    .Bottom{
        width: 100%;
        height: 200px;
        margin-top: 600px;
        color: #999;
        background-color: #333;
        .adress{
            width: 100%;
            height: 200px;
            border: 1px solid #333;
            .Bott-adre{
                width: 500px;
                height: 25px;
                margin: 0 auto;
                margin-top: 110px;
                font-size: 12px;
                text-align: center;
            }
            .boots{
                width: 400px;
                height: 25px;
                margin: 0 auto;
                text-align: center;
                color: rgb(153, 153, 153);
                font-size: 15px;
            }
        }
    }
</style>