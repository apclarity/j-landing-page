<style>
.logo-j{
  opacity: 1;
  animation: fade 3s linear;
}
</style>
<template>
  <div>
    <!-- Sidebar backdrop (mobile only) -->
    <div class="fixed inset-0 bg-gray-100 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200" :class="sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'" aria-hidden="true"></div>

    <!-- Sidebar -->
    <div
      id="sidebar"
      ref="sidebar"
      class="flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 drop-shadow-lg bg-white p-4 transition-all duration-200 ease-in-out"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-64'"
    >

      <!-- Sidebar header -->
      <div class="flex justify-between mb-10 pr-3 sm:px-2">
        <!-- Close button -->
        <button
          ref="trigger"
          class="lg:hidden text-slate-500 hover:text-slate-400"
          @click.stop="$emit('close-sidebar')"
          aria-controls="sidebar"
          :aria-expanded="sidebarOpen"
        >
          <span class="sr-only">Close sidebar</span>
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
          </svg>
        </button>
        <a href="/" class="mx-auto" v-if="sidebarExpanded">
          <img
              src="/src/images/cropped-logo-jobhun-3.png" 
              alt="Logo Jobhun"
              class="h-10 sm:h-8"
            />
        </a>
        <a href="/" class="mx-auto" v-else>
          <img src="/src/images/logo/Logo-J-Jobhun-04.png" alt="Logo Jobhun" class="h-10 sm:h-8 logo-j" />
        </a>
      </div>

      <!-- Links -->
      <div class="space-y-8">
        <!-- Pages group -->
        <div>
          <!-- <h3 class="text-xs uppercase text-black font-semibold pl-3">
            <span class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
            <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">Pages</span>
          </h3> -->
          <ul>
            <!-- Dashboard -->
            <!-- <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath === '/' || currentRoute.fullPath.includes('dashboard')">
              <a class="block text-black hover:text-black-700 truncate transition duration-150" :class="(currentRoute.fullPath === '/' || currentRoute.fullPath.includes('dashboard')) && 'hover:text-emerald-500'" href="#0" @click.prevent="sidebarExpanded ? parentLink.handleClick() : sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current" :class="(currentRoute.fullPath === '/' || currentRoute.fullPath.includes('dashboard')) && '!text-gray-500'" d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
                      <path class="fill-current" :class="(currentRoute.fullPath === '/' || currentRoute.fullPath.includes('dashboard')) && 'text-black'" d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" />
                      <path class="fill-current" :class="(currentRoute.fullPath === '/' || currentRoute.fullPath.includes('dashboard')) && 'text-white'" d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z" />                      
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Dashboard</span>
                  </div>
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-black" :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-1" :class="!parentLink.expanded && 'hidden'">
                  <router-link to="/dashboard/main" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-black hover:text-emerald-500 transition duration-150 truncate" :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Main</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/dashboard/analytics" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-black hover:text-emerald-500 transition duration-150 truncate" :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Analytics</span>
                      </a>
                    </li>
                  </router-link> 
                  <router-link to="/dashboard/fintech" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-black hover:text-emerald-500 transition duration-150 truncate" :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Fintech</span>
                      </a>
                    </li>
                  </router-link>                                  
                </ul>
              </div>
            </SidebarLinkGroup>             -->
            <!-- E-Commerce  -->
            <!-- <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('ecommerce')">
              <a class="block text-slate-200 hover:text-white truncate transition duration-150" :class="currentRoute.fullPath.includes('ecommerce') && 'hover:text-slate-200'" href="#0" @click.prevent="sidebarExpanded ? parentLink.handleClick() : sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current text-slate-400" :class="currentRoute.fullPath.includes('ecommerce') && 'text-indigo-300'" d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z" />
                      <path class="fill-current text-slate-700" :class="currentRoute.fullPath.includes('ecommerce') && '!text-indigo-600'" d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z" />
                      <path class="fill-current text-slate-600" :class="currentRoute.fullPath.includes('ecommerce') && 'text-indigo-500'" d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z" />                    
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">E-Commerce </span>
                  </div>
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-1" :class="!parentLink.expanded && 'hidden'">
                  <router-link to="/ecommerce/customers" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Customers</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/ecommerce/orders" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Orders</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/ecommerce/invoices" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Invoices</span>
                      </a>
                    </li>
                  </router-link>                  
                  <router-link to="/ecommerce/shop" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Shop</span>
                      </a>
                    </li>
                  </router-link> 
                  <router-link to="/ecommerce/shop-2" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Shop 2</span>
                      </a>
                    </li>
                  </router-link> 
                  <router-link to="/ecommerce/product" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Single Product</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/ecommerce/cart" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Cart</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/ecommerce/cart-2" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Cart 2</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/ecommerce/cart-3" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Cart 3</span>
                      </a>
                    </li>
                  </router-link>                  
                  <router-link to="/ecommerce/pay" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Pay</span>
                      </a>
                    </li>
                  </router-link>
                </ul>
              </div>
            </SidebarLinkGroup> -->
            <!-- Community -->
            <!-- <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('community')">
              <a class="block text-slate-200 hover:text-white truncate transition duration-150" :class="currentRoute.fullPath.includes('community') && 'hover:text-slate-200'" href="#0" @click.prevent="sidebarExpanded ? parentLink.handleClick() : sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current text-slate-600" :class="currentRoute.fullPath.includes('community') && 'text-indigo-500'" d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z" />
                      <path class="fill-current text-slate-400" :class="currentRoute.fullPath.includes('community') && 'text-indigo-300'" d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z" />
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Community</span>
                  </div>
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-1" :class="!parentLink.expanded && 'hidden'">
                  <router-link to="/community/users-tabs" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Users - Tabs</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/community/users-tiles" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Users - Tiles</span>
                      </a>
                    </li>
                  </router-link> 
                  <router-link to="/community/profile" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Profile</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/community/feed" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Feed</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/community/forum" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Forum</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/community/forum-post" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Forum - Post</span>
                      </a>
                    </li>
                  </router-link>                   
                  <router-link to="/community/meetups" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Meetups</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/community/meetups-post" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Meetups - Post</span>
                      </a>
                    </li>
                  </router-link>                  
                </ul>
              </div>
            </SidebarLinkGroup> -->
            <!-- Finance -->
            <!-- <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('finance')">
              <a class="block text-slate-200 hover:text-white truncate transition duration-150" :class="currentRoute.fullPath.includes('finance') && 'hover:text-slate-200'" href="#0" @click.prevent="sidebarExpanded ? parentLink.handleClick() : sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current text-slate-400" :class="currentRoute.fullPath.includes('finance') && 'text-indigo-300'" d="M13 6.068a6.035 6.035 0 0 1 4.932 4.933H24c-.486-5.846-5.154-10.515-11-11v6.067Z" />
                      <path class="fill-current text-slate-700" :class="currentRoute.fullPath.includes('finance') && '!text-indigo-500'" d="M18.007 13c-.474 2.833-2.919 5-5.864 5a5.888 5.888 0 0 1-3.694-1.304L4 20.731C6.131 22.752 8.992 24 12.143 24c6.232 0 11.35-4.851 11.857-11h-5.993Z" />
                      <path class="fill-current text-slate-600" :class="currentRoute.fullPath.includes('finance') && 'text-indigo-600'" d="M6.939 15.007A5.861 5.861 0 0 1 6 11.829c0-2.937 2.167-5.376 5-5.85V0C4.85.507 0 5.614 0 11.83c0 2.695.922 5.174 2.456 7.17l4.483-3.993Z" />                      
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Finance</span>
                  </div>
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-1" :class="!parentLink.expanded && 'hidden'">
                  <router-link to="/finance/cards" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Cards</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/finance/transactions" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Transactions</span>
                      </a>
                    </li>
                  </router-link> 
                  <router-link to="/finance/transaction-details" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Transaction Details</span>
                      </a>
                    </li>
                  </router-link>                
                </ul>
              </div>
            </SidebarLinkGroup>     -->
            <!-- Job Board -->
            <!-- <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('job')">
              <a class="block text-slate-200 hover:text-white truncate transition duration-150" :class="currentRoute.fullPath.includes('job') && 'hover:text-slate-200'" href="#0" @click.prevent="sidebarExpanded ? parentLink.handleClick() : sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current text-slate-700" :class="currentRoute.fullPath.includes('job') && '!text-indigo-600'" d="M4.418 19.612A9.092 9.092 0 0 1 2.59 17.03L.475 19.14c-.848.85-.536 2.395.743 3.673a4.413 4.413 0 0 0 1.677 1.082c.253.086.519.131.787.135.45.011.886-.16 1.208-.474L7 21.44a8.962 8.962 0 0 1-2.582-1.828Z" />
                      <path class="fill-current text-slate-600" :class="currentRoute.fullPath.includes('job') && '!text-indigo-500'" d="M10.034 13.997a11.011 11.011 0 0 1-2.551-3.862L4.595 13.02a2.513 2.513 0 0 0-.4 2.645 6.668 6.668 0 0 0 1.64 2.532 5.525 5.525 0 0 0 3.643 1.824 2.1 2.1 0 0 0 1.534-.587l2.883-2.882a11.156 11.156 0 0 1-3.861-2.556Z" />
                      <path class="fill-current text-slate-400" :class="currentRoute.fullPath.includes('job') && '!text-indigo-300'" d="M21.554 2.471A8.958 8.958 0 0 0 18.167.276a3.105 3.105 0 0 0-3.295.467L9.715 5.888c-1.41 1.408-.665 4.275 1.733 6.668a8.958 8.958 0 0 0 3.387 2.196c.459.157.94.24 1.425.246a2.559 2.559 0 0 0 1.87-.715l5.156-5.146c1.415-1.406.666-4.273-1.732-6.666Zm.318 5.257c-.148.147-.594.2-1.256-.018A7.037 7.037 0 0 1 18.016 6c-1.73-1.728-2.104-3.475-1.73-3.845a.671.671 0 0 1 .465-.129c.27.008.536.057.79.146a7.07 7.07 0 0 1 2.6 1.711c1.73 1.73 2.105 3.472 1.73 3.846Z" />                      
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Job Board</span>
                  </div>
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-1" :class="!parentLink.expanded && 'hidden'">
                  <router-link to="/job/job-listing" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Listing</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/job/job-post" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Job Post</span>
                      </a>
                    </li>
                  </router-link> 
                  <router-link to="/job/company-profile" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Company Profile</span>
                      </a>
                    </li>
                  </router-link>                
                </ul>
              </div>
            </SidebarLinkGroup> -->
            <!-- Tasks -->
            <!-- <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('tasks')">
              <a class="block text-slate-200 hover:text-white truncate transition duration-150" :class="currentRoute.fullPath.includes('tasks') && 'hover:text-slate-200'" href="#0" @click.prevent="sidebarExpanded ? parentLink.handleClick() : sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current text-slate-600" :class="currentRoute.fullPath.includes('tasks') && 'text-indigo-500'" d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z" />
                      <path class="fill-current text-slate-600" :class="currentRoute.fullPath.includes('tasks') && 'text-indigo-500'" d="M1 1h22v23H1z" />
                      <path class="fill-current text-slate-400" :class="currentRoute.fullPath.includes('tasks') && 'text-indigo-300'" d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z" />                      
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Tasks</span>
                  </div>
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-1" :class="!parentLink.expanded && 'hidden'">
                  <router-link to="/tasks/kanban" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Kanban</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/tasks/list" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">List</span>
                      </a>
                    </li>
                  </router-link>              
                </ul>
              </div>
            </SidebarLinkGroup> -->
            <!-- Messages -->
            <!-- <router-link to="/messages" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-slate-900'">
                <a class="block text-slate-200 hover:text-white truncate transition duration-150" :class="isExactActive && 'hover:text-slate-200'" :href="href" @click="navigate">
                  <div class="flex items-center justify-between">
                    <div class="grow flex items-center">
                      <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                        <path class="fill-current text-slate-600" :class="isExactActive && 'text-indigo-500'" d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z" />
                        <path class="fill-current text-slate-400" :class="isExactActive && 'text-indigo-300'" d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
                      </svg>
                      <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Messages</span>
                    </div>
                    <div class="flex flex-shrink-0 ml-2">
                      <span class="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded">4</span>
                    </div>
                  </div>
                </a>
              </li>
            </router-link> -->
            <!-- Inbox -->
            <!-- <router-link to="/inbox" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-slate-900'">
                <a class="block text-slate-200 hover:text-white truncate transition duration-150" :class="isExactActive && 'hover:text-slate-200'" :href="href" @click="navigate">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current text-slate-600" :class="isExactActive && 'text-indigo-500'" d="M16 13v4H8v-4H0l3-9h18l3 9h-8Z" />
                      <path class="fill-current text-slate-400" :class="isExactActive && 'text-indigo-300'" d="m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z" />
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Inbox</span>
                  </div>
                </a>
              </li>
            </router-link> -->
            <!-- Calendar -->
            <!-- <router-link to="/calendar" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-slate-900'">
                <a class="block text-slate-200 hover:text-white truncate transition duration-150" :class="isExactActive && 'hover:text-slate-200'" :href="href" @click="navigate">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current text-slate-600" :class="isExactActive && 'text-indigo-500'" d="M1 3h22v20H1z" />
                      <path class="fill-current text-slate-400" :class="isExactActive && 'text-indigo-300'" d="M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z" />
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Calendar</span>
                  </div>
                </a>
              </li>
            </router-link> -->
            <!-- Campaigns -->
            <!-- <router-link to="/campaigns" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-slate-900'">
                <a class="block text-slate-200 hover:text-white truncate transition duration-150" :class="isExactActive && 'hover:text-slate-200'" :href="href" @click="navigate">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current text-slate-600" :class="isExactActive && 'text-indigo-500'" d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z" />
                      <path class="fill-current text-slate-400" :class="isExactActive && 'text-indigo-300'" d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z" />                    
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Campaigns</span>
                  </div>
                </a>
              </li>
            </router-link>    -->
            <!-- Konsultasi -->
            <router-link to="/konsultasi/table" custom v-slot="{ href, navigate, isExactActive }">
              <li class="mb-1 last:mb-0 px-3 py-2">
                <a class="block text-black hover:text-emerald-500 transition duration-150 truncate"
                  :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                    <div class="flex items-center">
                      <svg fill="#ffffff" viewBox="-3.2 -3.2 38.40 38.40" version="1.1" class="shrink-0 h-6 w-6" stroke="#ffffff"
                        stroke-width="0.00032">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#000000" stroke-width="6">
                          <title>chat</title>
                          <path
                            d="M25.042 18.672v-12.487c0-1.234-1-2.236-2.236-2.236h-19.571c-1.235-0.001-2.236 1.001-2.236 2.236v12.487c0 1.235 1.001 2.236 2.236 2.236h3.729v5.137l5.704-5.137h10.137c1.237 0 2.237-1.001 2.237-2.236zM28.765 8.858h-2.798c0 0 0 9.972 0 10.909s-1.216 2.142-2.153 2.142-10.945 0.055-10.945 0.055c0 1.235 1.001 1.986 2.236 1.986h4.309l5.622 5.102-0.007-5.102h3.736c1.236 0 2.236-0.751 2.236-1.986v-10.932c0-1.234-1-2.174-2.236-2.174z">
                          </path>
                        </g>
                        <g id="SVGRepo_iconCarrier">
                          <title>chat</title>
                          <path
                            d="M25.042 18.672v-12.487c0-1.234-1-2.236-2.236-2.236h-19.571c-1.235-0.001-2.236 1.001-2.236 2.236v12.487c0 1.235 1.001 2.236 2.236 2.236h3.729v5.137l5.704-5.137h10.137c1.237 0 2.237-1.001 2.237-2.236zM28.765 8.858h-2.798c0 0 0 9.972 0 10.909s-1.216 2.142-2.153 2.142-10.945 0.055-10.945 0.055c0 1.235 1.001 1.986 2.236 1.986h4.309l5.622 5.102-0.007-5.102h3.736c1.236 0 2.236-0.751 2.236-1.986v-10.932c0-1.234-1-2.174-2.236-2.174z">
                          </path>
                        </g>
                      </svg>
                      <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                        Konsultasi</span>
                    </div>
                </a>
              </li>
            </router-link>
            <!-- Pelatihan -->
            <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('settings')">
              <a class="block text-black hover:text-black-700 truncate transition duration-150"
                :class="currentRoute.fullPath.includes('settings') && 'hover:text-emerald-500'" href="#0"
                @click.prevent="sidebarExpanded ? parentLink.handleClick() : sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg version="1.1" id="_x32_" class="shrink h-6 w-6"
                      viewBox="0 0 512 512" xml:space="preserve" fill="#000000">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#000000" stroke-width="8.192">
                        <g>
                          <path class="st0"
                            d="M470.531,378.938c0.031-0.422,0.141-0.844,0.141-1.281v-248c0-12.875-10.547-23.406-23.406-23.406H64.734 c-12.859,0-23.391,10.531-23.391,23.406v248c0,0.438,0.109,0.859,0.141,1.281H0v6.391c0,11.219,9.188,20.422,20.406,20.422h471.156 c11.25,0,20.438-9.203,20.438-20.422v-6.391H470.531z M440.25,370.625H71.75V136.672h368.5V370.625z">
                          </path>
                        </g>
                      </g>
                      <g id="SVGRepo_iconCarrier">
                        <g>
                          <path class="st0"
                            d="M470.531,378.938c0.031-0.422,0.141-0.844,0.141-1.281v-248c0-12.875-10.547-23.406-23.406-23.406H64.734 c-12.859,0-23.391,10.531-23.391,23.406v248c0,0.438,0.109,0.859,0.141,1.281H0v6.391c0,11.219,9.188,20.422,20.406,20.422h471.156 c11.25,0,20.438-9.203,20.438-20.422v-6.391H470.531z M440.25,370.625H71.75V136.672h368.5V370.625z">
                          </path>
                        </g>
                      </g>
                    </svg>
                    <span
                      class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Pelatihan</span>
                  </div>
                  <!-- Icon -->
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-black" :class="parentLink.expanded && 'rotate-180'"
                      viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-1" :class="!parentLink.expanded && 'hidden'">
                  <router-link to="/pelatihan/table" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-black hover:text-emerald-500 transition duration-150 truncate"
                        :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                        <span class="text-sm font-light lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Pengajuan</span>
                      </a>
                    </li>
                  </router-link>
                  <!-- <router-link to="/pengajuanexpert/table" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-black hover:text-emerald-500 transition duration-150 truncate"
                        :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Kebutuhan khusus</span>
                      </a>
                    </li>
                  </router-link> -->
                  <router-link to="/pengguna/table" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-black hover:text-emerald-500 transition duration-150 truncate"
                        :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                        <span class="text-sm font-light lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Pelatihan reguler</span>
                      </a>
                    </li>
                  </router-link>                                                                   
                </ul>
              </div>
            </SidebarLinkGroup>
            <!-- Undang Expert -->
            <router-link to="/undangexpert/table" custom v-slot="{ href, navigate, isExactActive }">
              <li class="mb-1 last:mb-0 px-3 py-2">
                  <a class="block text-black hover:text-emerald-500 transition duration-150 truncate"
                    :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                      <div class="flex items-center">
                        <svg fill="#000000" height="200px" width="200px" version="1.1" class="shrink h-6 w-6"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <g id="group">
                            <path
                              d="M24,15.9c0-2.8-1.5-5-3.7-6.1C21.3,8.8,22,7.5,22,6c0-2.8-2.2-5-5-5c-2.1,0-3.8,1.2-4.6,3c0,0,0,0,0,0c-0.1,0-0.3,0-0.4,0 c-0.1,0-0.3,0-0.4,0c0,0,0,0,0,0C10.8,2.2,9.1,1,7,1C4.2,1,2,3.2,2,6c0,1.5,0.7,2.8,1.7,3.8C1.5,10.9,0,13.2,0,15.9V20h5v3h14v-3h5 V15.9z M17,3c1.7,0,3,1.3,3,3c0,1.6-1.3,3-3,3c0-1.9-1.1-3.5-2.7-4.4c0,0,0,0,0,0C14.8,3.6,15.8,3,17,3z M13.4,4.2 C13.4,4.2,13.4,4.2,13.4,4.2C13.4,4.2,13.4,4.2,13.4,4.2z M15,9c0,1.7-1.3,3-3,3s-3-1.3-3-3s1.3-3,3-3S15,7.3,15,9z M10.6,4.2 C10.6,4.2,10.6,4.2,10.6,4.2C10.6,4.2,10.6,4.2,10.6,4.2z M7,3c1.2,0,2.2,0.6,2.7,1.6C8.1,5.5,7,7.1,7,9C5.3,9,4,7.7,4,6S5.3,3,7,3 z M5.1,18H2v-2.1C2,13.1,4.1,11,7,11v0c0,0,0,0,0,0c0.1,0,0.2,0,0.3,0c0,0,0,0,0,0c0.3,0.7,0.8,1.3,1.3,1.8 C6.7,13.8,5.4,15.7,5.1,18z M17,21H7v-2.1c0-2.8,2.2-4.9,5-4.9c2.9,0,5,2.1,5,4.9V21z M22,18h-3.1c-0.3-2.3-1.7-4.2-3.7-5.2 c0.6-0.5,1-1.1,1.3-1.8c0.1,0,0.2,0,0.4,0v0c2.9,0,5,2.1,5,4.9V18z">
                            </path>
                          </g>
                        </g>
                      </svg>
                      <span
                        class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Undang
                        Expert</span>
                      </div>
                  </a>
                </li>
            </router-link>
            <!-- Rekrut Expert -->
            <router-link to="/rekrutexpert/table" custom v-slot="{ href, navigate, isExactActive }">
              <li class="mb-1 last:mb-0 px-3 py-2">
                  <a class="block text-black hover:text-emerald-500 transition duration-150 truncate"
                    :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                      <div class="flex items-center">
                        <svg fill="#000000" version="1.1" id="Capa_1" class="shrink h-6 w-6"
                      viewBox="0 0 383.235 383.235" xml:space="preserve">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <g>
                              <g>
                                <path
                                  d="M322.618,73.735h-38V55.096C284.618,24.716,259.902,0,229.521,0h-75.808c-30.38,0-55.096,24.716-55.096,55.096v18.639 h-38c-27.614,0-50,22.386-50,50v62.883h362v-62.883C372.618,96.12,350.232,73.735,322.618,73.735z M244.618,73.735h-106V55.096 c0-8.324,6.771-15.096,15.096-15.096h75.809c8.324,0,15.096,6.772,15.096,15.096L244.618,73.735L244.618,73.735z">
                                </path>
                                <path
                                  d="M323.284,244.333c0,6.425-5.207,11.632-11.631,11.632h-41.404c-6.424,0-11.631-5.207-11.631-11.632v-20.702h-134v20.702 c0,6.425-5.207,11.632-11.631,11.632H71.581c-6.422,0-11.629-5.207-11.629-11.632v-20.702H10.618v109.604 c0,27.613,22.386,50,50,50h262c27.614,0,50-22.387,50-50V223.631h-49.334V244.333L323.284,244.333z">
                                </path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <span
                        class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Rekrut
                        Expert</span>
                      </div>
                  </a>
                </li>
            </router-link>
            <!-- Pengajuan Kebutuhan Expert -->
              <router-link to="/kebutuhnexpert/table" custom v-slot="{ href, navigate, isExactActive }">
                <li class="mb-1 last:mb-0 px-3 py-2">
                    <a class="block text-black hover:text-emerald-500 transition duration-150"
                      :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                        <div class="flex items-center">
                              <svg version="1.1" id="Layer_1" class="shrink h-6 w-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.992 511.992" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#000000;" d="M460.403,386.243l-1.812-0.531c-26.5-7.125-35.469-13.953-47.25-18.438 c-41.843-15.938-52.717-27.436-55.498-32.857c-0.109-0.203-0.188-0.406-0.281-0.609l-0.344-48.594L256,284.09l-99.225,1.125 l-0.344,48.594c-0.086,0.203-0.164,0.406-0.266,0.609c-2.781,5.422-13.672,16.92-55.508,32.857 c-11.796,4.484-20.757,11.312-47.248,18.438l-1.82,0.531c-24.117,7.969-40.344,30.328-40.344,55.562v70.186h244.754h244.747v-70.186 C500.746,416.572,484.527,394.213,460.403,386.243z"></path> <path style="fill:#000000;" d="M393.684,191.184c0,89.467-85.278,171.778-137.685,171.778c-52.397,0-137.678-82.311-137.678-171.778 c0-89.459,61.64-148.482,137.678-148.482C332.03,42.702,393.684,101.724,393.684,191.184z"></path> <path style="fill:#000000;" d="M383.872,63.577H127.885c-5.898,0-10.68,4.773-10.68,10.672v85.413c0,4.898,3.328,9.164,8.07,10.352 c1.789,0.453,44.727,11,130.725,11c85.999,0,128.716-10.547,130.481-11c4.734-1.195,8.062-5.461,8.062-10.352V74.248 C394.544,68.351,389.763,63.577,383.872,63.577z"></path> <path style="fill:#000000;" d="M482.215,42.89L258.008,0.188c-1.32-0.25-2.672-0.25-3.992,0L29.808,42.89 c-5.039,0.961-8.68,5.367-8.68,10.492s3.641,9.523,8.68,10.484l224.207,42.71c0.656,0.125,1.328,0.188,1.992,0.188 c0.672,0,1.344-0.062,2-0.188l224.207-42.71c5.031-0.961,8.688-5.359,8.688-10.484C490.902,48.257,487.246,43.85,482.215,42.89z"></path> <path style="fill:#000000;" d="M480.215,138.309c-5.891,0-10.671-4.781-10.671-10.679V53.382c0-5.898,4.78-10.68,10.671-10.68 c5.906,0,10.688,4.781,10.688,10.68v74.249C490.902,133.529,486.121,138.309,480.215,138.309z"></path> <path style="fill:#000000;" d="M460.403,386.243l-1.812-0.531c-26.5-7.125-35.469-13.953-47.25-18.438 c-16.422-6.25-28.062-11.828-36.344-16.625L256,437.243l-118.717-86.75c-8.281,4.812-20.008,10.438-36.625,16.781 c-11.796,4.484-20.757,11.312-47.248,18.438l-1.82,0.531c-24.117,7.969-40.344,30.328-40.344,55.562v70.186H256h244.746v-70.186 C500.746,416.572,484.527,394.213,460.403,386.243z"></path> <path style="fill:#000000;" d="M480.215,64.053h-224.34c-5.898,0-10.68-4.781-10.68-10.671c0-5.898,4.781-10.68,10.68-10.68h224.34 c5.906,0,10.688,4.781,10.688,10.68C490.902,59.272,486.121,64.053,480.215,64.053z"></path> </g></svg>
                        <span
                          class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Pengajuan Kebutuhan Expert</span>
                        </div>
                    </a>
                  </li>
              </router-link>
            <hr class="h-px my-3 bg-gray-300 border-0">
            <!-- Settings -->
            <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('settings')">
              <a class="block text-black hover:text-black-700 truncate transition duration-150" :class="currentRoute.fullPath.includes('settings') && 'hover:text-emerald-500'" href="#0" @click.prevent="sidebarExpanded ? parentLink.handleClick() : sidebarExpanded = true">            
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg viewBox="0 0 24 24" fill="none" class="shrink h-6 w-6">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.6319 1.87859C11.1577 0.707136 12.8208 0.707139 13.3466 1.87859L15.9147 7.60055L22.1502 8.2748C23.4268 8.41284 23.9408 9.9946 22.9891 10.8566L18.3408 15.0672L19.6264 21.2059C19.8896 22.4627 18.5441 23.4403 17.4302 22.8016L11.9893 19.6819L6.54831 22.8016C5.43439 23.4403 4.08887 22.4627 4.35207 21.2059L5.6377 15.0672L0.989383 10.8566C0.0377377 9.99459 0.551685 8.41284 1.82827 8.2748L8.06378 7.60055L10.6319 1.87859ZM11.9893 3.7387L9.76817 8.68742C9.55183 9.16946 9.09606 9.50059 8.57077 9.55739L3.1779 10.1405L7.19806 13.7821C7.58965 14.1368 7.76374 14.6726 7.65543 15.1898L6.54354 20.4989L11.2492 17.8008C11.7076 17.538 12.2709 17.538 12.7293 17.8008L17.435 20.4989L16.3231 15.1898C16.2148 14.6726 16.3888 14.1369 16.7804 13.7821L20.8006 10.1405L15.4077 9.55739C14.8824 9.50059 14.4267 9.16946 14.2103 8.68742L11.9893 3.7387Z"
                          fill="#000000"></path>
                      </g>
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Pengaturan</span>
                  </div>
                  <!-- Icon -->
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-black" :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-1" :class="!parentLink.expanded && 'hidden'">
                  <router-link to="/dashboard/tablejadiexpert" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-black hover:text-emerald-500 transition duration-150 truncate"
                        :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                        <span
                          class="text-sm font-light lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Experts</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/pengajuanexpert/table" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-black hover:text-emerald-500 transition duration-150 truncate"
                        :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                        <span class="text-sm font-light lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Pengajuan Expert</span>
                      </a>
                    </li>
                  </router-link>
                  <!-- <router-link to="/settings/bidang/tabel" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-black hover:text-emerald-500 transition duration-150 truncate" :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Bidang</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/settings/kelas/tabel" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-black hover:text-emerald-500 transition duration-150 truncate" :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Kelas</span>
                      </a>
                    </li>
                  </router-link> -->
                  <router-link to="/pengguna/table" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-black hover:text-emerald-500 transition duration-150 truncate"
                        :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                        <span class="text-sm font-light lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                          Pengguna</span>
                      </a>
                    </li>
                  </router-link>
                  <!-- <router-link to="/settings/account" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-black hover:text-emerald-500 transition duration-150 truncate" :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">My Account</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/settings/notifications" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-black hover:text-emerald-500 transition duration-150 truncate" :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">My Notifications</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/settings/apps" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-black hover:text-emerald-500 transition duration-150 truncate" :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Connected Apps</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/settings/plans" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-black hover:text-emerald-500 transition duration-150 truncate" :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Plans</span>
                      </a>
                    </li>
                  </router-link>                       
                  <router-link to="/settings/billing" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-black hover:text-emerald-500 transition duration-150 truncate" :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Billing & Invoices</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/settings/feedback" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-black hover:text-emerald-500 transition duration-150 truncate" :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Give Feedback</span>
                      </a>
                    </li>
                  </router-link> -->
                </ul>
              </div>
            </SidebarLinkGroup>
            <hr class="h-px my-3 bg-gray-300 border-0">
            <!-- Profil Pengguna -->
            <router-link to="/profilpengguna" custom v-slot="{ href, navigate, isExactActive }">
              <li class="mb-1 last:mb-0 px-3 py-2">
                <a class="block text-black hover:text-emerald-500 transition duration-150 truncate"
                  :class="isExactActive && '!text-emerald-500'" :href="href" @click="navigate">
                  <div class="flex items-center">
                    <svg viewBox="0 0 24 24" fill="none" class="shrink w-6 h-6">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                          stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                          d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                          stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                    </svg>
                    <span
                      class="text-sm text-black font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Profil
                      Pengguna</span>
                  </div>
                </a>
              </li>
            </router-link>
            <!-- Utility -->
            <!-- <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('utility')">
              <a class="block text-slate-200 hover:text-white truncate transition duration-150" :class="currentRoute.fullPath.includes('utility') && 'hover:text-slate-200'" href="#0" @click.prevent="sidebarExpanded ? parentLink.handleClick() : sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <circle class="fill-current text-slate-400" :class="currentRoute.fullPath.includes('utility') && 'text-indigo-300'" cx="18.5" cy="5.5" r="4.5" />
                      <circle class="fill-current text-slate-600" :class="currentRoute.fullPath.includes('utility') && 'text-indigo-500'" cx="5.5" cy="5.5" r="4.5" />
                      <circle class="fill-current text-slate-600" :class="currentRoute.fullPath.includes('utility') && 'text-indigo-500'" cx="18.5" cy="18.5" r="4.5" />
                      <circle class="fill-current text-slate-400" :class="currentRoute.fullPath.includes('utility') && 'text-indigo-300'" cx="5.5" cy="18.5" r="4.5" />                    
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Utility</span>
                  </div>
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-1" :class="!parentLink.expanded && 'hidden'">
                  <router-link to="/utility/changelog" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Changelog</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/utility/roadmap" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Roadmap</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/utility/faqs" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">FAQs</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/utility/empty-state" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Empty State</span>
                      </a>
                    </li>
                  </router-link>  
                  <router-link to="/utility/404" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">404</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/utility/knowledge-base" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Knowledge Base</span>
                      </a>
                    </li>
                  </router-link>                  
                </ul>
              </div>
            </SidebarLinkGroup>           -->
          </ul>
        </div>
        <!-- More group -->
        
        <!-- <div>
          <h3 class="text-xs uppercase text-slate-500 font-semibold pl-3">
            <span class="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6" aria-hidden="true">•••</span>
            <span class="lg:hidden lg:sidebar-expanded:block 2xl:block">More</span>
          </h3>
          <ul class="mt-3">
            <SidebarLinkGroup v-slot="parentLink">
              <a class="block text-slate-200 hover:text-white truncate transition duration-150" :class="parentLink.expanded && 'hover:text-slate-200'" href="#0" @click.prevent="sidebarExpanded ? parentLink.handleClick() : sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current text-slate-600" d="M8.07 16H10V8H8.07a8 8 0 110 8z" />
                      <path class="fill-current text-slate-400" d="M15 12L8 6v5H0v2h8v5z" />
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Authentication</span>
                  </div>
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-1" :class="!parentLink.expanded && 'hidden'">
                  <router-link to="/signin" custom v-slot="{ href, navigate }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Sign in</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/signup" custom v-slot="{ href, navigate }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Sign up</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/reset-password" custom v-slot="{ href, navigate }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Reset Password</span>
                      </a>
                    </li>
                  </router-link>                                  
                </ul>
              </div>
            </SidebarLinkGroup>
            <SidebarLinkGroup v-slot="parentLink">
              <a class="block text-slate-200 hover:text-white truncate transition duration-150" :class="parentLink.expanded && 'hover:text-slate-200'" href="#0" @click.prevent="sidebarExpanded ? parentLink.handleClick() : sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current text-slate-600" d="M19 5h1v14h-2V7.414L5.707 19.707 5 19H4V5h2v11.586L18.293 4.293 19 5Z" />
                      <path class="fill-current text-slate-400" d="M5 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM5 23a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm14 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Onboarding</span>
                  </div>
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-1" :class="!parentLink.expanded && 'hidden'">
                  <router-link to="/onboarding-01" custom v-slot="{ href, navigate }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Step 1</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/onboarding-02" custom v-slot="{ href, navigate }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Step 2</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/onboarding-03" custom v-slot="{ href, navigate }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Step 3</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/onboarding-04" custom v-slot="{ href, navigate }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Step 4</span>
                      </a>
                    </li>
                  </router-link>                                                    
                </ul>
              </div>
            </SidebarLinkGroup>
            <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('component')">
              <a class="block text-slate-200 hover:text-white truncate transition duration-150" :class="currentRoute.fullPath.includes('component') && 'hover:text-slate-200'" href="#0" @click.prevent="sidebarExpanded ? parentLink.handleClick() : sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <circle class="fill-current text-slate-600" :class="currentRoute.fullPath.includes('component') && 'text-indigo-500'" cx="16" cy="8" r="8" />
                      <circle class="fill-current text-slate-400" :class="currentRoute.fullPath.includes('component') && 'text-indigo-300'" cx="8" cy="16" r="8" />                      
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Components </span>
                  </div>
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-1" :class="!parentLink.expanded && 'hidden'">
                  <router-link to="/component/button" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Button</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/form" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Input Form</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/dropdown" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Dropdown</span>
                      </a>
                    </li>
                  </router-link> 
                  <router-link to="/component/alert" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Alert & Banner</span>
                      </a>
                    </li>
                  </router-link> 
                  <router-link to="/component/modal" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Modal</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/pagination" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Pagination</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/tabs" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Tabs</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/breadcrumb" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Breadcrumb</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/badge" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Badge</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/avatar" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Avatar</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/tooltip" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Tooltip</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/accordion" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Accordion</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/component/icons" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block text-slate-400 hover:text-slate-200 transition duration-150 truncate" :class="isExactActive && '!text-indigo-500'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Icons</span>
                      </a>
                    </li>
                  </router-link>
                </ul>
              </div>
            </SidebarLinkGroup>            
          </ul>
        </div> -->
      </div>
      <!-- Expand / collapse button -->
      <div class="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
        <div class="px-3 py-2">
          <button @click.prevent="sidebarExpanded = !sidebarExpanded">
            <span class="sr-only">Expand / collapse sidebar</span>
            <svg class="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
              <path class="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
              <path class="text-slate-600" d="M3 23H1V1h2z" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import IconKonsultasi from '../partials/icons/icon-konsultasi.vue'
