export const isAuthenticated = () => {
    return localStorage.getItem("email")? true : false;
}

export const setAuthenticated = (email) => {
    localStorage.setItem("email", email);
}