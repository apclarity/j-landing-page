<script setup>
import { ref, computed } from 'vue'
import { isObjectEmpty, isVariableEmpty } from '../utils/Helper'
import { useLayoutStore } from '../pages/layout/store'

import SearchModal from '../components/ModalSearch.vue'
import Notifications from '../components/DropdownNotifications.vue'
import Help from '../components/DropdownHelp.vue'
import UserMenu from '../components/DropdownProfile.vue'
import MenuNavbar from '../pages/Homepage/MenuNavbar.vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const props = defineProps({
  sidebarOpen: Boolean,
  session: Object,
})

const sidebarMobile = [
  {
    title: "Cari Expert",
    to: "#"
  },
  {
    title: "Jadi Expert",
    to: "#"
  },
  {
    title: "Layanan",
    dropdown: [
      {
        title: 'Konsultasi',
        to: '#'
      },
      {
        title: 'Pelatihan',
        to: '/dashboard/main'
      },
      {
        title: 'Undang Expert',
        to: '#'
      },
      {
        title: 'Rekrut Expert',
        to: '#'
      }
    ],
    to: "#"
  }
]
const emit = defineEmits(['openBurgerSidebar'])

const openBurgerSidebar = () => {
  emit('openBurgerSidebar', true)
}

const layoutStore = useLayoutStore()
const session = computed(() => layoutStore.session)

const isSessionEmpty = computed(() => isObjectEmpty(layoutStore.sessionFirstName))
// const keywordParams = computed(() => route.query.keyword)
</script>

<template>
  <header class="sticky top-0 bg-white z-30 shadow-lg">
    <div class="px-4 sm:px-6 md:px-8 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex">
          <button class="text-slate-500 hover:text-slate-600 md:hidden" v-if="!isSessionEmpty" @click.prevent="openBurgerSidebar">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="5" width="16" height="2" />
              <rect x="4" y="11" width="16" height="2" />
              <rect x="4" y="17" width="16" height="2" />
            </svg>
          </button>
          <div v-if="isSessionEmpty">
            <router-link to="/" class="">
              <img src="/src/images/cropped-logo-jobhun-3.png" alt="Logo Jobhun" class="h-8 md:h-10" />
            </router-link>
            <!-- <router-link :to="`/?keyword=${keywordParams}`" class="">
              <img src="/src/images/cropped-logo-jobhun-3.png" alt="Logo Jobhun" class="h-8 md:h-10" />
            </router-link> -->
          </div>
        </div>
        <div class="flex items-center space-x-3">
          <div>
            <MenuNavbar />
          </div>
          <div v-if="!isSessionEmpty">
            <Notifications align="right" class="mx-2" />
          </div>
          <UserMenu align="right" />
        </div>
      </div>
    </div>
  </header>
</template>