import React, { useState } from 'react';
import { useHistory, Link, Redirect } from 'react-router-dom'
import '../../../../assets/styles/registerHotel.css'
import Sidebar from '../../../../components/sidebar';
import api from '../../../../services/api';

export default function AddHotel() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [name, setName] = useState('')
    const [dailyRate, setDailyRate] = useState(0)
    const [city, setCity] = useState('')

    async function registerHotel(){
        const data = {
            email: email,
            password: password,
            name: name,
            cnpj: cnpj,
            city: city,
            daily_rate: dailyRate,
        }
        await api.post('/hotel/register')
            .then(response => {
                if (response.status == 204) {
                    alert('Hotel registrado com sucesso!')
                } else {
                    alert('Erro ao cadastrar, verifique os campos e tente novamente')
                }
            })
    }

    return (
        <div className="addHotel-pageContent">
            <Sidebar></Sidebar>
            <div className="addHotel-mainContent">
                <div className="addHotel-mainTitle">
                    <p>Registar Hotel</p>
                </div>
                <div className="addHotel-filter">
                    <form className="addHotel-filterForm" onSubmit={registerHotel}>
                        <div id="registerForm" className="addHotel-filterInput">
                            <label htmlFor="hotelInput">Nome do Hotel:</label>
                            <input id="hotelName" type="text" placeholder="Hotel" onChange={e=>setName(e.target.value)}/>
                        </div>
                        <div className="addHotel-filterInput">
                            <label htmlFor="hotelInput">CNPJ:</label>
                            <input id="cnpj" type="text" placeholder="CNPJ" pattern="[0-9]{2}.[0-9]{3}.[0-9]{3}\/[0]{3}[1-2]-[0-9]" title="Formato de CNPJ incorreto (XX.XXX.XXX/000X-XXX)" onChange={e=>setCnpj(e.target.value)}/>
                        </div>
                        <div className="addHotel-filterInput">
                            <label htmlFor="hotelInput">Cidade:</label>
                            <input id="city" type="text" placeholder="Cidade" onChange={e=>setCity(e.target.value)}/>
                        </div>
                        <div className="addHotel-filterInput">
                            <label htmlFor="hotelInput">Email:</label>
                            <input id="email" type="text" placeholder="Email" pattern="[a-z]+([a-z]|.)*@[a-z]+\.([a-z]|.)*" title="Formato de email incorreto" onChange={e=>setEmail(e.target.value)}/>
                        </div>
                        <div className="addHotel-filterInput">
                            <label htmlFor="bookingSiteInput">Senha:</label>
                            <input id="password" type="password" placeholder="Senha" onChange={e=>setPassword(e.target.value)}/>
                        </div>
                        <div className="addHotel-filterInput">
                            <label htmlFor="hotelInput">Preço da diária:</label>
                            <input id="dailyRate" type="text" placeholder="Diária" onChange={e=>setDailyRate(e.target.value)}/>
                        </div>
                        <input type="submit" value="REGISTRAR" />
                    </form>
                </div>
            </div>
        </div>
    )
}