import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import api from '../services/api'
import '../assets/styles/bootstrap.min.css'
import '../assets/styles/sidebar.css'
import '../assets/styles/sidebars.css'


export default function Sidebar() {
  const [user, setUser] = useState(null)
  const history = useHistory()

  function logout(){
    sessionStorage.removeItem('user')
    return history.push('/')
  }

  useEffect(() => {
    if (sessionStorage.getItem('user')) {
      console.log(JSON.parse(sessionStorage.getItem('user')))
      setUser(JSON.parse(sessionStorage.getItem('user')))
    }
  }, [])

  return (
    <main id="main">
      <div id="sidebar" className="d-flex flex-column flex-shrink-0 bg-light">
        <a
          href="/"
          className="d-block p-3 link-dark text-decoration-none"
          title="Icon-only"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
        >
          <span id="logo">Booking Deals</span>
        </a>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li>
            <a
              href="http://localhost:3000/userHome"
              className="nav-link py-3"
              title="Home"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <div id="promo" className="homeSvg"></div>
              <span id="nav-home">Home</span>
            </a>
          </li>
          {user!==null &&
            <li>
              <a
                href="http://localhost:3000/profile"
                className="nav-link py-3"
                title="Perfil"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
              >
                <div id="promo" className="profileSvg"></div>
                <span id="nav-profile">Perfil</span>
              </a>
            </li>
          }
          <li>
            <a
              href="#"
              className="nav-link py-3"
              title="Promoções"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <div id="promo" className="salesSvg"></div>
              <span id="nav-promo">Promoções</span>
            </a>
          </li>
          <li>
            <a
              href="http://localhost:3000/hotelList"
              className="nav-link py-3"
              title="Hotéis"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <div id="promo" className="hotelSvg"></div>
              <span id="nav-hotel">Hotéis</span>
            </a>
          </li>
          {(user!==null && (user.type === 'admin' | user.type === 'hotel')) &&
            <li>
              <a
                href="http://localhost:3000/addSales"
                className="nav-link py-3"
                title="Adicionar Nova Promoção"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
              >
                <div id="promo" className="addSvg"></div>
                <span id="nav-add-sales">Adicionar Nova Promoção</span>
              </a>
            </li>
          }
          {(user!==null && user.type === 'admin' )&&
            <>
              <li>
                <a
                  href="http://localhost:3000/addHotel"
                  className="nav-link py-3"
                  title="Registrar Hotel"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                >
                  <div id="promo" className="addSvg"></div>
                  <span id="nav-add-hotel">Registrar Hotel</span>
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:3000/addBookingSite"
                  className="nav-link py-3"
                  title="Registrar Site de Reserva"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                >
                  <div id="promo" className="addSvg"></div>
                  <span id="nav-add-booking-site">Registrar Site de Reserva</span>
                </a>
              </li>
            </>
          }
          {user!==null &&
            <li>
              <a
                id="logout"
                className="nav-link py-3"
                title="Sair"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                onClick={logout}
              >
                <div id="promo" className="logoutSvg"></div>
                <span id="nav-logout">Sair</span>
              </a>
            </li>
          }
        </ul>
      </div>
    </main>
  )
}