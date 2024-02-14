import router from "src/router";

export default {
    login(username, password) {
        const params = {
            username: btoa(username),
            password: btoa(password),
        }

        return params.username;
    },
    logout() {
        localStorage.removeItem("username");
        localStorage.setItem("isAuthenticated", false);

        router.push('/login');
    }
}