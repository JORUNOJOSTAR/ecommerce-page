<template>
    <div 
      ref="contentRef"
      :style="{ maxHeight: maxHeight + 'px'}"
      class="overflow-hidden transition-all duration-300">
        <slot></slot>
    </div>
</template>
<script setup>
import { computed, inject,ref } from 'vue';
const props = defineProps({
    minHeight : {
        type: Number,
        default: 0,
    }
});

const disclosure = inject('disclosure');
const contentRef = ref(null);
const maxHeight  = computed(()=>{
    return disclosure.isOpen.value ? contentRef.value?.scrollHeight : props.minHeight;
} );
</script>