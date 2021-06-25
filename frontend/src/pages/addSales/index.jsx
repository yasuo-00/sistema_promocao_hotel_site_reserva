import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Sidebar from '../../components/sidebar'
import '../../assets/styles/addSales.css'
import api from '../../services/api'

export default function AddSales() {
    const [initialDate, setInitialDate] = useState('')
    const [finalDate, setFinalDate] = useState('')
    const [price, setPrice] = useState('')
    const [hotelId, setHotelId] = useState('')
    const [bookingSiteId, setBookingSiteId] = useState('')
    const [bookingSiteList, setBookingSiteList] = useState([])
    const [hotelList, setHotelList] = useState([])

    async function submitSalesForm(e) {
        e.preventDefault()
        const data = {
            booking_site_id: bookingSiteId,
            hotel_id: hotelId,
            price: price,
            initial_date: new Date(initialDate).toISOString(),
            final_date: new Date(finalDate).toISOString()
        }
        api.post('addSales', data)
            .then(response => {
                if (response.status == 200) {
                    alert('Promoção adicionada com sucesso')
                } else {
                    alert('Falha ao adicionar promoção, tente novamente')
                }
            })
    }

    async function bookingSiteSelect() {
        await api.get('/bookingSite/listAll')
            .then(response => {
                if (response.status == 200) {
                    console.log(response.data.bookingSiteList)
                    setBookingSiteList(response.data.bookingSiteList)
                }
            })
    }
    async function hotelSelect() {
        await api.get('/hotel/listAll')
            .then(response => {
                if (response.status == 200) {
                    console.log(response.data.hotelList)
                    setHotelList(response.data.hotelList)
                }
            })
    }

    useEffect(() => {
        try {
            bookingSiteSelect()
            hotelSelect()
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <div class="pageContent">
            <Sidebar></Sidebar>
            <div class="mainContent">
                <div class="mainTitle">
                    <p>Adicionar Nova Promoção</p>
                </div>
                <div class="sales">
                    <form id="salesForm" class="salesForm" onSubmit={submitSalesForm}>
                        <div id="hotelSelect" class="salesInput">
                            <label htmlFor="hotel">Hotel:</label>
                            <select name="hotel" id="hotel" onChange={e=>setHotelId(e.target.value)}>
                                {hotelList.map((hotel)=> (
                                    <option value={hotel.id_user}>{hotel.name}</option>
                                ))
                                }
                            </select>
                        </div>
                        <div id="bookingSiteSelect" class="salesInput">
                            <label htmlFor="bookingSite">Site de Reservas:</label>
                            <select name="bookingSite" id="bookingSite" onChange={e=>setBookingSiteId(e.target.value)}>
                                {bookingSiteList.map((bookingSite)=> (
                                    <option value={bookingSite.id_user}>{bookingSite.url}</option>
                                ))
                                }
                            </select>
                        </div>
                        <div class="salesInput">
                            <div class="salesTimeframe">
                                <div class="initialDate">
                                    <label htmlFor="initialDate">Data inicial:</label>
                                    <div class="calendarSvg"></div>
                                    <input id="initialDate" type="date" placeholder="Data inicial" required onChange={e => setInitialDate(e.target.value)} />
                                </div>
                                <div class="finalDate">
                                    <label htmlFor="finalDate">Data final:</label>
                                    <div class="calendarSvg"></div>
                                    <input id="finalDate" type="date" placeholder="Data final" required onChange={e => setFinalDate(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div class="salesInput">
                            <label htmlFor="priceInput">Preço:</label>
                            <input type="number" id="priceInput" name="priceInput" placeholder="Preço" pattern="[0-9]{1,6}((.|,)[0-9]{1,2})?" title="Preço Inválido" required onChange={e => setPrice(e.target.value)} />
                        </div>
                        <input type="submit" value="ADICIONAR" />
                    </form>
                </div>
            </div>
        </div>
    )
}