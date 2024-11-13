import axios from "axios";
import { defineStore } from "pinia";

export const useMessagesStore = defineStore("messages", {
    state: () => ({ page: 1, messages: [], isLoaded: false }),

    actions: {
        async fetchMessages(roomSlug, page = 1) {
            axios.get(`${roomSlug}/messages?page=${page}`).then((response) => {
                this.messages = [...this.messages, ...response.data.data];
                this.page = response.data.meta.current_page;

                this.isLoaded = true;
            });
        },

        async fetchMoreMessages(roomSlug) {
            this.fetchMessages(roomSlug, this.page + 1);
        },
    },
    getters: {
        allMessages(state) {
            return state.messages;
        },

        getIsLoaded(state) {
            return state.isLoaded;
        },
    },
});
