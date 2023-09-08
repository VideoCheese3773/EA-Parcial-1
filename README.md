# EA-Parcial-1

Como utilizar la API

Requests

Users
    users/get

    users/get/:id -> users/get/123456789

    users/post
        {
            "id": 123456789,
            "name": "Jhon",
            "last": "Doe",
            "email": "johnDoe@mail.com"
        }

    users/put/:id -> users/put/12345789
        {
            "id": 123456789,
            "name": "David",
            "last": "Doe",
            "email": "johnDoe@mail.com"
        }

    users/delete/:id -> users/delete/123456789

Characters
    characters/get

    characters/get/:id -> characters/get/123456789

    characters/post
        {
            "id": 741852963,
            "name": "Kerillian",
            "level": 30,
            "class": "Ranger: Swiftbow",
            "userId": 123456789
        }

    characters/put/:id -> characters/put/741852963
        {
            "id": 741852963,
            "name": "Kerillian Wiantaeath",
            "level": 30,
            "class": "Ranger: Swiftbow",
            "userId": 123456789
        }

    characters/delete/:id -> characters/delete/741852963

Items
    items/get

    items/get/:id -> items/get/1

    items/post
        {
            "id": 1,
            "name": "Modryn's Claws",
            "type": "Sword and Dagger",
            "mode": "Attack",
            "characterId": 741852963
        }

    items/put/:id -> items/put/1
        {
            "id": 1,
            "name": "Brackensong Blades",
            "type": "Sword and Dagger",
            "mode": "Attack",
            "characterId": 741852963
        }

    items/delete/:id -> items/delete/1