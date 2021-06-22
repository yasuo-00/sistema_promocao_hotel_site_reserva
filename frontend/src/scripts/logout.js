
window.addEventListener('load', logoutButton)

function logoutButton(){
    //gets logout <a> tag from sidebar
    const button = document.querySelector('my-sidebar').shadowRoot.getElementById('logout');
    if(button){
        button.addEventListener('click',function(){logout()})
    }
    
}

//efetua o logout
function logout(){
    sessionStorage.removeItem('user');
    window.location.replace('http://localhost:3333/');
}