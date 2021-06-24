import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Sidebar from '../../components/sidebar'
import '../../assets/styles/addSales.css'
import api from '../../services/api'

export default function AddSales() {
    const [initialDate, setInicialDate] = useState('')
    const [finalDate, setFinalDate] = useState('')
    const [price, setPrice] = useState('')
    const [hotelId, setHotelId] = useState('')
    const [bookingSiteId, setBookingSiteId] = useState('')

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
                        </div>
                        <div id="bookingSiteSelect" class="salesInput">
                        </div>
                        <div class="salesInput">
                            <div class="salesTimeframe">
                                <div class="initialDate">
                                    <label for="initialDate">Data inicial:</label>
                                    <div class="calendarSvg"></div>
                                    <input id="initialDate" type="date" placeholder="Data inicial" required />
                                </div>
                                <div class="finalDate">
                                    <label for="finalDate">Data final:</label>
                                    <div class="calendarSvg"></div>
                                    <input id="finalDate" type="date" placeholder="Data final" required />
                                </div>
                            </div>
                        </div>
                        <div class="salesInput">
                            <label for="priceInput">Preço:</label>
                            <input type="number" id="priceInput" name="priceInput" placeholder="Preço" pattern="[0-9]{1,6}((.|,)[0-9]{1,2})?" title="Preço Inválido" required />
                        </div>
                        <input type="submit" value="ADICIONAR" />
                    </form>
                </div>
            </div>
        </div>
    )
}