import { defineStore } from "pinia";

export const useCartStore = defineStore('cart',{
    state: ()=>({
        productCounter: 0,
        visible: false,
        delay: 5000,
        percent: 0,
        timeout: null,
        interval: null,
        message: null,
    }),
    actions: {
        addToCart(){
            this.productCounter++;
            this.show('The item was added into the cart');
        },
        close(){
            this.visible = false;
            clearInterval(this.interval);
            clearTimeout(this.timeout);
        },
        show(message){

            if(this.interval){
                clearInterval(this.interval);
                this.interval = null;
            }

            if(this.timeout){
                clearTimeout(this.timeout);
                this.timeout = null;
            }

            this.message = message;
            this.visible = true;
            this.timeout = setTimeout(()=>{
                this.visible = false;
                this.timeout = null;
            },this.delay);
            const startDate = Date.now();
            const futureDate = startDate + this.delay;
            this.interval = setInterval(()=>{
                const date = Date.now();
                this.percent = (date - startDate) * 100 / (futureDate-startDate);
                console.log(this.percent);
                if(this.percent >= 100) {
                    clearInterval(this.interval);
                    this.interval = null;
                }
            },30);
        }
    }

});