import { defineStore } from "pinia";
import { useToastStore } from "@/stores/toast";

export const useCartStore = defineStore('cart',{
    state: ()=>({
        cartItems : 0,
    }),
    actions: {
        addToCart(quantity=1){
            const toastStore = useToastStore();
            this.cartItems+=quantity;
            toastStore.show('The item was added into the cart');
        },
    }
});