window.addEventListener('load', accountType);


function accountType() {
    const selectType = document.getElementById('accountType');
    selectType.addEventListener('change', function () { renderFields(selectType.value) })
    document.getElementById('accountFields').innerHTML = `
                            <label htmlFor="cnpj">CNPJ:</label>
                            <input type="text" id="cnpj" name="cnpj" placeholder="CNPJ" pattern="[0-9]{2}.[0-9]{3}.[0-9]{3}\/[0]{3}[1-2]-[0-9]{2}" title="Formato de CNPJ incorreto (XX.XXX.XXX/000X-XX)" required>
                            <label htmlFor="name">Nome do Hotel:</label>
                            <input id="name" type="text" placeholder="Nome" required>
                            <label htmlFor="city">Cidade:</label>
                            <input type="text" id="city" name="city" placeholder="Cidade" required>
                            <label htmlFor="dailyRate">Preço</label>
                            <input type="number" id="dailyRate" name="dailyRate"  pattern="[0-9]{2,6}((.|,)[0-9]{1,2})?" title="Preço Inválido" required>
                            `;
}

//renderiza os campos para cadastro conforme o tipo de usuario (hotel/site_de_reservas)
function renderFields(accountType) {
    if (accountType === 'booking_site') {
        document.getElementById('accountFields').innerHTML = `
                            <label htmlFor="url">URL:</label>
                            <input type="text" id="url" name="url" placeholder="URL"required>
                            `;
    } else {
        document.getElementById('accountFields').innerHTML = `
                            <label htmlFor="cnpj">CNPJ:</label>
                            <input type="text" id="cnpj" name="cnpj" placeholder="CNPJ" pattern="[0-9]{2}.[0-9]{3}.[0-9]{3}\/[0]{3}[1-2]-[0-9]{2}" title="Formato de CNPJ incorreto (XX.XXX.XXX/000X-XX)" required>
                            <label htmlFor="name">Nome do Hotel:</label>
                            <input id="name" type="text" placeholder="Nome" required>
                            <label htmlFor="city">Cidade:</label>
                            <input type="text" id="city" name="city" placeholder="Cidade" required>
                            <label htmlFor="dailyRate">Preço</label>
                            <input type="number" id="dailyRate" name="dailyRate"  pattern="[0-9]{2,6}((.|,)[0-9]{1,2})?" title="Preço Inválido" required>
                            `;
    }
}