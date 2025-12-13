import { defineStore } from "pinia";
import { useToastStore } from "@/stores/toast";
import { useStorage } from "@vueuse/core";
export const useWatchListStore = defineStore('watchlist',{
    state: ()=>({
        watchList : useStorage('watchListValue',[]),
    }),
    getters:{
        watchListItems : (state) => state.watchList.length,
        isInWatchList  : (state) => (id) => {
            return state.watchList.find((p)=>p.id===id);
        }
    },
    actions: {
        addToWatchList(product){
            const toastStore = useToastStore();
            if(this.removeFromWatchList(product.id)){
                toastStore.show('The item was removed from watchlist');
                return;
            }
            this.watchList.push(product);
            toastStore.show('The item was added into the watchlist');
        },
        removeFromWatchList(id){
            let isRemove = false;
            if(this.isInWatchList(id)){
                const index = this.watchList.findIndex((p)=>p.id===id);
                this.watchList.splice(index,1);
                isRemove = true;
            }
            return isRemove;
        }
    }
})