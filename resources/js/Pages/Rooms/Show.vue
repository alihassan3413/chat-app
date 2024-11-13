<script setup>
import Messages from "@/Components/Chat/Messages.vue";
import Header from "@/Components/Chat/Header.vue";
import Nav from "@/Components/Chat/Nav.vue";
import Footer from "@/Components/Chat/Footer.vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head } from "@inertiajs/vue3";
import { useMessagesStore } from "@/Stores/useMessagesStore";

const messageStore = useMessagesStore();

const props = defineProps({
    room: {
        type: Object,
        required: true,
    },
});
messageStore.fetchMessages(props.room.slug);
</script>

<template>
    <head title="Messages" />
    <div>
        <!-- Page Container -->
        <div
            id="page-container"
            class="relative mx-auto h-screen min-w-[320px] bg-white lg:ms-80"
        >
            <!-- Page Sidebar -->
            <Nav />
            <!-- Page Sidebar -->

            <!-- Page Header -->
            <Header />
            <!-- END Page Header -->

            <!-- Page Content -->
            <Messages :room="room" />
            <!-- END Page Content -->

            <!-- Page Footer -->
            <Footer v-on:valid="console.log($event)" />
            <!-- END Page Footer -->
        </div>
        <!-- END Page Container -->
    </div>
</template>
