<template>
  <div class="flex h-screen overflow-hidden">
    <!-- <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" v-show="session.first_name"/> -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <!-- <Header :sidebarOpen="sidebarOpen" :session="session" @open-burger-sidebar="sidebarOpen = true" /> -->
      <main>
        <Suspense>
          <template #default><router-view /></template>
          <template #fallback>Loading...</template>
        </Suspense>
        <Footer/>
      </main>
    </div> 
  </div>
</template>
<script setup>
// import { ref, computed } from 'vue'
// import { useLayoutStore } from './store'
// import Sidebar from '../../partials/Sidebar.vue'
// import Header from '../../partials/Header.vue'
import Footer from '../../pages/layout/Footer.vue'
// import { useOptionsStore } from '../../stores/store-options'

// const sidebarOpen = ref(false)

// const openBurgerSidebar = ()=>{
//   sidebarOpen.value =true
// }

// const layoutStore = useLayoutStore()

// const session = computed(() => layoutStore.session)
// layoutStore.getSession()

// const optionsStore = useOptionsStore()
// optionsStore.getSectors()
// optionsStore.getDomiciles()
// optionsStore.getServices()
// optionsStore.getTitle()
// optionsStore.getAccorConsul()
</script>