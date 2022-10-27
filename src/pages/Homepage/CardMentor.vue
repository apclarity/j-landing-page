<script setup>
    import Rating from './Ratings.vue'  
    
    const props = defineProps({
        item: {
            type: Object,
            required: true
        }
    })

    const { item } = props
</script>
<template>
    <div
        class="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-slate-200">
        <div class="flex flex-col h-full">
            <!-- Image -->
            <img class="w-full" src="../../images/applications-image-01.jpg" width="286" height="160"/>
            <!-- Card Content -->
            <div class="grow flex flex-col p-5">
                <!-- Card body -->
                <div class="grow">
                    <!-- Header -->
                    <header class="mb-3">
                        <a href="#">
                            <p class="text-lg text-slate-800 font-semibold truncate">{{item.title}}
                            </p>
                        </a>
                    </header>
                    <!-- Features list -->
                    <ul class="text-sm space-y-2 mb-5">
                        <li class="flex items-center">
                            <svg class="w-4 h-4 fill-current text-slate-400 shrink-0 mr-3" viewBox="0 0 16 16">
                                <path
                                    d="M15.686 5.695L10.291.3c-.4-.4-.999-.4-1.399 0s-.4.999 0 1.399l.6.599-6.794 3.697-1-1c-.4-.399-.999-.399-1.398 0-.4.4-.4 1 0 1.4l1.498 1.498 2.398 2.398L.6 13.988 2 15.387l3.696-3.697 3.997 3.996c.5.5 1.199.2 1.398 0 .4-.4.4-.999 0-1.398l-.999-1 3.697-6.694.6.6c.599.6 1.199.2 1.398 0 .3-.4.3-1.1-.1-1.499zM8.493 11.79L4.196 7.494l6.695-3.697 1.298 1.299-3.696 6.694z" />
                            </svg>
                            <p class="truncate">{{item.proffession}}</p>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-4 h-4 fill-current text-slate-400 shrink-0 mr-3" viewBox="0 0 16 16">
                                <path
                                    d="M15 15V5l-5-5H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h12c.6 0 1-.4 1-1zM3 2h6v4h4v8H3V2z" />
                            </svg>
                            <div>{{item.bidang}}</div>
                        </li>
                        <li class="flex items-center">
                            <svg class="w-4 h-4 fill-current text-slate-400 shrink-0 mr-3" viewBox="0 0 16 16">
                                <path
                                    d="M13 7h2v6a1 1 0 01-1 1H4v2l-4-3 4-3v2h9V7zM3 9H1V3a1 1 0 011-1h10V0l4 3-4 3V4H3v5z" />
                            </svg>
                            <div class=" space-x-1 line-clamp-1 hover:line-clamp-none">
                                <div v-for="service in item.services" :key="service" class="inline-flex text-sm font-medium bg-emerald-100 text-emerald-600 rounded-md text-center px-2 py-0.5 my-1">
                                    {{service.title}}
                                </div>
                            </div>
                        </li>
                    </ul>
                    <!-- Rating -->
                    <Rating :ratingValues="item.rating" />
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .hide-scroll-bar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .hide-scroll-bar::-webkit-scrollbar {
        display: none;
    }
</style>