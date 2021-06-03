
window.addEventListener('load', logoutButton)

function logoutButton(){
    const button = document.querySelector('my-sidebar').shadowRoot.getElementById('logout');
    button.addEventListener('click',function(){logout()})
    
}

function logout(){
    sessionStorage.removeItem('user');
    window.location.replace('http://localhost:3333/');
}