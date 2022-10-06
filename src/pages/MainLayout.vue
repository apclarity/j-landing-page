<template>
    <div class="flex h-screen overflow-hidden">
  
      <!-- Sidebar -->
      <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" v-show="user != ''"/>
  
      <!-- Content area -->
      <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        
        <!-- Site header -->
        <Header :sidebarOpen="sidebarOpen" :user="user" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
  
        <main>
          <router-view />
        </main>
  
      </div> 
  
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import Sidebar from '../partials/Sidebar.vue'
  import Header from '../partials/Header.vue'
  
  export default {
    name: 'Inbox',
    components: {
      Sidebar,
      Header,
    }, 
    setup() {
  
      const sidebarOpen = ref(false)
      const inboxSidebarOpen = ref(false)
      const user = ""
  
      return {
        sidebarOpen,
        inboxSidebarOpen,
        user
      }  
    }
  }
  </script>