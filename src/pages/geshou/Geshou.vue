<template>
    <div>
       <tuijian-navs></tuijian-navs>
       <geshou-header></geshou-header>
       <geshou-choose></geshou-choose>
       <geshou-singer></geshou-singer>
    </div>
</template>

<script>
import GeshouHeader from '@/pages/geshou/components/Header'
import GeshouChoose from '@/pages/geshou/components/Choose'
import GeshouSinger from '@/pages/geshou/components/Singer'
import TuijianNavs from '@/pages/tuijian/components/navs'
export default {
    name: "Geshou",
    components: {
        GeshouHeader,
        GeshouChoose,
        GeshouSinger,
        TuijianNavs,
    }
}
</script>

<style lang="less">

</style>