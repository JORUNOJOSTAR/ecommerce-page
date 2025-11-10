import { defineStore } from "pinia";
import { useToastStore } from "@/stores/toast";

export const useCartStore = defineStore('cart',{
    state: ()=>({
        cartItems : 0,
    }),
    actions: {
        addToCart(){
            const toastStore = useToastStore();
            this.cartItems++;
            toastStore.show('The item was added into the cart');
        },
    }
});