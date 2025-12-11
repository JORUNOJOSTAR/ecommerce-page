import { defineStore  } from "pinia";
export const useProductStore = defineStore('product',{
    actions: {
        async getProducts(page=1){
            const products = [
                {
                    id: 1,
                    image: '/src/img/1_1.jpg',
                    title: 'It has roots in a piece of classical Latin literature from 45 BC,making it over 2000 years old',
                    price: '17.99'
                },
                {
                    id: 2,
                    image: '/src/img/1_2.jpg',
                    title: 'It has roots in a piece of classical Latin literature from 45 BC,making it over 2000 years old',
                    price: '17.99'
                },
                {
                    id: 3,
                    image: '/src/img/1_3.jpg',
                    title: 'It has roots in a piece of classical Latin literature from 45 BC,making it over 2000 years old',
                    price: '17.99'
                },
                {
                    id: 4,
                    image: '/src/img/1_4.jpg',
                    title: 'It has roots in a piece of classical Latin literature from 45 BC,making it over 2000 years old',
                    price: '17.99'
                },
            ];
            return products;
        },
        async getProductById(id){
            return {
                id: id,
            };
        }
    }
});