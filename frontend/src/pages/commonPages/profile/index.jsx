import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Sidebar from '../../../components/sidebar'
import '../../../assets/styles/profile.css'
import api from '../../../services/api'

export default function Profile() {
    const [profile, setProfile] = useState([])
    const [email, setEmail] = useState('')
    const [url, setUrl] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [name, setName] = useState('')
    const [dailyRate, setDailyRate] = useState(0)
    const [city, setCity] = useState('')
    const [description, setDescription] = useState('')
    const user = JSON.parse(sessionStorage.getItem('user'))

    async function getProfile() {
        const data = {
            id: user.id_user
        }
        var url = ''
        //verifica tipo de conta e seta o perfil correspondente
        //se for hotel
        if (user.type === 'hotel') {
            url = '/hotel/getById'
            try {
                api.post(url, data).then(response => {
                    console.log(response.data.hotel)
                    setProfile(response.data.hotel)
                })
            } catch (error) {
                console.log(error)
            }
        } else if (user.type === 'booking_site') { //se for site de reserva
            url = '/bookingSite/getById'
            try {
                api.post(url, data).then(response => {
                    console.log(response.data.bookingSite)
                    setProfile(response.data.bookingSite)
                })
            } catch (error) {
                console.log(error)
            }
        }
        if (url === '') { //se for admin
            setProfile({ email: user.email })
        }
    }

    async function submitEdit() {
        try {
            const userData = {
                email: email,
                id_user: user.id_user,
                type: user.type
            }
            await api.put('/editUser', userData)
            if (user.type === 'hotel') {
                const data = {
                    id_user: user.id_user,
                    type: user.type,
                    email: email,
                    name: name,
                    city: city,
                    description: description
                }
                await api.put('/hotel/edit')
            } else if (user.type === 'booking_site') {
                const data = {
                    id_user: user.id_user,
                    type: user.type,
                    email: email,
                    name: name,
                    url: url,
                }
                await api.put('/bookingSite/edit', data)
            }
            alert('Perfil Editado com Sucesso!')
        } catch (error) {
            alert('Erro ao editar perfil. Por favor, tente novamente.')
        }
    }

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <div className="profilePage-pageContent">
            <Sidebar></Sidebar>
            <div className="profilePage-account">
                <p>Editar Perfil</p>
                <div className="profilePage-profileCard">
                    <div className="profilePage-profileImg"></div>
                    <div className="profilePage-profileInfo">
                        <div className="profilePage-profileHeader">
                            <p>Meu Perfil</p>
                            <hr className="profilePage-headerSeparator" />
                        </div>
                        <form id="profileForm" className="profilePage-profileData" onSubmit={submitEdit}>
                            {user.type === 'hotel' &&
                                <>
                                    <div className="profilePage-profileProps">
                                        <p className="profilePage-profilePropName">Nome:</p>
                                        <input id="name" className="profilePage-profilePropValue" defaultValue={profile.name} onChange={e => setName(e.target.value)} />
                                    </div>
                                    <div className="profilePage-profileProps">
                                        <p className="profilePage-profilePropName">CNPJ:</p>
                                        <p className="profilePage-profilePropValue">{profile.cnpj}</p>
                                    </div>
                                    <div className="profilePage-profileProps">
                                        <p className="profilePage-profilePropName">Email:</p>
                                        <input id="email" className="profilePage-profilePropValue" defaultValue={profile.email} pattern="[a-z]+([a-z]|.)*@[a-z]+\.([a-z]|.)*" title="Formato de email incorreto" onChange={e => setEmail(e.target.value)} />
                                    </div>
                                    <div className="profilePage-profileProps">
                                        <p className="profilePage-profilePropName">Cidade:</p>
                                        <input id="city" className="profilePage-profilePropValue" defaultValue={profile.city} onChange={e => setCity(e.target.value)} />
                                    </div>
                                    <div className="profilePage-profileProps">
                                        <p className="profilePage-profilePropName">Descrição:</p>
                                        <input id="description" className="profilePage-profilePropValue" defaultValue={profile.description} onChange={e => setDescription(e.target.value)} />
                                    </div>
                                </>
                            }
                            {user.type === 'booking_site' &&
                                <>
                                    <div className="profilePage-profileProps">
                                        <p className="profilePage-profilePropName">URL</p>
                                        <input id="url" className="profilePage-profilePropValue" defaultValue={profile.url} onChange={e => setUrl(e.target.value)} />
                                    </div>
                                    <div className="profilePage-profileProps">
                                        <p className="profilePage-profilePropName">Email:</p>
                                        <input id="email" className="profilePage-profilePropValue" defaultValue={profile.email} pattern="[a-z]+([a-z]|.)*@[a-z]+\.([a-z]|.)*" title="Formato de email incorreto" onChange={e => setEmail(e.target.value)} />
                                    </div>
                                </>
                            }
                            {user.type === 'admin' &&
                                <div className="profilePage-profileProps">
                                    <p className="profilePage-profilePropName">Email:</p>
                                    <input id="email" className="profilePage-profilePropValue" defaultValue={profile.email} pattern="[a-z]+([a-z]|.)*@[a-z]+\.([a-z]|.)*" title="Formato de email incorreto" onChange={e => setEmail(e.target.value)} />
                                </div>
                            }
                        </form>
                        <button id="editProfileButton" type="submit" className="profilePage-editProfileButton" onClick={submitEdit}>EDITAR PERFIL</button>
                    </div>
                </div>
            </div>
        </div>
    )
}