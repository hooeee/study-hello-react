const logoutButton = document.querySelector('#login-button');

function logoutProcess() {
    localStorage.removeItem( STORAGE_USER_NAME_KEY );
    logout();
}

logoutButton.addEventListener( 'click' , logoutProcess );