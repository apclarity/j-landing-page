<script setup>
import { ref, computed } from 'vue'
import SearchBar from './SearchBar.vue'
import CardSection from './CardSection.vue'
</script>
<template>
    <div class="">
        <div class="relative flex flex-col overflow-y-auto overflow-x-hidden">
            <CardSection />
        </div>
    </div>
</template>
<style>
.button-size {
    padding: 11px 15px 11px 15px;
}

.button-size {
    padding: 11px 23px 11px 23px;
}
</style>