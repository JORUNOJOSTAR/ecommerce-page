<template>
    <div class="container lg:w-2/3 mx-auto p-5">
        <h1 class="text-3xl font-bold m-2 mb-5">My Cart Items</h1>
        <div class="bg-white rounded-lg p-3">
            <div v-if="cartStore.cartItemsCount > 0">
                <div v-for="product in cartStore.cartItems" class="p-2">
                    <!-- Cart Item -->
                    <div class="flex flex-col sm:flex-row items-center gap-4">
                        <img :src="product.image" class="w-36 aspect-[3/2] object-cover" alt="">
                        <div class="flex flex-col justify-between flex-1">
                            <div class="flex justify-between mb-3">
                                <h3>
                                    {{ product.title }}
                                </h3>
                                <span class="text-lg font-semibold">
                                    {{ product.price }}
                                </span>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    Qty:
                                    <input type="number" v-model.number="product.quantity" class="w-16 border border-gray-200 focus:border-purple-600  focus:ring-purple-600 ml-3 py-1"/>
                                </div>
                                <button @click="cartStore.removeFromCart(product.id)" class="text-purple-600 hover:text-purple-500">Remove</button>
                            </div>
                        </div>
                    </div>
                    <!-- Cart Item -->
                    <hr class="my-3">
                
                </div>
                <div class="border-gray-300  pt-5">
                    <div class="flex justify-between">
                        <span class="font-bold">Subtotal</span>
                        <span>{{ cartStore.totalPrice }}</span>
                    </div>
                    <p>
                        Shipping and tax will be applied on checkout
                    </p>
                    <button class="btn-primary w-full mt-3">Checkout</button>
                </div>
            </div>
            <div v-else class="text-center py-16">
                <svg class="mx-auto h-24 w-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <h3 class="mt-6 text-xl font-semibold text-gray-900">Your cart is empty</h3>
                <p class="mt-2 text-gray-500">Start adding some products to your cart!</p>
                <router-link to="/" class="inline-block mt-6 btn-primary">
                    Continue Shopping
                </router-link>
            </div>
        </div>

    </div>
</template>
<script setup>
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();
</script>