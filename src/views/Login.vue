<template>
    <div class="w-full sm:w-[400px] px-5 mx-auto mt-16 text-center ">
        <h2 class="text-2xl font-semibold mb-2">Login to your account</h2>
        <p class="mb-4">or <RouterLink :to="{name:'signup'}" class="text-purple-600 hover:text-purple-500 ">Create new one</RouterLink>
        </p>
        <form class="/src/login.html" method="POST">
            <div class="mb-3"><input type="text" name="" id="" placeholder="Your Email"
                    class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600"></div>
            <div class="mb-3"><input type="password" name="" id="" placeholder="Your Password"
                    class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600"></div>
            <div class="flex justify-between mb-3">
                <div class="flex items-center">
                    <input type="checkbox" id="rememberMe" class="text-purple-600 focus:ring-purple-600">
                    <label for="rememberMe" class="text-gray-600 ml-2">
                        Remember Me
                    </label>
                </div>
                <RouterLink :to="{name:'password-reset'}" class="text-purple-600 hover:text-purple-500">Reset Your Password</RouterLink>
            </div>
            <button class="btn-emerald w-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                </svg>
                Login
            </button>
        </form>
    </div>
</template>
<script setup></script>