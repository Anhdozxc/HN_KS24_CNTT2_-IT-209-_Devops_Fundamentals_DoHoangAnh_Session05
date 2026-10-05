function authenticate(username, password) {
    return username === "admin" && password === "123456";
}

function isAuthenticated(user) {
    return user !== null && user !== undefined;
}

function logout() {
    return "User logged out";
}

module.exports = {
    authenticate,
    isAuthenticated,
    logout
};