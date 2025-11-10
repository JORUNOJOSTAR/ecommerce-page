document.addEventListener('alpine:init', () => {

    Alpine.store("header", {
        cartItems: 0,
        watchingItems: [],
        get watchListItems() {
            return this.watchingItems.length;
        },
    })

    Alpine.store("toast", {
            visible: false,
            delay: 5000,
            percent: 0,
            timeout: null,
            interval: null,
            message: null,
            close() {
                this.visible = false;
                clearInterval(this.interval);
            },
            show(message) {
                if (this.interval) {
                    clearInterval(this.interval);
                    this.interval = null;
                }

                if (this.timeout) {
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
    );

    Alpine.data('productItem', () =>({
        quantity: 1,
        addToWatchList(id) {
            if (Alpine.store('header').watchingItems.includes(id)) {
                Alpine.store('header').watchingItems.splice(Alpine.store('header').watchingItems.indexOf(id), 1);
                Alpine.store('toast').show('The item was removed from your watchlist')
            } else {
                Alpine.store('header').watchingItems.push(id);
                Alpine.store('toast').show('The item was added into your watchlist');
            }
        },
        isInWatchList(id) {
            return Alpine.store('header').watchingItems.includes(id);
        },
        addToCart(quantity = 1) {
            Alpine.store('header').cartItems += parseInt(quantity);
            Alpine.store('toast').show('The item was added into the cart');
        },
    }))

})