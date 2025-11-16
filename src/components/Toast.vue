<template>
    <div class="absolute w-[400px] -ml-[200px] left-1/2 top-8 py-2 px-4 pb-4 bg-emerald-500 text-white"
        v-if="toastStore.visible">
        <div class="flex justify-between">
            <div class="font-semibold">{{ toastStore.message }}</div>
            <button
                class="flex items-center justify-center w-[30px] h-[30px] rounded-full hover:bg-black/10 transition-colors"
                @click="toastStore.close">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <!-- Progress -->
        <div>
            <div class="absolute left-0 bottom-0 right-0 h-[6px] bg-black/10"
                :style="{ width: toastStore.percent + '%' }">
            </div>
        </div>
    </div>
</template>
<script setup>
import { useToastStore } from '@/stores/toast';
const toastStore = useToastStore();
</script>