<template>
<div>
    <tuijian-gedan></tuijian-gedan>
    <tuijian-tswiper></tuijian-tswiper>
    <tuijian-zuixin></tuijian-zuixin>
    <tuijian-jingcai></tuijian-jingcai>
    <tuijian-xindie></tuijian-xindie>
    <tuijian-paihang></tuijian-paihang>
    <tuijian-mv></tuijian-mv>
    <tuijian-bottom></tuijian-bottom>
</div>
</template>

<script>
import TuijianGedan from '@/pages/tuijian/components/Gedan'
import TuijianTswiper from '@/pages/tuijian/components/Tswiper'
import TuijianZuixin from '@/pages/tuijian/components/Zuixin'
import TuijianJingcai from '@/pages/tuijian/components/Jingcai'
import TuijianXindie from '@/pages/tuijian/components/Xindie'
import TuijianPaihang from '@/pages/tuijian/components/Paihang'
import TuijianMv from '@/pages/tuijian/components/Mv'
import TuijianBottom from '@/pages/tuijian/components/Bottom'
export default {
    name: 'Tuijian',
    components: {
        TuijianGedan,
        TuijianTswiper,
        TuijianZuixin,
        TuijianJingcai,
        TuijianXindie,
        TuijianPaihang,
        TuijianMv,
        TuijianBottom,
    }
}
</script>

<style lang="less">

</style>