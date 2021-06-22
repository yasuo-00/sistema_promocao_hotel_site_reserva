window.addEventListener('load', isAuthenticated);

//verifica se usuario esta autenticado (logado)
function isAuthenticated(){
    if(sessionStorage.getItem('user')=== null){
        window.location.replace('http://localhost:3333/');
    }
}