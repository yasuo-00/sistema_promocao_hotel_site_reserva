//import a from '../assets/styles/sidebar.css'

class Sidebar extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback(){
        this.render();
    }

    render() {
        var script = document.createElement('script');
        script.src='/scripts/logout.js';
        document.head.appendChild(script);
        
        this.shadow.innerHTML = `
        <style>
        @import url('/assets/styles/sidebar.css');
        </style>
            <div class="dashboard">
            <div class="dashboardHeader">
                <p>Booking Deals</p>
            </div>
            <div class="navigation">
                <div class="navigationOption">
                    <div class="homeSvg"></div>
                    <a href="http://localhost:3333/userHome">Home</a>
                </div>
                <div class="navigationOption">
                    <div class="profileSvg"></div>
                    <a href="http://localhost:3333/profile">Perfil</a>
                </div>
                <div class="navigationOption">
                    <div class="salesSvg"></div>
                    <p>Promoções</p>
                </div>
                <div class="navigationOption">
                    <div class="hotelSvg"></div>
                    <a href="http://localhost:3333/hotelList">Hotéis</a>
                </div>
                <div class="navigationOption">
                    <div class="addSvg"></div>
                    <a href="http://localhost:3333/addSales">Adicionar Nova Promoção</a>
                </div>
                <div class="navigationOption">
                    <div class="registerSvg"></div>
                    <a href="http://localhost:3333/addHotel">Registrar Hotel</a>
                </div>
                <div class="navigationOption">
                    <div class="registerSvg"></div>
                    <a href="http://localhost:3333/addBookingSite">Registrar Site de Reservas</a>
                </div>
                <div class="navigationOption">
                    <div class="logoutSvg"></div>
                    <a clas="logout" id="logout" href="#">Sair</a>
                </div>
            </div>
        </div>
        `;
    }


}

customElements.define('my-sidebar', Sidebar);