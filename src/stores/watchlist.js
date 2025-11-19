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
            return state.watchList.includes(id);
        }
    },
    actions: {
        addToWatchList(id){
            const toastStore = useToastStore();
            if(this.watchList.includes(id)){
                this.watchList.splice(this.watchList.indexOf(id),1);
                toastStore.show('The item was removed from watchlist');
                return;
            }
            this.watchList.push(id);
            toastStore.show('The item was added into the watchlist');
        },
    }
})