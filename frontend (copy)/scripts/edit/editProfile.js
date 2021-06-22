window.addEventListener('load', editProfileForm)

function editProfileForm() {
    const button = document.getElementById('editProfileButton');
    button.addEventListener('click', function () { editProfile() })
}

function editProfile() {
    switch (JSON.parse(sessionStorage.getItem('user')).type) {
        case 'admin':
            editAdminProfile();
            break;
        case 'hotel':
            editHotelProfile();
            break;
        case 'booking_site':
            editBookingSiteProfile();
            break;
        default:
            alert('Erro ao editar perfil, tente novamente');
    }
}

function editAdminProfile() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const url = 'http://localhost:3333/editUser';
    const data = {
        id_user: user.id_user,
        email: document.getElementById('email').value,
        type: user.type
    }
    submitEditing(data,url);
}

function editHotelProfile() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const url = 'http://localhost:3333/hotel/edit';
    const data = {
        id_user: user.id_user,
        type: user.type,
        email:document.getElementById('email').value,
        name:document.getElementById('name').value,
        city:document.getElementById('city').value,
        description:document.getElementById('description').value
    }
    submitEditing(data,url);
}

function editBookingSiteProfile() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const url = 'http://localhost:3333/bookingSite/edit';
    const data = {
        id_user: user.id_user,
        type: user.type,
        email:document.getElementById('email').value,
        name:document.getElementById('name').value,
        url:document.getElementById('url').value,
    }
    submitEditing(data,url);
}

function submitEditing(profileData, url) {
    const options = {
        method: 'PUT',
        body: JSON.stringify(profileData),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(url, options)
        .then(res => {
            if (res.status == 200) {
                alert('Perfil editado com sucesso');
                document.location.reload();
            } else {
                alert('Falha ao editar perfil, tente novamente');
            }
        });
}