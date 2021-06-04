window.addEventListener('load', login)

function login() {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', function (){submitLogin()})
}

function submitLogin() {
    const url = 'http://localhost:3333/login';
    const data = {
        email: document.getElementById('email').value,
        password:document.getElementById('password').value
    }
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }
    fetch(url, options)
        .then(res => res.json().then(jsonData=>({status: res.status, data: jsonData })))
        .then(data =>{  
                if(data.status==200){
                    const user = data.data.user;
                    sessionStorage.setItem('user', JSON.stringify(user));
                    window.location.replace('http://localhost:3333/userHome');
                }else{
                    alert('Email ou senha incorretos');
                }
            });

}