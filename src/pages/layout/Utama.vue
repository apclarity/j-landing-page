<template>
  <div class="flex h-screen overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" v-show="session.first_name"/>

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" :session="session" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main>
        <router-view />
        <Footer/>
      </main>

    </div> 

  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useLayoutStore } from './store'
  import Sidebar from '../../partials/Sidebar.vue'
  import Header from '../../partials/Header.vue'
  import Footer from '../../pages/layout/Footer.vue'

  const sidebarOpen = ref(true)
  
  const layoutStore = useLayoutStore()
  const session = computed(() => layoutStore.session)
</script>