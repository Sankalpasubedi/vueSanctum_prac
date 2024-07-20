<template>
    <div>
        <h1>Login Form</h1>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="email">Email:</label>
                <input
                    type="email"
                    v-model="formData.email"
                    id="email"
                    required
                    class="form-control"
                />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input
                    type="password"
                    v-model="formData.password"
                    id="password"
                    required
                    class="form-control"
                />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <div v-if="errorMessage" class="alert alert-danger">{{errorMessage}}</div>
    </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from "vue-router";
import {useStore} from 'vuex';
export default {
    name: "Form",
    data() {
        return {
            formData:{
                email: "",
                password: "",
            },
            errorMessage: "",
        };
    },
    setup() {
      const router = useRouter();  
      const store = useStore();  
        return {router,store};
    },
    methods: {
        async submitForm() {
            try {
                const response = await axios.post('/api/login', this.formData);
                if (response.status === 201) {
                    this.$store.dispatch('setToken', response.data.token);
                    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
                    this.$router.push('/dashboard');
                }
            } catch (error) {
                this.errorMessage = error.response.data.message || 'Login failed';
            }
        },
    },
};
</script>

<style scoped>
.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
}

input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
}

button {
    padding: 0.5rem 1rem;
}
</style>
