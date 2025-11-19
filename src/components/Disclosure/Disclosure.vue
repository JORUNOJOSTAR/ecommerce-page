<template>
    <slot :open="isOpen" :toggle="toggle"></slot>
</template>
<script setup>
import { ref,provide } from 'vue';

const isOpen = ref(true);
const toggle = () => {
    isOpen.value = !isOpen.value;
}

provide('disclosure',{
    isOpen,
    toggle
})

</script>