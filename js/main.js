const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
];

let createElem = (obj, key, tag = "div", path, stringName = "", style = "", attribute) => {
    let el = document.createElement(tag);
    el.classList = style;
    if (Array.isArray(key) && key.length > 1) {
        let tmp = ""
        key.forEach((item) => {
            if (obj[item] !== undefined) tmp += "  " + obj[item]
        })
        el.innerHTML = stringName + tmp
    } else {
        if (obj[key] === undefined) el.innerHTML = stringName
        else el.innerHTML = stringName + obj[key]
    }
    if (attribute !== undefined) el.setAttribute(attribute, obj.id)
    path.append(el)
};
let renderUsers = (users) => {
    users.forEach((item) => {
        renderUser(item)
    })

};
let renderUser = (item) => {
    let card = document.createElement("div")
    card.setAttribute("id", item.id)
    card.classList = "col-12 col-md-5 m-2 px-4  mb-3 pb-4 position-relative card "
    createElem(item, '', 'p', card, 'REMOVE', 'remove position-absolute', 'data-id',)
    createElem(item, 'username', 'h3', card, '', 'text-white text-center user-property')
    createElem(item, 'name', 'h5', card, "Name: ", 'name-property')
    createElem(item, 'phone', 'p', card, "Phone: ", "fz-12 mb-1 ")
    createElem(item.address, ["street", 'suite', 'zipcode'], 'p', card, "Address: ", 'fz-10 mb-1')
    createElem(item, ['email'], 'p', card, "Email: ", 'fz-12 mb-1 text-white')
    createElem(item.company, 'name', 'p', card, "Company : ", 'fz-12 mb-1')
    createElem(item, ['website'], 'p', card, "", 'fz-12 mb-1 text-white text-center')
    // createElem(item.company, 'catchPhrase', 'p', card, 'Catch Phrase: ', 'fz-12 mb-1')
    // createElem(item.company, 'bs', 'p', card, 'BS: ', 'fz-12 mb-1')
    createElem(item.address.geo, ['lat', 'lng'], 'p', card, 'GEO location: ', 'fz-12 mb-1 text-white ')
    createElem(item, 'id', 'p', card, 'id: ', 'idUser position-absolute')
    document.getElementsByClassName('cards')[0].append(card)
}
renderUsers(users);
let cards = select('.cards');
let warning = select('.warning')
let btnHide = select('.btnHide');
let formHide = select('#create_card')
let elementToggle = (el, elToggle) => {
    el.addEventListener('click', () => {
        formHide.classList.toggle('form_toggle')
    })
};
elementToggle(btnHide, formHide);
formHide.addEventListener('submit', (event) => {
    let inputs = document.querySelectorAll(`input`);
    let card = {
        "id": selectValue(`#card_id`),
        "name": selectValue(`#Name`),
        "username": selectValue(`#NickName`),
        "email": selectValue('#email'),
        "address": {
            "street": selectValue('#Address'),
            "suite": "",
            "city": "",
            "zipcode": "",
            "geo": {
                "lat": "*******",
                "lng": "*******"
            }
        },
        "phone": selectValue('#Phone'),
        "website": selectValue('#website'),
        "company": {
            "name": selectValue('#company_name'),
            "catchPhrase": "",
            "bs": ""
        }
    };
    event.preventDefault();
    if (!verification(inputs)) select('.warning').classList.add('d-block')
    else {
        users.push(card)
        clearing(inputs)
        renderUser(card);
    }

});
cards.addEventListener('click', (event) => {
    console.log()
    if (event.target.closest('.card')) event.target.closest('.card').classList.toggle('active')
    if (event.target.tagName === "P" && event.target.innerHTML === "REMOVE") event.target.closest('.card').remove()
});
warning.addEventListener('click',(event)=>{
    if (event.target.tagName === "I") select('.warning').classList.remove('d-block')
})
function selectValue(selector) {
    return document.querySelector(selector).value
};
function select(selector) {
    return document.querySelector(selector)
}
function verification(arr) {
    for (const element of arr) {
        if (element.value === "") return false
    }
    return true
};
function clearing(arr) {
    for (const element of arr) {
        if (element.type !== "submit") element.value = ""

    }

}



