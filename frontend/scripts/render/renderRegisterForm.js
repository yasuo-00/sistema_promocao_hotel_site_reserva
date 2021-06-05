window.addEventListener('load', accountType);


function accountType() {
    const selectType = document.getElementById('accountType');
    selectType.addEventListener('change', function () { renderFields(selectType.value) })
    document.getElementById('accountFields').innerHTML = `
                            <label for="cnpj">CNPJ:</label>
                            <input type="text" id="cnpj" name="cnpj" placeholder="CNPJ" pattern="[0-9]{2}.[0-9]{3}.[0-9]{3}\/[0]{3}[1-2]-[0-9]" title="Formato de CNPJ incorreto (XX.XXX.XXX/000X-XXX)" >
                            <label for="name">Nome do Hotel:</label>
                            <input id="name" type="text" placeholder="Nome">
                            <label for="city">Cidade:</label>
                            <input type="text" id="city" name="city" placeholder="Cidade">
                            <label for="dailyRate">Preço</label>
                            <input type="number" id="dailyRate" name="dailyRate"  pattern="[0-9]{2,6}((.|,)[0-9]{1,2})?" title="Preço Inválido" >
                            `;
}

//renderiza os campos para cadastro conforme o tipo de usuario (hotel/site_de_reservas)
function renderFields(accountType) {
    if (accountType === 'booking_site') {
        document.getElementById('accountFields').innerHTML = `
                            <label for="url">URL:</label>
                            <input type="text" id="url" name="url" placeholder="URL">
                            `;
    } else {
        document.getElementById('accountFields').innerHTML = `
                            <label for="cnpj">CNPJ:</label>
                            <input type="text" id="cnpj" name="cnpj" placeholder="CNPJ" pattern="[0-9]{2}.[0-9]{3}.[0-9]{3}\/[0]{3}[1-2]-[0-9]" title="Formato de CNPJ incorreto (XX.XXX.XXX/000X-XXX)">
                            <label for="name">Nome do Hotel:</label>
                            <input id="name" type="text" placeholder="Nome">
                            <label for="city">Cidade:</label>
                            <input type="text" id="city" name="city" placeholder="Cidade">
                            <label for="dailyRate">Preço</label>
                            <input type="number" id="dailyRate" name="dailyRate"  pattern="[0-9]{2,6}((.|,)[0-9]{1,2})?" title="Preço Inválido" >
                            `;
    }
}