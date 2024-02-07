export default {
    login(username, password) {
        // Convert sensitive information into jargon
        const params = {
            username: btoa(username),
            password: btoa(password)
        }

        localStorage.setItem('username', params.username);
    },
    logout() {
        // Clear username
        localStorage.removeItem('username');

        window.sessionStorage.removeItem("path");
        window.sessionStorage.removeItem("query");
        window.sessionStorage.removeItem("hash");
    }
}