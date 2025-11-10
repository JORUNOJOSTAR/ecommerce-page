<template>
  <header class="flex justify-between bg-slate-800 text-white px-4">
    <div class="py-navbar-item">
      <RouterLink :to="{ name: 'home' }"> Logo </RouterLink>
    </div>
    <div ref="mobileMenuRef" :class="{
      'block fixed z-20 top-0  bottom-0 shadow-2xl w-[220px]  bg-slate-900 md:hidden transition-all duration-300': true,
      'left-[-220px]': !moblieMenuOpen,
      'left-0': moblieMenuOpen
    }">
      <ul>
        <li>
          <RouterLink :to="{ name: 'home' }"
            class="flex items-center py-2 px-navbar-item transition-all hover:bg-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink to="#" class="block py-2 px-navbar-item transition-all hover:bg-slate-700">Category</RouterLink>
        </li>
        <li>
          <RouterLink to="#" class="block py-2 px-navbar-item transition-all hover:bg-slate-700">Something</RouterLink>
        </li>
      </ul>
      <ul>
        <li>
          <RouterLink :to="{ name: 'cart' }"
            class="flex justify-between gap-2 py-2 px-navbar-item transition-all hover:bg-slate-700">
            <div class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              Cart
            </div>
            <small class="py-[2px] px-[8px] rounded-full bg-red-500" v-if="cartStore.cartItems">{{ cartStore.cartItems
            }}</small>
          </RouterLink>
        </li>
        <li class="relative" ref="mobileDropdownRef">
          <button class="flex justify-between items-center py-2 px-navbar-item transition-all hover:bg-slate-700 w-full"
            @click="moblieDropDownOpen = !moblieDropDownOpen">
            My Account
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5 ml-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <ul class="w-full bg-slate-800 overflow-hidden transition-all duration-300 ease-in-out" :class="{
            'max-h-0 opacity-0': !moblieDropDownOpen,
            'max-h-96 opacity-100': moblieDropDownOpen
          }">
            <li>
              <RouterLink :to="{ name: 'profile' }"
                class="flex items-center py-2 px-4 transition-all hover:bg-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                My Profile
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'watchlist' }"
                class="flex justify-between items-center py-2 px-4 transition-all hover:bg-slate-700">
                <div class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  Watchlist
                </div>
                <small class="z-20 top-2 -right-1 py-[2px] px-[8px] rounded-full bg-red-500"
                  v-if="watchlistStore.watchListItems">{{ watchlistStore.watchListItems }}</small>
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'orders' }"
                class="flex items-center py-2 px-4 transition-all hover:bg-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                </svg>
                Orders
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'logout' }"
                class="flex items-center py-2 px-4 transition-all hover:bg-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
                Logout
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="my-3">
          <RouterLink :to="{ name: 'login' }"
            class="flex items-center py-2 px-navbar-item transition-all hover:bg-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
            </svg>
            Login
          </RouterLink>
        </li>
        <li class="px-3">
          <RouterLink :to="{ name: 'signup' }"
            class="flex items-center py-2 px-3 rounded transition-colors bg-emerald-500 hover:bg-emerald-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            Signup for free
          </RouterLink>
        </li>
      </ul>
    </div>
    <nav class="hidden md:block">
      <ul class="grid grid-flow-col">
        <li>
          <RouterLink :to="{ name: 'home' }"
            class="flex items-center py-navbar-item px-navbar-item transition-all hover:bg-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 mr-3">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink to="#" class="block py-navbar-item px-navbar-item transition-all hover:bg-slate-700">Category
          </RouterLink>
        </li>
        <li>
          <RouterLink to="#" class="block py-navbar-item px-navbar-item transition-all hover:bg-slate-700">Something
          </RouterLink>
        </li>
      </ul>
    </nav>
    <nav class="hidden md:block">
      <ul class="grid grid-flow-col items-center">
        <li class="relative">
          <RouterLink :to="{ name: 'cart' }"
            class="flex items-center gap-2 py-navbar-item px-navbar-item transition-all hover:bg-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            Cart
            <small class="z-20 absolute top-2 -right-1 py-[2px] px-[8px] rounded-full bg-red-500"
              v-if="cartStore.cartItems">{{ cartStore.cartItems }}</small>
          </RouterLink>
        </li>
        <li class="relative" ref="desktopDropdownRef">
          <button @click="desktopDropDownOpen = !desktopDropDownOpen"
            class="flex items-center py-navbar-item px-navbar-item transition-all hover:bg-slate-700">
            My Account
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-5 h-5 ml-3">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <ul class="absolute z-10 w-full right-0 bg-slate-800" v-show="desktopDropDownOpen">
            <li>
              <RouterLink :to="{ name: 'profile' }"
                class="flex items-center py-2 px-4 transition-all hover:bg-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                My Profile
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'watchlist' }"
                class="flex justify-between items-center py-2 px-4 transition-all hover:bg-slate-700">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  Watchlist
                </div>
                <small class="z-20 top-2 -right-1 py-[2px] px-[8px] rounded-full bg-red-500"
                  v-if="watchlistStore.watchListItems">{{ watchlistStore.watchListItems }}</small>
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'orders' }"
                class="flex items-center py-2 px-4 transition-all hover:bg-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                </svg>
                Orders
              </RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'logout' }"
                class="flex items-center py-2 px-4 transition-all hover:bg-slate-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
                Logout
              </RouterLink>
            </li>
          </ul>
        </li>
        <li>
          <RouterLink :to="{ name: 'login' }"
            class="flex items-center py-navbar-item px-navbar-item transition-all hover:bg-slate-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
            </svg>
            Login
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'signup' }"
            class="flex items-center py-2 px-3 rounded transition-colors bg-emerald-500 hover:bg-emerald-600 ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            Signup for free
          </RouterLink>
        </li>
      </ul>
    </nav>
    <button ref="hamburgerMenuRef" class="block md:hidden" @click="moblieMenuOpen = !moblieMenuOpen">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </header>
</template>
<script setup>
import { ref } from "vue";
import { useCartStore } from "@/stores/cart";
import { useWatchListStore } from "@/stores/watchlist";
import userClickOutside from "@/composables/userClickOutside";
const moblieMenuOpen      = ref(false);
const moblieDropDownOpen  = ref(false);
const desktopDropDownOpen = ref(false);
const mobileDropdownRef   = ref(null);
const desktopDropdownRef  = ref(null);
const mobileMenuRef       = ref(null);
const hamburgerMenuRef    = ref(null);
const cartStore           = useCartStore();
const watchlistStore      = useWatchListStore();

userClickOutside(mobileDropdownRef , () => { moblieDropDownOpen.value  = false; });
userClickOutside(desktopDropdownRef, () => { desktopDropDownOpen.value = false; });
userClickOutside(mobileMenuRef, (targetEvent) => {
  // Only close if NOT clicking on hamburger menu
  if (hamburgerMenuRef.value && !hamburgerMenuRef.value.contains(targetEvent)) {
        moblieMenuOpen.value = false;
  }
});

</script>