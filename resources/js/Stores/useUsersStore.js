import axios from "axios";
import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
    state: () => ({ users: [] }),

    actions: {
        setUsers(users) {
            this.users = users;
        },

        addUser(user) {
            if (
                typeof this.users.find((u) => u.id == user.id) !== "undefined"
            ) {
                return;
            }
            this.users.push(user);
        },

        removeUser(user) {
            this.users = this.users.filter((u) => u.id != user.id);
        },

        setTyping(event) {
            this.users.find((u) => u.id == event.id).typing = event.typing;
        },
    },
    getters: {
        getUsers(state) {
            return state.users;
        },

        count(state) {
            return state.users.length;
        },
    },
});
