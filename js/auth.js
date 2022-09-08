authSuccess()
authBlock()

function authBlock(message = false) {
    let loginAuth = document.getElementsByName('userName');
    let userPasswordAuth = document.getElementsByName('userPassword');
    let formAuth = document.querySelector('form');
    formAuth.addEventListener('submit', (event) => {
        event.preventDefault()
        if (loginAuth[0].value.toLowerCase() === "admin" && userPasswordAuth[0].value === "Admin") {
            popUp(select('.access_success'), 400)
            setCookie('user', "valid")
            setTimeout( authSuccess,400)

        } else {
            popUp(select('.access_denied'), 400)
        }

    })

}

function authSuccess() {
    if (getCookie('user') === 'valid') {
        document.querySelector('#main_card').classList.remove('d-none')
        document.querySelector('.auth_block').classList.add('d-none')

    }
}

function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        // за потреби додайте інші типові значення
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    })
}
