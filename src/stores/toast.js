import { defineStore } from "pinia";
export const useToastStore = defineStore('toast',{
    state: ()=>({
        visible   : false,
        delay     : 5000,
        percent   : 0,
        timeout   : null,
        interval  : null,
        message   : null,
    }),
    actions: {
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
            // ensure toast to be disappear after 5s
            this.timeout = setTimeout(()=>{
                this.visible = false;
                this.timeout = null;
            },this.delay);

            const startDate  = Date.now();
            const futureDate = startDate + this.delay;
            
            // run every 30ms to update the progress percent (stop on 100%)
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