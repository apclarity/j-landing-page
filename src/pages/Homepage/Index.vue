<script setup>
    import { ref, computed } from 'vue'
    import Banner from './Banner.vue'
    import CardMentors from './CardMentors.vue'
    import Carousel from './Carousel.vue'
    import Footer from './Footer.vue'
    import StickyChat from './StickyChat.vue'
</script>
<template>
    <div class="flex overflow-hidden">
        <div class="relative flex flex-col overflow-y-auto overflow-x-hidden">
                <Banner/>
                <CardMentors/>
                <Carousel/>
                <StickyChat />
                <Footer />
            </div>
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