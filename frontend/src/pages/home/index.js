import React, { useEffect, useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import '../../assets/styles/home.css'
import api from '../../services/api'
import Sidebar from '../../components/sidebar'
import formatDate from '../../utils/dateFormatter'

export default function Home() {
    const [salesList, setSalesList] = useState([])

    useEffect(() => {
        try{
            const list = api.get('/sales/listAll').then(response => {
                console.log(response.data.salesList)
                setSalesList(response.data.salesList)
            })
        }catch(error){
            alert('Erro ao listar promoções, favor tentar mais tarde')
        }
    },[])

    return (
        <div className="homePage-pageContent">
            <Sidebar></Sidebar>
            <div className="homePage-mainContent">
                <div className="homePage-search">
                    <form id="searchForm" className="homePage-searchForm">
                        <div className="homePage-searchSvg"></div>
                        <input className="homePage-searchInput" type="text" placeholder="Pesquisar Hotel por nome" />
                    </form>
                    <div className="homePage-accountAction">
                        <Link to='/register' className="homePage-registerButton">CADASTRE-SE</Link>
                        <Link to='/login' className="homePage-loginButton">LOGIN</Link>
                    </div>
                </div>
                <div className="homePage-filter">
                    <form id="filterForm" className="homePage-filterForm">
                        <div className="homePage-destination">
                            <div className="homePage-destinationSvg"></div>
                            <input id="destination" type="text" placeholder="Cidade de Destino" />
                        </div>
                        <div className="homePage-bookingDuration">
                            <div className="homePage-checkin">
                                <div className="homePage-calendarSvg"></div>
                                <input id="startDate" type="date" placeholder="Check-in" />
                            </div>
                            <div className="homePage-checkout">
                                <div className="homePage-calendarSvg"></div>
                                <input id="endDate" type="date" placeholder="Check-out" />
                            </div>
                        </div>
                        <input type="submit" value="PESQUISAR" />
                    </form>
                </div>
                <div id="salesList" className="homePage-hotelList">
                    {salesList.map((sale,index) => (
                        <div key={index} className="homePage-hotelCard">
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
                    ))}
                </div>
            </div>
            <div className="homePage-account">
                <div className="homePage-accountAction">
                    <Link to="/register" className="homePage-registerButton">CADASTRE-SE</Link>
                    <Link to="/login" className="homePage-loginButton">LOGIN</Link>
                </div>
                <div className="homePage-bgImage"></div>
            </div>
        </div>
    )
}