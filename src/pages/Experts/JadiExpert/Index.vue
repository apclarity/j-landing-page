<script setup>
import { ref, computed } from 'vue'
import JadiExpert from './JadiExpert.vue'
import  Banner from './Banner.vue'
</script>
<template>
    <div class="flex overflow-hidden">
        <div class="relative flex flex-col overflow-y-auto overflow-x-hidden">
            <Banner />
            <JadiExpert />
            <!-- <CardMentors /> -->

        </div>
    </div>
</template>