<template>
    <div>
       <geshou-header></geshou-header>
       <geshou-choose></geshou-choose>
       <geshou-singer></geshou-singer>
    </div>
</template>

<script>
import GeshouHeader from '@/pages/geshou/components/Header'
import GeshouChoose from '@/pages/geshou/components/Choose'
import GeshouSinger from '@/pages/geshou/components/Singer'
export default {
    name: "Geshou",
    components: {
        GeshouHeader,
        GeshouChoose,
        GeshouSinger,
    }
}
</script>

<style lang="less">

</style>