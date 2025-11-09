<template>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 p-5">
        <!-- Product item -->
        <div
            class="bg-white  rounded-md shadow border border-gray-300 hover:border-purple-600 transition-colors overflow-hidden">
            <RouterLink :to="{ name: 'product' }">
                <img src="/src/img/1_1.jpg" alt="" class="rounded-t-md hover:scale-105 transition hover:rotate-1">
            </RouterLink>
            <div class="p-3">
                <h3>
                    <RouterLink :to="{ name: 'product' }" class="hover:text-gray-800 text-black font-semibold">
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old
                    </RouterLink>
                </h3>
                <p class="text-xl font-bold">17.99</p>
                <div class="flex justify-between mt-3">
                    <button @click="cartStore.addToWatchList(1)"
                        class="cursor-pointer flex items-center justify-center text-purple-600 transition-colors hover:text-white hover:bg-purple-500 active:bg-purple-800 border-purple-500 border-2  rounded-full w-10 h-10"
                        :class="cartStore.isInWatchList(1) ? 'bg-purple-500 text-white' : ''">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>
                    <button class="flex items-center btn-primary" @click="cartStore.addToCart">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-6 w-6 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
        <!-- Product item -->

        <!-- Product item -->
        <div
            class="bg-white  rounded-md shadow border border-gray-300 hover:border-purple-600 transition-colors overflow-hidden">
            <RouterLink :to="{ name: 'product' }">
                <img src="/src/img/1_1.jpg" alt="" class="rounded-t-md hover:scale-105 transition hover:rotate-1">
            </RouterLink>
            <div class="p-3">
                <h3>
                    <RouterLink :to="{ name: 'product' }" class="hover:text-gray-800 text-black font-semibold">
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old
                    </RouterLink>
                </h3>
                <p class="text-xl font-bold">17.99</p>
                <div class="flex justify-between mt-3">
                    <button @click="cartStore.addToWatchList(2)"
                        class="cursor-pointer flex items-center justify-center text-purple-600 transition-colors hover:text-white hover:bg-purple-500 active:bg-purple-800 border-purple-500 border-2  rounded-full w-10 h-10"
                        :class="cartStore.isInWatchList(2) ? 'bg-purple-500 text-white' : ''">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>
                    <button
                        class="flex items-center bg-purple-500 text-white py-2 px-3 rounded hover:bg-purple-700 active:bg-purple-900 transition-colors shadow-md"
                        @click="cartStore.addToCart">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-6 w-6 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
        <!-- Product item -->

        <!-- Product item -->
        <div
            class="bg-white  rounded-md shadow border border-gray-300 hover:border-purple-600 transition-colors overflow-hidden">
            <RouterLink :to="{ name: 'product' }">
                <img src="/src/img/1_1.jpg" alt="" class="rounded-t-md hover:scale-105 transition hover:rotate-1">
            </RouterLink>
            <div class="p-3">
                <h3>
                    <RouterLink :to="{ name: 'product' }" class="hover:text-gray-800 text-black font-semibold">
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old
                    </RouterLink>
                </h3>
                <p class="text-xl font-bold">17.99</p>
                <div class="flex justify-between mt-3">
                    <button @click="cartStore.addToWatchList(3)"
                        class="cursor-pointer flex items-center justify-center text-purple-600 transition-colors hover:text-white hover:bg-purple-500 active:bg-purple-800 border-purple-500 border-2  rounded-full w-10 h-10"
                        :class="cartStore.isInWatchList(3) ? 'bg-purple-500 text-white' : ''">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>
                    <button
                        class="flex items-center bg-purple-500 text-white py-2 px-3 rounded hover:bg-purple-700 active:bg-purple-900 transition-colors shadow-md"
                        @click="cartStore.addToCart">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-6 w-6 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
        <!-- Product item -->

        <!-- Product item -->
        <div
            class="bg-white  rounded-md shadow border border-gray-300 hover:border-purple-600 transition-colors overflow-hidden">
            <RouterLink :to="{ name: 'product' }">
                <img src="/src/img/1_1.jpg" alt="" class="rounded-t-md hover:scale-105 transition hover:rotate-1">
            </RouterLink>
            <div class="p-3">
                <h3>
                    <RouterLink :to="{ name: 'product' }" class="hover:text-gray-800 text-black font-semibold">
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old
                    </RouterLink>
                </h3>
                <p class="text-xl font-bold">17.99</p>
                <div class="flex justify-between mt-3">
                    <button @click="cartStore.addToWatchList(4)"
                        class="cursor-pointer flex items-center justify-center text-purple-600 transition-colors hover:text-white hover:bg-purple-500 active:bg-purple-800 border-purple-500 border-2  rounded-full w-10 h-10"
                        :class="cartStore.isInWatchList(4) ? 'bg-purple-500 text-white' : ''">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>
                    <button
                        class="flex items-center bg-purple-500 text-white py-2 px-3 rounded hover:bg-purple-700 active:bg-purple-900 transition-colors shadow-md"
                        @click="cartStore.addToCart">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-6 w-6 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
        <!-- Product item -->
    </div>
    <div class="absolute w-[400px] -ml-[200px] left-1/2 top-8 py-2 px-4 pb-4 bg-emerald-500 text-white"
        v-if="cartStore.visible">
        <div class="flex justify-between">
            <div class="font-semibold">{{ cartStore.message }}</div>
            <button
                class="flex items-center justify-center w-[30px] h-[30px] rounded-full hover:bg-black/10 transition-colors"
                @click="cartStore.close">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <!-- Progress -->
        <div>
            <div class="absolute left-0 bottom-0 right-0 h-[6px] bg-black/10"
                :style="{ width: cartStore.percent + '%' }">
            </div>
        </div>
    </div>
</template>
<script setup>
import { useCartStore } from '@/stores/cart';
const cartStore = useCartStore();
</script>