<script setup>
    import { ref, onMounted, onUnmounted, computed } from 'vue'
    import CardMentor from './CardMentor.vue'

    const mentors = ref ([
        {
            id: 6,
            title: 'Michael Sutejo',
            proffession: 'Sales Marketing',
            bidangs: [
                {
                    title: 'Sales'
                },
                {
                    title: 'Marketing'
                }
            ],
            services: [
                {
                    title: 'Sales'
                },
                {
                    title: 'Marketing'
                }
            ],
            rating: 4
        },
        {
            id: 7,
            title: 'Pak Bejo',
            proffession: 'Supervisor',
            bidangs: [
                {
                    title: 'Sales'
                },
                {
                    title: 'Marketing'
                }
            ],
            services: [
                {
                    title: 'Paud'
                },
                {
                    title: 'Tk'
                },
                {
                    title: 'SD'
                },
                {
                    title: 'SMP'
                }
            ],
            rating: 2
        },
        {
            id: 8,
            title: 'Pak Bejo',
            proffession: 'Engineer',
            bidangs: [
                {
                    title: 'Sales'
                },
                {
                    title: 'Marketing'
                }
            ],
            services: [
                {
                    title: 'Paud'
                },
                {
                    title: 'Tk'
                }, 
                {
                    title: 'SD'
                },
                {
                    title: 'SMP'
                }
            ],
            rating: 5
        },
        {
            id: 9,
            title: 'Pak Bejo',
            proffession: 'Chef at Nasi Goreng Pipiw',
            bidangs: [
                {
                    title: 'Sales'
                },
                {
                    title: 'Marketing'
                }
            ],
            services: [
                {
                    title: 'Paud'
                },
                {
                    title: 'Tk'
                },
                {
                    title: 'SD'
                },
                {
                    title: 'SMP'
                },
                {
                    title: 'SMA'
                },
                {
                    title: 'Kuliah'
                },
                {
                    title: 'SMA'
                },
                {
                    title: 'Kuliah'
                }
            ],
            rating: 3
        },
        {
            id: 10,
            title: 'Pak Bejo',
            proffession: 'Chef at Nasi Goreng Pipiw lalala kentrung dar der dor dar der dor dar der dor dar der dor',
            bidangs: [
                {
                    title: 'Sales'
                },
                {
                    title: 'Marketing'
                }
            ],
            services: [
                {
                    title: 'Paud'
                },
                {
                    title: 'Tk'
                },
                {
                    title: 'SD'
                },
                {
                    title: 'SMP'
                }
            ],
            rating: 4
        },
        {
            id: 11,
            title: 'Pak Bejo',
            proffession: 'Chef at Nasi Goreng Pipiw',
            bidangs: [
                {
                    title: 'Sales'
                },
                {
                    title: 'Marketing'
                }
            ],
            services: [
                {
                    title: 'Sales'
                },
                {
                    title: 'Marketing'
                }
            ],
            rating: 2
        },
        {
            id: 12,
            title: 'Pak Bejo',
            proffession: 'Chef at Nasi Goreng Pipiw',
            bidangs: [
                {
                    title: 'Sales'
                },
                {
                    title: 'Marketing'
                }
            ],
            services: [
                {
                    title: 'Paud'
                },
                {
                    title: 'Tk'
                },
                {
                    title: 'SD'
                },
                {
                    title: 'SMP'
                }
            ],
            rating: 5
        },
        {
            id: 13,
            title: 'Pak Bejo',
            proffession: 'Chef at Nasi Goreng Pipiw',
            bidangs: [
                {
                    title: 'Sales'
                },
                {
                    title: 'Marketing'
                }
            ],
            services: [
                {
                    title: 'Paud'
                },
                {
                    title: 'Tk'
                },
                {
                    title: 'SD'
                },
                {
                    title: 'SMP'
                },
                {
                    title: 'SMA'
                },
                {
                    title: 'Kuliah'
                },
                {
                    title: 'SMA'
                },
                {
                    title: 'Kuliah'
                }
            ],
            rating: 3
        },
    ])
</script>
<template>
    <div class="">
        <div class="px-0 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <h1 class="text-2xl md:text-3xl text-slate-800 text-center font-bold">Rekomendasi experts unggulan</h1>
            <div class="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-6 mt-10 px-28">
                <div v-for="(mentor, i) in mentors" :key="i">
                    <CardMentor :item="mentor" />
                </div>
            </div>
            <div class="text-end text-sm mt-5 px-28">
                <a href="">Cari experts lainnya -&gt;</a>
            </div>
        </div>
    </div>
    
</template>