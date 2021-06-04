window.addEventListener('load', accountType);

function accountType() {
    const selectType = document.getElementById('accountType');
    selectType.addEventListener('change', function () { renderFields(selectType.value) })
    document.getElementById('accountFields').innerHTML = `
                            <label for="cnpj">CNPJ:</label>
                            <input type="text" id="cnpj" name="cnpj" placeholder="CNPJ">
                            <label for="city">Cidade:</label>
                            <input type="text" id="city" name="city" placeholder="Cidade">
                            <label for="price">Preço</label>
                            <input type="number" id="price" name="city" >
                            `;
}

function renderFields(accountType) {
    if (accountType === 'booking_site') {
        document.getElementById('accountFields').innerHTML = `
                            <label for="url">URL:</label>
                            <input type="text" id="url" name="url" placeholder="URL">
                            `;
    } else {
        document.getElementById('accountFields').innerHTML = `
                            <label for="cnpj">CNPJ:</label>
                            <input type="text" id="cnpj" name="cnpj" placeholder="CNPJ">
                            <label for="city">Cidade:</label>
                            <input type="text" id="city" name="city" placeholder="Cidade">
                            <label for="price">Preço</label>
                            <input type="number" id="price" name="price" >
                            `;
    }
}