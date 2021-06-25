import React, { useState } from 'react';
import { useHistory, Link, Redirect } from 'react-router-dom'
import '../../../../assets/styles/registerBookingSite.css'
import Sidebar from '../../../../components/sidebar';
import api from '../../../../services/api';

export default function AddBookingSite() {
    const [url, setUrl] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function registerBookingSite() {
        try {
            const data = {
                email: email,
                password: password,
                url: url,
            }
            try {
                await api.post('/bookingSite/register', data)
                    .then(response => {
                        if (response.status == 204) {
                            alert('Site registrado com sucesso!')
                        } else {
                            alert('Erro ao cadastrar, verifique os campos e tente novamente')
                        }
                    })
            } catch (error) {
                console.log(error)
            }
        } catch (error) {
            alert('Erro ao adicionar site de reservas, tente novamente.')
        }
    }

    return (
        <div className="addBookingSite-pageContent">
            <Sidebar></Sidebar>
            <div className="addBookingSite-mainContent">
                <div className="addBookingSite-mainTitle">
                    <p>Registrar Site de Reservas</p>
                </div>
                <div className="addBookingSite-filter">
                    <form id="registerForm" className="addBookingSite-filterForm" onSubmit={registerBookingSite}>
                        <div className="addBookingSite-filterInput">
                            <label htmlFor="bookingSiteInput">URL do site:</label>
                            <input id="url" type="text" placeholder="URL" onChange={e => setUrl(e.target.value)} />
                        </div>
                        <div className="addBookingSite-filterInput">
                            <label htmlFor="bookingSiteInput">Email:</label>
                            <input id="email" type="text" placeholder="Email" pattern="[a-z]+([a-z]|.)*@[a-z]+\.([a-z]|.)*" title="Formato de email incorreto" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="addBookingSite-filterInput">
                            <label htmlFor="bookingSiteInput">Senha:</label>
                            <input id="password" type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
                        </div>

                        <input type="submit" value="REGISTRAR" />
                    </form>
                </div>
            </div>
        </div>
    )
}