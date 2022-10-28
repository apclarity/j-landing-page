<script setup>
  import { ref, computed } from 'vue'
  import { isObjectEmpty } from '../utils/Helper'
  import { useLayoutStore } from '../pages/layout/store'

  import SearchModal from '../components/ModalSearch.vue'
  import Notifications from '../components/DropdownNotifications.vue'
  import Help from '../components/DropdownHelp.vue'
  import UserMenu from '../components/DropdownProfile.vue'
  import MenuNavbar from '../pages/Homepage/MenuNavbar.vue'

  const props = defineProps({
    sidebarOpen: Boolean,
    session: Object,
  })

  const searchModalOpen = ref(false)
  const sidebarOpen = ref(false)

  const layoutStore = useLayoutStore()
  const session = computed(() => layoutStore.session)
</script>

<template>
  <header class="sticky top-0 bg-white z-30 shadow-lg">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 -mb-px">
        <div class="flex">
          <button class="text-slate-500 hover:text-slate-600 lg:hidden" @click.stop="$emit('toggle-sidebar')" aria-controls="sidebar" :aria-expanded="sidebarOpen">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="5" width="16" height="2" />
              <rect x="4" y="11" width="16" height="2" />
              <rect x="4" y="17" width="16" height="2" />
            </svg>
          </button>
          <div v-show="session.name != ''">
            <a href="/homepage/index" class="">
              <img src="/src/images/cropped-logo-jobhun-3.png" alt="Logo Jobhun" class="h-10 sm:h-8" />
            </a>
          </div>
        </div>
        <div class="flex items-center space-x-3">
          <div>
            <MenuNavbar />
          </div>
          <div v-if="session.name != 'user'">
            <Notifications align="right" />
            <Help align="right" />
          </div>
          <!-- <hr class="w-px h-6 bg-slate-200" /> -->
          <UserMenu align="right" />
        </div>
      </div>
    </div>
  </header>
</template>