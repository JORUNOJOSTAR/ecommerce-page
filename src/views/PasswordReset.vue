<template>
    <div class="w-full sm:w-[400px] px-5 mx-auto mt-16 text-center">
        <h2 class="text-2xl font-semibold mb-2">Enter your email to reset password</h2>
        <p class="mb-4">or <RouterLink :to="{name:'password-reset'}" class="text-purple-600 hover:text-purple-500 ">login with
                existing account</RouterLink></p>
        <form class="/src/login.html" method="POST">
            <div class="mb-3"><input type="text" name="" id="" placeholder="Your Email"
                    class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600"></div>
            <button class="btn-emerald w-full flex items-center justify-center">
                Submit
            </button>
        </form>
    </div>
</template>
<script setup></script>