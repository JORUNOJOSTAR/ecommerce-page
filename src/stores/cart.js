import { defineStore } from "pinia";
import { useToastStore } from "@/stores/toast";
import { useStorage } from '@vueuse/core';
import Decimal from "decimal.js";

export const useCartStore = defineStore('cart',{
    state: ()=>({
        cartItems: useStorage('cartItemValue',{})
    }),
    getters:{
        cartItemsCount: (state) => Object.values(state.cartItems).reduce((accum,next)=> accum+next.quantity, 0),
        totalPrice:     (state) => Object.values(state.cartItems).reduce((accum,next)=>{
            const price = new Decimal(next.price);
            const quantity = new Decimal(next.quantity);
            
            return accum.plus(price.times(quantity));
        }, new Decimal(0))
    },
    actions: {
        addToCart(product,quantity=1){
            const toastStore  = useToastStore();
            const productItem = this.cartItems[product.id] || {...product,quantity:0};
            productItem.quantity += quantity;
            this.cartItems[product.id] = productItem;
            toastStore.show('The item was added into the cart');
        },
        removeFromCart(id){
            this.cartItems[id] && delete this.cartItems[id];
        }
    }
});