<template>
    <div @click.stop="disclosure.toggle()">
        <slot></slot>
    </div>
</template>
<script setup>
import { inject } from 'vue';
const disclosure = inject('disclosure')
</script>