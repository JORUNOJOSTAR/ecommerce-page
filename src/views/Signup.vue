<template>
    <div class="w-full sm:w-[400px] px-5 mx-auto mt-16 text-center">
        <h2 class="text-2xl font-semibold mb-2">Create new account</h2>
        <p class="mb-4">or <RouterLink :to="{name:'login'}" class="text-purple-600 hover:text-purple-500 ">login with existing
                one</RouterLink></p>
        <form action="/src/signup.html" method="post">
            <div class="mb-3"><input type="text" name="" id="" placeholder="Your Name"
                    class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600"></div>
            <div class="mb-3"><input type="text" name="" id="" placeholder="Your Email"
                    class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600"></div>
            <div class="mb-3"><input type="password" name="" id="" placeholder="Password"
                    class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600"></div>
            <div class="mb-3"><input type="password" name="" id="" placeholder="Repeat Password"
                    class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600"></div>

            <button class="btn-emerald w-full flex items-center justify-center">
                Signup
            </button>
        </form>
    </div>
</template>
<script setup></script>