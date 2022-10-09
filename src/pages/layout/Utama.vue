<template>
  <div class="flex h-screen overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" v-show="session.name != 'null'"/>

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" :session="session" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main>
        <router-view />
      </main>

    </div> 

  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useSessionStore } from './store'
  import Sidebar from '../../partials/Sidebar.vue'
  import Header from '../../partials/Header.vue'

  const sidebarOpen = ref(false)
  
  const sessionStore = useSessionStore()
  const session = computed(() => sessionStore.session)
</script>