import { defineStore } from "pinia";

export const useCartStore = defineStore('cart',{
    state: ()=>({
        cartItems : 0,
        watchList : [],
        visible   : false,
        delay     : 5000,
        percent   : 0,
        timeout   : null,
        interval  : null,
        message   : null,
    }),
    getters:{
        watchListItems : (state) => state.watchList.length,
        isInWatchList  : (state) => (id) => {
            return state.watchList.includes(id);
        }
    },
    actions: {
        addToCart(){
            this.cartItems++;
            this.show('The item was added into the cart');
        },
        addToWatchList(id){
            if(this.watchList.includes(id)){
                this.watchList.splice(this.watchList.indexOf(id),1);
                this.visible = false;
                return;
            }
            this.watchList.push(id);
            this.show('The item was added into the watchlist');
        },
        close(){
            this.visible = false;
            clearInterval(this.interval);
            clearTimeout(this.timeout);
        },
        // show a toast that visible for 5s with message
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

            const startDate  = Date.now();
            const futureDate = startDate + this.delay;
            this.interval    = setInterval(()=>{
                const date   = Date.now();
                // Caculate how many time has been passed since the toast start with percentage
                this.percent = (date - startDate) * 100 / (futureDate-startDate);
                if(this.percent >= 100) {
                    clearInterval(this.interval);
                    this.interval = null;
                }
            },30);
        }
    }

});