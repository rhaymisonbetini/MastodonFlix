class AuthClass {

    static setAuthInfo(user) {
        sessionStorage.setItem('_AUTH_USER', JSON.stringify(user));
    }

    static getAuthInfo() {
        return JSON.parse(sessionStorage.getItem('_AUTH_USER'));
    }

    static getAuthToken() {
        let user = this.getAuthInfo();
        return user ? user.token : null;
    }

    static logout() {
        sessionStorage.removeItem('_AUTH_USER');
    }
}


export default AuthClass