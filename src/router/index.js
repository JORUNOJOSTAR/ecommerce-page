import {createRouter,createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";
import Product from "@/views/Product.vue";
import Cart from "@/views/Cart.vue";
import Profile from "@/views/Profile.vue";
import Orders from "@/views/Orders.vue";
import Logout from "@/views/Logout.vue";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import OrderDetails from "@/views/OrderDetails.vue";
import PasswordReset from "@/views/PasswordReset.vue";
import Watchlist from "@/views/Watchlist.vue";
import { useToastStore } from "@/stores/toast";


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/product/:id',
        name: 'product',
        component: Product,
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/watchlist',
        name: 'watchlist',
        component: Watchlist
    },
    {
        path: '/orders',
        name: 'orders',
        component: Orders
    },
    {
        path: '/order-details',
        name: 'order-details',
        component: OrderDetails
    },
    {
        path: '/logout',
        name: 'logout',
        component: Logout
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },
    {
        path: '/password-reset',
        name: 'password-reset',
        component: PasswordReset
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// Prevent toast to continue or start show up when route change
router.beforeEach((to,from,next)=>{
    const toastStore = useToastStore();
    toastStore.close();
    next();
})

export default router;