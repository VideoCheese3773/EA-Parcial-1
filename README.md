# EA-Parcial-1

Como utilizar la API

Requests

______________________________________________________________________________

Users

Para pedir todos los users
    users/get

Para pedir un user especifico
    users/get/:id -> users/get/123456789

Para crear un nuevo user
    users/post
    Cuerpo de JSON:
        {
            "id": 123456789,
            "name": "Jhon",
            "last": "Doe",
            "email": "johnDoe@mail.com"
        }

Para modificar un user en especifico
    users/put/:id -> users/put/12345789
    Cuerpo de JSON
        {
            "id": 123456789,
            "name": "David",
            "last": "Doe",
            "email": "johnDoe@mail.com"
        }

Para borrar un user en especifico
    users/delete/:id -> users/delete/123456789

______________________________________________________________________________

Characters

Para pedir todos los characters
    characters/get

Para pedir un character en especifico
    characters/get/:id -> characters/get/123456789

Para crear un nuevo character
    characters/post
    Cuerpo del JSON:
        {
            "id": 741852963,
            "name": "Kerillian",
            "level": 30,
            "class": "Ranger: Swiftbow",
            "userId": 123456789
        }

Para modificar un character en especifico
    characters/put/:id -> characters/put/741852963
    CUerpo del JSON:
        {
            "id": 741852963,
            "name": "Kerillian Wiantaeath",
            "level": 30,
            "class": "Ranger: Swiftbow",
            "userId": 123456789
        }

Para eliminar un character en especifico
    characters/delete/:id -> characters/delete/741852963

______________________________________________________________________________

Items

Para pedir todos los items
    items/get

Para pedir un item en especifico
    items/get/:id -> items/get/1

Para crear un nuevo item
    items/post
    Cuerpo del JSON:
        {
            "id": 1,
            "name": "Modryn's Claws",
            "type": "Sword and Dagger",
            "mode": "Attack",
            "characterId": 741852963
        }

Para modificar un item en especifico
    items/put/:id -> items/put/1
    Cuerpo del JSON:
        {
            "id": 1,
            "name": "Brackensong Blades",
            "type": "Sword and Dagger",
            "mode": "Attack",
            "characterId": 741852963
        }

Para eliminar un item en especifico
    items/delete/:id -> items/delete/1