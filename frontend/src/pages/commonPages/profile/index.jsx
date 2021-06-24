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

    useEffect(()=>{
        getProfile()
    })

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
                        <form id="profileForm" className="profilePage-profileData">
                        {user.type === 'hotel' &&
                                <>
                                    <div className="profilePage-profileProps">
                                        <p className="profilePage-profilePropName">Nome:</p>
                                        <input id="name" className="profilePage-profilePropValue" value={profile.name} onChange={e=>setName(e.target.value)} />
                                    </div>
                                    <div className="profilePage-profileProps">
                                        <p className="profilePage-profilePropName">CNPJ:</p>
                                        <p className="profilePage-profilePropValue">{profile.cnpj}</p>
                                    </div>
                                    <div className="profilePage-profileProps">
                                        <p className="profilePage-profilePropName">Email:</p>
                                        <input id="email" className="profilePage-profilePropValue" value={profile.email} pattern="[a-z]+([a-z]|.)*@[a-z]+\.([a-z]|.)*" title="Formato de email incorreto"  />
                                    </div>
                                    <div className="profilePage-profileProps">
                                        <p className="profilePage-profilePropName">Cidade:</p>
                                        <input id="city" className="profilePage-profilePropValue" value={profile.city}  />
                                    </div>
                                    <div className="profilePage-profileProps">
                                        <p className="profilePage-profilePropName">Descrição:</p>
                                        <input id="description" className="profilePage-profilePropValue" value={profile.description}  />
                                    </div>
                                </>
                            }
                            {user.type === 'booking_site' &&
                                <>
                                    <div className="profilePage-profileProps">
                                        <p className="profilePage-profilePropName">URL</p>
                                        <input id="url" className="profilePage-profilePropValue" value={profile.url}  />
                                    </div>
                                    <div className="profilePage-profileProps">
                                        <p className="profilePage-profilePropName">Email:</p>
                                        <input id="email" className="profilePage-profilePropValue" value={profile.email} pattern="[a-z]+([a-z]|.)*@[a-z]+\.([a-z]|.)*" title="Formato de email incorreto"  />
                                    </div>
                                </>
                            }
                            {user.type === 'admin' &&
                                <div className="profilePage-profileProps">
                                    <p className="profilePage-profilePropName">Email:</p>
                                    <input id="email" className="profilePage-profilePropValue" value={profile.email} pattern="[a-z]+([a-z]|.)*@[a-z]+\.([a-z]|.)*" title="Formato de email incorreto"  />
                                </div>
                            }
                        </form>
                        <button id="editProfileButton" type="submit" className="profilePage-editProfileButton">EDITAR PERFIL</button>
                    </div>
                </div>
            </div>
        </div>
    )
}