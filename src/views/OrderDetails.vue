<template>
    <div class="container lg:w-2/3 mx-auto p-5">

        <h1 class="text-3xl font-bold m-2">My Orders</h1>
        <div class="bg-white rounded-lg p-3">
            <table>
                <tbody>
                    <tr>
                        <td class="font-bold py-1 px-2">Order #</td>
                        <td>1234</td>
                    </tr>
                    <tr>
                        <td class="font-bold py-1 px-2">Order Date</td>
                        <td>10td of May 21:00</td>
                    </tr>
                    <tr>
                        <td class="font-bold py-1 px-2">Order Status</td>
                        <td>
                            <span class="bg-gray-400 py-1 px-2 rounded text-white">Unpaid</span>
                        </td>
                    </tr>
                    <tr>
                        <td class="font-bold py-1 px-2">Subtotal</td>
                        <td>$144</td>
                    </tr>
                </tbody>
            </table>

            <hr class="my-5">
            <div class="flex flex-col sm:flex-row items-center gap-4">
                <img src="/src/img/1_1.jpg" class="w-36" alt="">
                <div class="flex flex-col justify-between flex-1 ">
                    <div class="flex justify-between mb-3">
                        <h3>
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old
                        </h3>
                        <span class="text-lg font-semibold">
                            $17.99
                        </span>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            Qty: 5
                        </div>
                        <RouterLink to="#" class="text-purple-600 hover:text-purple-500">Remove</RouterLink>
                    </div>
                </div>
            </div>
            <hr class="my-5">
            <div class="flex flex-col sm:flex-row items-center gap-4">
                <img src="/src/img/1_1.jpg" class="w-36" alt="">
                <div class="flex flex-col justify-between flex-1">
                    <div class="flex justify-between mb-3">
                        <h3>
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old
                        </h3>
                        <span class="text-lg font-semibold">
                            $17.99
                        </span>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            Qty: 5
                        </div>
                        <RouterLink to="#" class="text-purple-600 hover:text-purple-500">Remove</RouterLink>
                    </div>
                </div>
            </div>
            <hr class="my-5">
            <div class="flex flex-col sm:flex-row items-center gap-4">
                <img src="/src/img/1_1.jpg" class="w-36" alt="">
                <div class="flex flex-col justify-between flex-1">
                    <div class="flex justify-between mb-3">
                        <h3>
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old
                        </h3>
                        <span class="text-lg font-semibold">
                            $17.99
                        </span>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            Qty: 5
                        </div>
                        <RouterLink to="#" class="text-purple-600 hover:text-purple-500">Remove</RouterLink>
                    </div>
                </div>
            </div>
            <hr class="my-5">
            <div class="flex flex-col sm:flex-row items-center gap-4">
                <img src="/src/img/1_1.jpg" class="w-36" alt="">
                <div class="flex flex-col justify-between flex-1">
                    <div class="flex justify-between mb-3">
                        <h3>
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old
                        </h3>
                        <span class="text-lg font-semibold">
                            $17.99
                        </span>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            Qty: 5
                        </div>
                        <RouterLink to="#" class="text-purple-600 hover:text-purple-500">Remove</RouterLink>
                    </div>
                </div>
            </div>
            <hr class="my-5">
            <div class="flex flex-col sm:flex-row items-center gap-4">
                <img src="/src/img/1_1.jpg" class="w-36" alt="">
                <div class="flex flex-col justify-between flex-1">
                    <div class="flex justify-between mb-3">
                        <h3>
                            It has roots in a piece of classical Latin literature from 45 BC,
                            making it over 2000 years old
                        </h3>
                        <span class="text-lg font-semibold">
                            $17.99
                        </span>
                    </div>
                    <div class="flex justify-between items-center">
                        <div class="flex items-center">
                            Qty: 5
                        </div>
                        <RouterLink to="#" class="text-purple-600 hover:text-purple-500">Remove</RouterLink>
                    </div>
                </div>
            </div>

            <hr class="my-3">

            <button class="btn-primary w-full mt-3">Make a Payment</button>
        </div>

    </div>
</template>
<script setup></script>