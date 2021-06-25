window.addEventListener('load', hotelSelect);

//renderiza os hoteis cadastrados como uma lista de selecoes
//usado para adicionar promocao
function hotelSelect(){
    const url = 'http://localhost:3333/hotel/listAll';
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
            document.getElementById('hotelSelect').innerHTML = `
                        <label htmlFor="hotel">Hotel:</label>
                        <select name="hotel" id="hotel">
                        ${data.data.hotelList.map(function (hotel) {
                            return `
                            <option value="${hotel.id_user}">${hotel.name}</option>
                            `
                            })
                        }
                        </select>
                        `;
        }
    });
}