import IconPelatihan from '../partials/icons/icon-pelatihan.vue'
import IconUndangExpert from '../partials/icons/icon-undang-expert.vue'
import IconRekrutExpert from '../partials/icons/icon-rekrut-expert.vue'

import SidebarLinkGroup from './SidebarLinkGroup.vue'

export default {
  name: 'Sidebar',
  props: ['sidebarOpen'],
  components: {
    SidebarLinkGroup,
  },  
  setup(props, { emit }) {

    const trigger = ref(null)
    const sidebar = ref(null)

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
    const sidebarExpanded = ref(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true')

    const currentRoute = useRouter().currentRoute.value

    // close on click outside
    const clickHandler = ({ target }) => {
      if (!sidebar.value || !trigger.value) return
      if (
        !props.sidebarOpen ||
        sidebar.value.contains(target) ||
        trigger.value.contains(target)
      ) return
      emit('close-sidebar')
    }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!props.sidebarOpen || keyCode !== 27) return
      emit('close-sidebar')
    } 

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    watch(sidebarExpanded, () => {
      localStorage.setItem('sidebar-expanded', sidebarExpanded.value)
      if (sidebarExpanded.value) {
        document.querySelector('body').classList.add('sidebar-expanded')
      } else {
        document.querySelector('body').classList.remove('sidebar-expanded')
      }
    })

    return {
      trigger,
      sidebar,
      sidebarExpanded,
      currentRoute,
    }
  },
}
</script>