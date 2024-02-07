<template>
    <Card class="login-form-wrap fixed max-w-30rem left-50 bottom-50 z-3 border-round-xl overflow-hidden">
        <template #title>
            <div class="text-center">
                Login
            </div>
            <Divider class="w-full" />
        </template>
        <template #content>
            <div class="p-3">
                <label class="block text-900 font-medium mb-2" for="username">Username</label>
                <InputText v-model="login.username" class="w-full mb-3" type="text"></InputText>

                <label class="block text-900 font-medium mb-2" for="password">Password</label>
                <InputText v-model="login.password" class="w-full mb-3" type="password"></InputText>

                <div class="flex align-items-center justify-content-between mb-6">
                    <div class="flex align-items-center">
                        <Checkbox v-model="rememberMe" class="mr-2" :binary="true"></Checkbox>
                        <label for="rememberMe">Remember Me</label>
                    </div>

                    <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot Password?</a>
                </div>

                <Button class="w-full" label="Login" @click="handleLogin"></Button>
            </div>
        </template>

        <template #footer>
            <div class="text-left text-sm">
                <span>{{ currentYear }} Inventory Management System | <a href="/">Privacy</a></span>
            </div>
        </template>
    </Card>
</template>
<script>
    import LoginService from '../services/LoginService';

    export default {
        name: 'LoginView',
        data() {
            return {
                login: {
                    username: '',
                    password: '',
                },
                rememberMe: false,
                currentYear: new Date().getFullYear(),
            }
        },
        methods: {
            handleLogin() {
                LoginService.login(this.login.username, this.login.password);
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
    .login-form-wrap {
        min-width: 500px;
        transform: translate(-50%, 50%);
    }
</style>