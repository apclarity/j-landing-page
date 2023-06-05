<script setup>
    import { ref, computed } from 'vue'
    import Banner from './Banner.vue'
    import Buttons from './Buttons.vue'
    import StickyChat from './StickyChat.vue'
</script>
<template>
        <div class="py-8 md:py-0 mx-auto mb-10">
            <Banner/>
            <Buttons/>
            <StickyChat/>
        </div>
</template>
<style>
    .button-size{
        padding: 11px 15px 11px 15px;
    }

    .button-size {
        padding: 11px 23px 11px 23px;
    }

</style>