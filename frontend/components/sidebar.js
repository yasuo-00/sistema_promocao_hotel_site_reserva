//import a from '../assets/styles/'

class Sidebar extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    adminSidebar() {
        
        return `
                <main id="main">
                <div id="sidebar" class="d-flex flex-column flex-shrink-0 bg-light">
                <a
                  href="/"
                  class="d-block p-3 link-dark text-decoration-none"
                  title="Icon-only"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                >
                  <span id="logo">Booking Deals</span>
                </a>
                <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li>
                    <a
                      href="http://localhost:3333/userHome"
                      class="nav-link py-3"
                      title="Home"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                    >
                      <div id="promo" class="homeSvg"></div>
                      <span id="nav-home">Home</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://localhost:3333/profile"
                      class="nav-link py-3"
                      title="Perfil"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                    >
                      <div id="promo" class="profileSvg"></div>
                      <span id="nav-profile">Perfil</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="nav-link py-3"
                      title="Promoções"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                    >
                      <div id="promo" class="salesSvg"></div>
                      <span id="nav-promo">Promoções</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://localhost:3333/hotelList"
                      class="nav-link py-3"
                      title="Hotéis"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                    >
                      <div id="promo" class="hotelSvg"></div>
                      <span id="nav-hotel">Hotéis</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://localhost:3333/addSales"
                      class="nav-link py-3"
                      title="Adicionar Nova Promoção"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                    >
                      <div id="promo" class="addSvg"></div>
                      <span id="nav-add-sales">Adicionar Nova Promoção</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://localhost:3333/addHotel"
                      class="nav-link py-3"
                      title="Registrar Hotel"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                    >
                      <div id="promo" class="addSvg"></div>
                      <span id="nav-add-hotel">Registrar Hotel</span>
                    </a>
                  </li>
                  <li>
                    <a
                    href="http://localhost:3333/addBookingSite"
                      class="nav-link py-3"
                      title="Registrar Site de Reserva"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                    >
                      <div id="promo" class="addSvg"></div>
                      <span id="nav-add-booking-site">Registrar Site de Reserva</span>
                    </a>
                  </li>
                  <li>
                    <a
                    id="logout"
                      href="http://localhost:3333/logout"
                      class="nav-link py-3"
                      title="Sair"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                    >
                      <div id="promo" class="logoutSvg"></div>
                      <span id="nav-logout">Sair</span>
                    </a>
                  </li>
                </ul>
              </div>
              </main>
        `;
    }

    userSidebar(){
        return `
                <main id="main">
                <div id="sidebar" class="d-flex flex-column flex-shrink-0 bg-light">
                <a
                  href="/"
                  class="d-block p-3 link-dark text-decoration-none"
                  title="Icon-only"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                >
                  <span id="logo">Booking Deals</span>
                </a>
                <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li>
                <a
                  href="http://localhost:3333/userHome"
                  class="nav-link py-3"
                  title="Home"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                >
                  <div id="promo" class="homeSvg"></div>
                  <span id="nav-home">Home</span>
                </a>
              </li>
              <li>
              <li>
              <a
                href="#"
                class="nav-link py-3"
                title="Promoções"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
              >
                <div id="promo" class="salesSvg"></div>
                <span id="nav-promo">Promoções</span>
              </a>
            </li>
            <li>
              <a
                href="http://localhost:3333/hotelList"
                class="nav-link py-3"
                title="Hotéis"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
              >
                <div id="promo" class="hotelSvg"></div>
                <span id="nav-hotel">Hotéis</span>
              </a>
            </li>
                </ul>
              </div>
              </main>
        `;
    }

    hotelSidebar(){
        return `
        <main id="main">
        <div id="sidebar" class="d-flex flex-column flex-shrink-0 bg-light">
        <a
          href="/"
          class="d-block p-3 link-dark text-decoration-none"
          title="Icon-only"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
        >
          <span id="logo">Booking Deals</span>
        </a>
        <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li>
            <a
              href="http://localhost:3333/userHome"
              class="nav-link py-3"
              title="Home"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <div id="promo" class="homeSvg"></div>
              <span id="nav-home">Home</span>
            </a>
          </li>
          <li>
            <a
              href="http://localhost:3333/profile"
              class="nav-link py-3"
              title="Perfil"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <div id="promo" class="profileSvg"></div>
              <span id="nav-profile">Perfil</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="nav-link py-3"
              title="Promoções"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <div id="promo" class="salesSvg"></div>
              <span id="nav-promo">Promoções</span>
            </a>
          </li>
          <li>
            <a
              href="http://localhost:3333/hotelList"
              class="nav-link py-3"
              title="Hotéis"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <div id="promo" class="hotelSvg"></div>
              <span id="nav-hotel">Hotéis</span>
            </a>
          </li>
          <li>
            <a
              href="http://localhost:3333/addSales"
              class="nav-link py-3"
              title="Adicionar Nova Promoção"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <div id="promo" class="addSvg"></div>
              <span id="nav-add-sales">Adicionar Nova Promoção</span>
            </a>
          </li>
          <li>
            <a
            id="logout"
              href="http://localhost:3333/logout"
              class="nav-link py-3"
              title="Sair"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <div id="promo" class="logoutSvg"></div>
              <span id="nav-logout">Sair</span>
            </a>
          </li>
        </ul>
      </div>
      </main>
        `;
    }

    bookingSiteSidebar(){
        return `
        <main id="main">
        <div id="sidebar" class="d-flex flex-column flex-shrink-0 bg-light">
        <a
          href="/"
          class="d-block p-3 link-dark text-decoration-none"
          title="Icon-only"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
        >
          <span id="logo">Booking Deals</span>
        </a>
        <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li>
            <a
              href="http://localhost:3333/userHome"
              class="nav-link py-3"
              title="Home"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <div id="promo" class="homeSvg"></div>
              <span id="nav-home">Home</span>
            </a>
          </li>
          <li>
            <a
              href="http://localhost:3333/profile"
              class="nav-link py-3"
              title="Perfil"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <div id="promo" class="profileSvg"></div>
              <span id="nav-profile">Perfil</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="nav-link py-3"
              title="Promoções"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <div id="promo" class="salesSvg"></div>
              <span id="nav-promo">Promoções</span>
            </a>
          </li>
          <li>
            <a
              href="http://localhost:3333/hotelList"
              class="nav-link py-3"
              title="Hotéis"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <div id="promo" class="hotelSvg"></div>
              <span id="nav-hotel">Hotéis</span>
            </a>
          </li>
          <li>
            <a
            id="logout"
              href="http://localhost:3333/logout"
              class="nav-link py-3"
              title="Sair"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              <div id="promo" class="logoutSvg"></div>
              <span id="nav-logout">Sair</span>
            </a>
          </li>
        </ul>
      </div>
      </main>
        `;
    }

    renderSidebar(){
        if(sessionStorage.getItem('user')){
            const userType = JSON.parse(sessionStorage.getItem('user')).type;
            switch(userType){
                case 'admin':
                    return this.adminSidebar();
                case 'hotel':
                    return this.hotelSidebar();
                case 'booking_site':
                    return this.bookingSiteSidebar();
                default:
                    return this.userSidebar();
            }
        }else{
            return this.userSidebar();
        }
    }

    render() {
        var script = document.createElement('script');
        script.src='/scripts/logout.js';
        document.head.appendChild(script);

        var script2 = document.createElement('script');
        script2.src='/scripts/sidebars.js';
        document.head.appendChild(script2);

        var script3 = document.createElement('script');
        script3.src='/scripts/functions.js';
        document.head.appendChild(script3);

        this.shadow.innerHTML = `
        <style>
                    @import url('/assets/styles/bootstrap.min.css');
                    @import url('/assets/styles/sidebars.css');
                    @import url('/assets/styles/sidebar.css');
        </style>
                    `+
                    this.renderSidebar()
                    +`
        `;
    }


}

customElements.define('my-sidebar', Sidebar);