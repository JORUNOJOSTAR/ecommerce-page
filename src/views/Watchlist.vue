<template>
    <div class="container lg:w-2/3 mx-auto p-5">

        <h1 class="text-3xl font-bold m-2 mb-5">My WatchList Items</h1>
        <div class="bg-white rounded-lg p-3">
            <div v-for="item in watchlistStore.watchList" :key="item.id">
                <!-- Watchlist Item -->
                <div class="flex flex-col sm:flex-row items-center gap-4">
                    <img :src="item.image" class="w-36 aspect-[3/2] object-cover" alt="">
                    <div class="flex flex-col justify-between flex-1">
                        <div class="flex justify-between mb-3">
                            <h3>
                                {{ item.title }}
                            </h3>
                            <span class="text-lg font-semibold">
                                {{ item.price }}
                            </span>
                        </div>
                        <div class="flex justify-end items-center">
                            <button @click="watchlistStore.removeFromWatchList(item.id)" class="text-purple-600 hover:text-purple-500">Remove</button>
                        </div>
                    </div>
                </div>
                <!-- Watchlist Item -->
                <hr class="my-3">
            </div>
            <div v-if="watchlistStore.watchListItems===0" class="text-center py-16">
                <svg class="mx-auto h-24 w-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <h3 class="mt-6 text-xl font-semibold text-gray-900">Your watchlist is empty</h3>
                <p class="mt-2 text-gray-500">Save your favorite items here to keep track of them!</p>
                <router-link to="/" class="inline-block mt-6 btn-primary">
                    Browse Products
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useWatchListStore } from '@/stores/watchlist';
const watchlistStore = useWatchListStore();
</script>