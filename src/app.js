document.addEventListener('alpine:init', () => {
    Alpine.data('index', () => ({
        productCounter: 10,
        addToCart() {
            this.productCounter++;
            this.toast.show('The item was added into the cart');
        },
        toast: {
            visible: false,
            delay: 5000,
            percent: 0,
            timeout: null,
            interval: null,
            message: null,
            close() {
                this.visible = false;
                clearInterval(this.interval)
            },
            show(message) {
                if(this.interval) {
                    clearInterval(this.interval);
                    this.interval = null;
                }

                if(this.timeout){
                    clearTimeout(this.timeout);
                    this.timeout = null;
                }
                this.message = message;
                this.visible = true;
                this.timeout = setTimeout(() => {
                    this.visible = false;
                    this.timeout = null;
                }, this.delay)
                const startDate = Date.now(); 
                const futureDate = Date.now() + this.delay; 
                this.interval = setInterval(() => {
                    const date = Date.now();
                    this.percent = (date - startDate) * 100 / (futureDate - startDate); 
                    if (this.percent >= 100) {
                        clearInterval(this.interval);
                        this.interval = null;
                    }
                }, 30);
            }
        }
    }))
})