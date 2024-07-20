<template>
    <div>
        <h1>Hello!!</h1>
        <div v-if="user">
            <h2>Welcome, {{ user.name }}</h2>
            <p>Email: {{ user.email }}</p>
        </div>
        <div v-else>
            <p>Loading user data...</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Dashboard",
    data() {
        return {
            user: null,
        };
    },
    created() {
        this.fetchUserData();
    },
    methods: {
        async fetchUserData() {
            try {
                const response = await axios.get('/api/getUser');
                this.user = response.data;
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        },
    },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
