
export const SaveLocalStorage = ( cart ) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}