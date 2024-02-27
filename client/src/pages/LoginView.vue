<template>
    <div class="flex flex-column items-center justify-center">
        <q-card class="login-form-wrap fixed">
            <q-card-section>
                <div class="text-h6 text-center">Login</div>
            </q-card-section>

            <q-separator />

            <q-card-section>
                <q-input v-model="login.username" label="Username" type="text" stack-label />
            </q-card-section>

            <q-card-section>
                <q-input v-model="login.password" label="Password" type="password" stack-label />
            </q-card-section>

            <q-card-section>
                <q-btn class="full-width" color="primary" label="Login" @click="handleLogin" />
            </q-card-section>

            <q-card-section>
                <span class="text-body2">{{ currentYear }} Inventory Management System | <a href="/">Privacy</a></span>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
import LoginService from '../services/LoginService'

export default {
    name: 'LoginView',
    setup() {
        const login = {
            username: '',
            password: '',
        };

        const currentYear = new Date().getFullYear();

        // Method to handle login
        const handleLogin = () => {

            // Simulated authentication logic, replace with your actual logic
            localStorage.setItem("isAuthenticated", true);
            
            // Set username
            const username = LoginService.login(this.login.username, this.login.password);

            localStorage.setItem("username", username);
            
            // Check for the 'redirect' query parameter and navigate accordingly
            const redirect = this.$route.query.redirect || '/';
            this.$router.push(redirect);
        }

        return {
            login,
            currentYear,
            handleLogin,
        }
    }
}
</script>

<style scoped>

.login-form-wrap {
    max-width: 500px;
    min-width: 500px;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, 50%);
    z-index: 3;
    border-radius: 3px;
    color: #000000;
    border-radius: 20px;
    overflow: hidden;
}

.login-form-wrap .q-card__section {
    padding: 20px 60px;
}

</style>