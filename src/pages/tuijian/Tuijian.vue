<template>
<div>
    <tuijian-gedan></tuijian-gedan>
    <tuijian-tswiper></tuijian-tswiper>
    <tuijian-zuixin></tuijian-zuixin>
    <tuijian-jingcai></tuijian-jingcai>
    <tuijian-xindie></tuijian-xindie>
    <tuijian-paihang></tuijian-paihang>
</div>
</template>

<script>
import TuijianGedan from '@/pages/tuijian/components/Gedan'
import TuijianTswiper from '@/pages/tuijian/components/Tswiper'
import TuijianZuixin from '@/pages/tuijian/components/Zuixin'
import TuijianJingcai from '@/pages/tuijian/components/Jingcai'
import TuijianXindie from '@/pages/tuijian/components/Xindie'
import TuijianPaihang from '@/pages/tuijian/components/Paihang'
export default {
    name: 'Tuijian',
    components: {
        TuijianGedan,
        TuijianTswiper,
        TuijianZuixin,
        TuijianJingcai,
        TuijianXindie,
        TuijianPaihang,
    }
}
</script>

<style lang="less">

</style>