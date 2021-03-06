window.addEventListener('load', bookingSiteSelect);

//renderiza os sites de reserva cadastrados como uma lista de selecoes
//usado para adicionar promocao
function bookingSiteSelect(){
    const url = 'http://localhost:3333/bookingSite/listAll';
    const options = {
        method: 'GET',
        headers:{
            'Content-Type':'application/json'
        }
    }
    fetch(url, options)
    .then(res => res.json().then(jsonData => ({ status: res.status, data: jsonData })))
    .then(data => {
        if (data.status == 200) {
            document.getElementById('bookingSiteSelect').innerHTML = `
                        <label htmlFor="bookingSite">Site de Reservas:</label>
                        <select name="bookingSite" id="bookingSite">
                        ${data.data.bookingSiteList.map(function (bookingSite) {
                            return `
                            <option value="${bookingSite.id_user}">${bookingSite.url}</option>
                            `
                            })
                        }
                        </select>
                        `;
        }
    });
}