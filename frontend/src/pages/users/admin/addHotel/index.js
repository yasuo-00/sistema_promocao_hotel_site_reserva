import React, { useState } from 'react';
import { useHistory, Link, Redirect } from 'react-router-dom'
import '../../../../assets/styles/registerHotel.css'
import Sidebar from '../../../../components/sidebar';
import api from '../../../../services/api';

export default function AddHotel() {

    return (
        <div className="addHotel-pageContent">
            <Sidebar></Sidebar>
            <div className="addHotel-mainContent">
                <div className="addHotel-mainTitle">
                    <p>Registar Hotel</p>
                </div>
                <div className="addHotel-filter">
                    <form className="addHotel-filterForm">
                        <div id="registerForm" className="addHotel-filterInput">
                            <label for="hotelInput">Nome do Hotel:</label>
                            <input id="hotelName" type="text" placeholder="Hotel" />
                        </div>
                        <div className="addHotel-filterInput">
                            <label for="hotelInput">CNPJ:</label>
                            <input id="cnpj" type="text" placeholder="CNPJ" pattern="[0-9]{2}.[0-9]{3}.[0-9]{3}\/[0]{3}[1-2]-[0-9]" title="Formato de CNPJ incorreto (XX.XXX.XXX/000X-XXX)" />
                        </div>
                        <div className="addHotel-filterInput">
                            <label for="hotelInput">Cidade:</label>
                            <input id="city" type="text" placeholder="Cidade" />
                        </div>
                        <div className="addHotel-filterInput">
                            <label for="hotelInput">Email:</label>
                            <input id="email" type="text" placeholder="Email" pattern="[a-z]+([a-z]|.)*@[a-z]+\.([a-z]|.)*" title="Formato de email incorreto" />
                        </div>
                        <div className="addHotel-filterInput">
                            <label for="bookingSiteInput">Senha:</label>
                            <input id="password" type="password" placeholder="Senha" />
                        </div>
                        <div className="addHotel-filterInput">
                            <label for="hotelInput">Preço da diária:</label>
                            <input id="dailyRate" type="text" placeholder="Diária" />
                        </div>
                        <input type="submit" value="REGISTRAR" />
                    </form>
                </div>
            </div>
        </div>
    )
}