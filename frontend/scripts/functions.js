function carregado() {
    console.log('carregado');
    responsiveLogo();
}

document.addEventListener('DOMContentLoaded', carregado, false);

window.addEventListener('resize', responsiveLogo)
function responsiveLogo() {
    const windowWidth = screen.width;
    console.log("Width - ", windowWidth);

    if (windowWidth < 900) {
        document.querySelector('my-sidebar').shadowRoot.getElementById('logo').innerText = 'Booking Deals';
    }
    if (windowWidth < 600) {
        document.querySelector('my-sidebar').shadowRoot.getElementById('logo').innerText = 'BD';
        document.querySelector('my-sidebar').shadowRoot.getElementById('nav-promo').hidden = true;
        document.querySelector('my-sidebar').shadowRoot.getElementById('nav-home').hidden = true;
        document.querySelector('my-sidebar').shadowRoot.getElementById('nav-hotel').hidden = true
        try{
            document.querySelector('my-sidebar').shadowRoot.getElementById('nav-add-sales').hidden = true;
            document.querySelector('my-sidebar').shadowRoot.getElementById('nav-add-hotel').hidden = true;
            document.querySelector('my-sidebar').shadowRoot.getElementById('nav-add-booking-site').hidden = true;
            document.querySelector('my-sidebar').shadowRoot.getElementById('nav-profile').hidden = true;
            document.querySelector('my-sidebar').shadowRoot.getElementById('nav-logout').hidden = true;
        }catch (error){

        }
    } else {
        document.querySelector('my-sidebar').shadowRoot.getElementById('logo').innerText = 'Booking Deals';
        document.querySelector('my-sidebar').shadowRoot.getElementById('nav-promo').hidden = false;
        document.querySelector('my-sidebar').shadowRoot.getElementById('nav-home').hidden = false;
        document.querySelector('my-sidebar').shadowRoot.getElementById('nav-hotel').hidden = false
        try{
            document.querySelector('my-sidebar').shadowRoot.getElementById('nav-add-sales').hidden = false;
            document.querySelector('my-sidebar').shadowRoot.getElementById('nav-add-hotel').hidden = false;
            document.querySelector('my-sidebar').shadowRoot.getElementById('nav-add-booking-site').hidden = false;
            document.querySelector('my-sidebar').shadowRoot.getElementById('nav-profile').hidden = false;
            document.querySelector('my-sidebar').shadowRoot.getElementById('nav-logout').hidden = false;
        }catch (error){

        }
    }
}