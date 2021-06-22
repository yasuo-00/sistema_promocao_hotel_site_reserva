import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Sidebar from '../../../components/sidebar'
import '../../../assets/styles/userHome.css'
import api from '../../../services/api'
import formatDate from '../../../utils/dateFormatter'

export default function UserHome() {
    const [profile, setProfile] = useState(null)
    const [salesList, setSalesList] = useState([])
    const user = JSON.parse(sessionStorage.getItem('user'));

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

    async function listSales() {
        let url = ''
        if (user.type === 'hotel') {
            url = '/sales/listByHotel'
        } else if (user.type === 'booking_site') {
            url = '/sales/listByBookingSite'
        }
        try {
            if (url == '') {
                api.get('/sales/listAll')
                    .then(response => {
                        console.log(response.data)
                        setSalesList(response.data.salesList)
                    })
            } else {
                const data = {
                    id_hotel: user.id_user,
                    id_booking_site: user.id_user
                }
                api.post(url, data)
                    .then(response => {
                        console.log(response.data)
                        setSalesList(response.data.salesList)
                    })
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProfile()
        listSales()
    }, [])

    return (profile !== null &&
        <div className="userHomePage-pageContent">
            <Sidebar></Sidebar>
            <div className="userHomePage-mainContent">
                <div className="userHomePage-listTitle">
                    <p>FILTRAR PROMOÇÕES</p>
                </div>
                <div className="userHomePage-filter">
                    <form id="filterForm" className="userHomePage-filterForm">
                        <div className="userHomePage-salesTimeframe">
                            <div className="userHomePage-initialDate">
                                <div className="userHomePage-calendarSvg"></div>
                                <input type="date" placeholder="Data inicial" />
                            </div>
                            <div className="userHomePage-finalDate">
                                <div className="userHomePage-calendarSvg"></div>
                                <input type="date" placeholder="Data final" />
                            </div>
                        </div>
                        <input type="submit" value="PESQUISAR" />
                    </form>
                </div>
                <div className="userHomePage-listTitle">
                    <p>ÚLTIMAS PROMOÇÕES</p>
                </div>
                <div id="salesList" className="userHomePage-salesList">
                    {salesList.map((sale) => (
                        <div className="homePage-hotelCard">
                            <div className="homePage-hotelImg"></div>
                            <div className="homePage-hotelInfo">
                                <p className="homePage-hotelName">
                                    {sale.hotel_name}
                                </p>
                                <p className="homePage-bookingSiteUrl">
                                    {sale.url}
                                </p>
                                <p className="homePage-hotelCity">
                                    {sale.city}
                                </p>
                                <p className="homePage-hotelDescription">
                                    {sale.description}
                                </p>
                                <p clas="salesStartDate">
                                    Data inicial: {formatDate(sale.start_date)}
                                </p>
                                <p clas="salesEndDate">
                                    Data final: {formatDate(sale.end_date)}
                                </p>
                                <p className="homePage-hotelPrice">
                                    R$ {sale.daily_rate} por noite
                        </p>
                            </div>
                        </div>
                    ))

                    }
                </div>
            </div>
            <div className="userHomePage-account">
                <div className="userHomePage-profileCard">
                    <div className="userHomePage-profileImg"></div>
                    <div className="userHomePage-profileInfo">
                        <div className="userHomePage-profileHeader">
                            <p>Meus Dados</p>
                            <hr className="userHomePage-headerSeparator" />
                        </div>
                        <div id="profileData" className="userHomePage-profileData">
                            {user.type === 'hotel' &&
                                <>
                                    <div className="userHomePage-profileProps">
                                        <p className="userHomePage-profilePropName">Nome:</p>
                                        <input id="name" className="userHomePage-profilePropValue" value={profile.name} readonly />
                                    </div>
                                    <div className="userHomePage-profileProps">
                                        <p className="userHomePage-profilePropName">CNPJ:</p>
                                        <p className="userHomePage-profilePropValue">{profile.cnpj}</p>
                                    </div>
                                    <div className="userHomePage-profileProps">
                                        <p className="userHomePage-profilePropName">Email:</p>
                                        <input id="email" className="userHomePage-profilePropValue" value={profile.email} pattern="[a-z]+([a-z]|.)*@[a-z]+\.([a-z]|.)*" title="Formato de email incorreto" readonly />
                                    </div>
                                    <div className="userHomePage-profileProps">
                                        <p className="userHomePage-profilePropName">Cidade:</p>
                                        <input id="city" className="userHomePage-profilePropValue" value={profile.city} readonly />
                                    </div>
                                    <div className="userHomePage-profileProps">
                                        <p className="userHomePage-profilePropName">Descrição:</p>
                                        <input id="description" className="userHomePage-profilePropValue" value={profile.description} readonly />
                                    </div>
                                </>
                            }
                            {user.type === 'booking_site' &&
                                <>
                                    <div className="userHomePage-profileProps">
                                        <p className="userHomePage-profilePropName">URL</p>
                                        <input id="url" className="userHomePage-profilePropValue" value={profile.url} readonly />
                                    </div>
                                    <div className="userHomePage-profileProps">
                                        <p className="userHomePage-profilePropName">Email:</p>
                                        <input id="email" className="userHomePage-profilePropValue" value={profile.email} pattern="[a-z]+([a-z]|.)*@[a-z]+\.([a-z]|.)*" title="Formato de email incorreto" readonly />
                                    </div>
                                </>
                            }
                            {user.type === 'admin' &&
                                <div className="userHomePage-profileProps">
                                    <p className="userHomePage-profilePropName">Email:</p>
                                    <input id="email" className="userHomePage-profilePropValue" value={profile.email} pattern="[a-z]+([a-z]|.)*@[a-z]+\.([a-z]|.)*" title="Formato de email incorreto" readonly />
                                </div>
                            }
                        </div>
                    </div>
                    <Link className="userHomePage-editProfileButton" to='/editProfile' >EDITAR PERFIL</Link>
                </div>
            </div>
        </div>
    )
}