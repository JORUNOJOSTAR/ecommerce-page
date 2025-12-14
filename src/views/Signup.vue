<template>
    <div class="w-full sm:w-[400px] px-5 mx-auto mt-16 text-center">
        <h2 class="text-2xl font-semibold mb-2">Create new account</h2>
        <p class="mb-4">or <RouterLink :to="{name:'login'}" class="text-purple-600 hover:text-purple-500 ">login with existing
                one</RouterLink></p>
        <form action="/src/signup.html" method="post">
            <div class="mb-3">
                <input type="text" name="" id="" placeholder="Your Name"
                    v-model="formInput.name"
                    @input="validateName"
                    class="bg-white w-full rounded border-none"
                    :class="validationErrMsg.name? errorClass : (formInput.name ? successClass : defaultClass  ) ">
                <small class="block text-left text-red-500">{{ validationErrMsg.name }}</small>
            </div>
            <div class="mb-3">
                <input type="text" name="" id="" placeholder="Your Email"
                    v-model="formInput.email"
                    @input="validateEmail"
                    class="bg-white w-full rounded border-none"
                    :class="validationErrMsg.email? errorClass : (formInput.email ? successClass : defaultClass  ) ">
                <small class="block text-left text-red-500">{{ validationErrMsg.email }}</small>
            </div>
            <div class="mb-3">
                <input type="password" name="" id="" placeholder="Password"
                    v-model="formInput.password"
                    @input="validatePassword"
                    class="bg-white w-full rounded border-none"
                    :class="validationErrMsg.password? errorClass : (formInput.password ? successClass : defaultClass  ) ">
                <small class="block text-left text-red-500">{{ validationErrMsg.password }}</small>
            </div>
            <div class="mb-3">
                <input type="password" name="" id="" placeholder="Repeat Password"
                    v-model="formInput.passwordRepeat"
                    @input="validatePasswordRepeat"
                    class="bg-white w-full rounded border-none"
                    :class="validationErrMsg.passwordRepeat? errorClass : (formInput.passwordRepeat ? successClass : defaultClass  ) ">
                <small class="block text-left text-red-500">{{ validationErrMsg.passwordRepeat }}</small>
            </div>
            <button @click.prevent="submit" class="btn-emerald w-full flex items-center justify-center">
                Signup
            </button>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';     
import { validate } from 'email-validator';

const defaultClass = 'focus:border-purple-600 focus:ring-purple-600';
const errorClass   = 'focus:border-red-600 focus:ring-red-600';
const successClass = 'focus:border-emerald-600 focus:ring-emerald-600';

const formInput = ref({
                        name:            '',
                        email:           '',
                        password:        '',
                        passwordRepeat:  '',
                  });

const validationErrMsg = ref({
                                name:            '',
                                email:           '',
                                password:        '',
                                passwordRepeat:  '',
                         });

function submit(){
    validateName();
    validateEmail();
    validatePassword();
    validatePasswordRepeat();
}                        

function validateName(){
    validationErrMsg.value.name = '';
    if(!formInput.value.name){
        validationErrMsg.value.name = 'This field is required';
    }else if(formInput.value.name.length < 3){
        validationErrMsg.value.name = 'Name should be at least 3 character'
    }
}

function validateEmail(){
    validationErrMsg.value.email = '';
    if(!formInput.value.email){
        validationErrMsg.value.email = 'This field is required';
    }else if(!validate(formInput.value.email)){
        validationErrMsg.value.email = 'This must be a valid email'
    }
}

function validatePassword(){
    validationErrMsg.value.password = '';
    if(!formInput.value.password){
        validationErrMsg.value.password = 'This field is required';
    }
}

function validatePasswordRepeat(){
    validationErrMsg.value.passwordRepeat = '';
    if(!formInput.value.passwordRepeat){
        validationErrMsg.value.passwordRepeat = 'This field is required';
    }
}
</script>