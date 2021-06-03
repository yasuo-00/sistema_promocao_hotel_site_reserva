window.addEventListener('load', isAuthenticated);

function isAuthenticated(){
    if(sessionStorage.getItem('user')=== null){
        window.location.replace('http://localhost:3333/');
    }
}