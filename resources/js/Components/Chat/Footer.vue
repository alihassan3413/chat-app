<script setup>
import { ref } from "vue";

const message = ref("");
const emit = defineEmits();
const shift = ref(false);
const handleEnter = (e) => {
    if (shift.value && message.value.length) {
        message.value = message.value + "\n";
        return;
    }
    if (message.value.length) {
        emit("valid", message.value);
        message.value = "";
    }
};

let typingTimeout = null;
const handleTyping = () => {
    clearTimeout(typingTimeout);

    emit("typing", true);

    typingTimeout = setTimeout(handleFinishTyping, 3000);
};

const handleFinishTyping = () => {
    clearTimeout(typingTimeout);
    emit("typing", false);
};
</script>

<template>
    <footer
        id="page-footer"
        class="fixed bottom-0 end-0 start-0 items-center border-t border-slate-200/75 bg-white px-4 lg:start-96"
    >
        <textarea
            v-model="message"
            v-on:keydown.enter.prevent="handleEnter"
            v-on:keydown.shift="shift = true"
            v-on:keyup="shift = false"
            v-on:keydown="handleTyping"
            class="-mx-5 block w-full rounded-lg border-0 px-5 py-4 leading-6 focus:border-indigo-500 focus:ring focus:ring-indigo-500/75"
            placeholder="Type a new message and hit enter.."
        ></textarea>
    </footer>
</template>
