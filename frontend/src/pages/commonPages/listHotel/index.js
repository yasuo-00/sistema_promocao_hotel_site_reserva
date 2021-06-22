import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Sidebar from '../../../components/sidebar'
import '../../../assets/styles/hotelList.css'
import api from '../../../services/api'

export default function ListHotel() {
    const [hotelList, setHotelList] = useState([])

    function renderHotelList() {
        console.log('')
    }

    useEffect(() => {
        api.get('/hotel/listAll')
            .then(response => {
                console.log(response.data.hotelList)
                setHotelList(response.data.hotelList)
            })
    }, [])

    return (
        <div className="hotelList-pageContent">
            <Sidebar></Sidebar>
            <div className="hotelList-mainContent">
                <div className="hotelList-search">
                    <form id="searchForm">
                        <input id="searchInput" className="hotelList-searchInput" type="text" placeholder="Pesquisar Hotel por nome" />
                    </form>
                    <div className="hotelList-searchSvg"></div>
                </div>
                <div className="hotelList-listTitle">
                    <p>LISTA DE HOTÉIS</p>
                </div>
                <div id="hotelList" className="hotelList-hotelList">
                    {hotelList.map((hotel) => (
                        <div className="hotelList-hotelCard">
                            <div className="hotelList-hotelImg"></div>
                            <div className="hotelList-hotelInfo">
                                <p className="hotelList-hotelName">
                                    {hotel.name}
                                </p>
                                <p className="hotelList-hotelDescription">
                                    {hotel.description}
                                </p>
                                <p className="hotelList-hotelPrice">
                                    R$ {hotel.daily_rate} por noite
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}