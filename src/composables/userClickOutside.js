import { onMounted, onUnmounted } from "vue";
export default function userClickOutside(elementRef, callback) {
    
    const handleClickOutside = (event) => {
        // run callback when user clicked outside of elementRef
        if (elementRef.value && !elementRef.value.contains(event.target)) {
            callback(event.target);
        }
    };

    onMounted(() => {
        document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside);
    });
}