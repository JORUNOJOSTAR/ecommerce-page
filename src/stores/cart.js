import { defineStore } from "pinia";
import { useToastStore } from "@/stores/toast";
import { useStorage } from '@vueuse/core';

export const useCartStore = defineStore('cart',{
    state: ()=>({
        cartItems: useStorage('cartItemValue',{})
    }),
    getters:{
        cartItemsCount: (state) => Object.values(state.cartItems)
                                        .reduce((accum,next)=> accum+next.quantity, 0),
    },
    actions: {
        addToCart(product,quantity=1){
            const toastStore  = useToastStore();
            const productItem = this.cartItems[product.id] || {...product,quantity:0};
            productItem.quantity += quantity;
            this.cartItems[product.id] = productItem;
            toastStore.show('The item was added into the cart');
        },
    }
});