// use checkAuth function to redirect is user not authenticated
// add event listener to the logout button and call logout
import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});
