const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require('cors');
app.use(cors())

const { validateUser } = require('./schemas/user')
const { validateCharacter } = require('./schemas/character')
const { validateItem } = require('./schemas/item')
const { object } = require('zod')

let users = []
let characters = []
let items = []

users.push({
    id: 123456789,
    name: "Jhon",
    last: "Doe",
    email: "johnDoe@mail.com"
})

users.push({
    id: 987654321,
    name: "Jane",
    last: "Doe",
    email: "janeDoe@mail.com"
})
/////////////////////////////////////////////////////
characters.push({
    id: 741852963,
    name: "Kerillian",
    level: 30,
    class: "Ranger: Swiftbow",
    userId: 123456789
})

characters.push({
    id: 963852741,
    name: "Bardin Gorekson",
    level: 18,
    class: "Melee: Warhammer",
    userId: 123456789
})

characters.push({
    id: 784951623,
    name: "Victor Saltzpyre",
    level: 14,
    class: "Melee: Rapier",
    userId: 123456789
})

characters.push({
    id: 963852741,
    name: "Sienna Fuegonasus",
    level: 24,
    class: "Ranger: Pyromancy",
    userId: 987654321
})

characters.push({
    id: 968573241,
    name: "Markus Kruber",
    level: 21,
    class: "Melee: Broadsword",
    userId: 987654321
})
///////////////////////////////////////////////////////
items.push({
    id: 1,
    name: "Modryn's Claws",
    type: "Sword and Dagger",
    mode: "Attack",
    characterId: 741852963
})

items.push({
    id: 2,
    name: "Severance",
    type: "Greatsword",
    mode: "Attack",
    characterId: 741852963
})

items.push({
    id: 3,
    name: "Edrael's Will",
    type: "Swiftbow",
    mode: "Attack",
    characterId: 741852963
})

items.push({
    id: 4,
    name: "Lohner's Riches",
    type: "Currency",
    mode: "Misc",
    characterId: 741852963
})

////////////////////////////////////////////////
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('API IS RUNNING')
})
////////////////////////////////////////////////
//users//
app.get('/users', (req, res) => {
    res.send({ "users": users })
})

app.get('/users/:id', (req, res) => {
    let index = users.findIndex(user => user.id == req.params.id)
    let user = users[index]
    res.send({ "user": user })
})

app.post('/users', (req, res) => {
    const userValidationResult = validateUser(req.body)
    console.log("result", userValidationResult.error)

    if (userValidationResult.error) {
        return res.status(400).send(
            { message: JSON.parse(userValidationResult.error.message) }
        )
    }

    let newUser = {
        id: userValidationResult.data.id,
        name: userValidationResult.data.name,
        last: userValidationResult.data.last,
        email: userValidationResult.data.email,
    }
    users.push(newUser)
    res.status(201).send({ "message": "New User created", "user": newUser })
})

app.put('/users/:id', (req, res) => {
    let index = users.findIndex(user => user.id == req.params.id)
    let newUser = {
        id: req.body.id,
        name: req.body.name,
        last: req.body.last,
        email: req.body.email,
    }
    users[index] = newUser
    res.send("User Updated " + newUser.name)
})

app.delete('/users/:id', (req, res) => {
    const idToDelete = req.params.id;
    let indexToDelete = users.findIndex(user => user.id == idToDelete)
    let userDeleted = users.splice(indexToDelete, 1)
    res.send("User Deleted: " + userDeleted[0].name)
})

app.get('/users/counter', (req, res) => {
    let userList = []

    for (let i = 0; i < users.length; i++) {
        let characterCounter = 0
        let itemCounter = 0

        for (let e = 0; e < characters.length; e++) {
            if (users[i].id == characters[e].userId) {
                characterCounter = characterCounter + 1;

                for (let o = 0; o < items.length; o++) {
                    if (characters[e].id == items[o].characterId) {
                        itemCounter = itemCounter + 1;
                    }
                }

            }
        }

        let newFullUser = {
            id: users[i].id,
            name: users[i].name,
            last: users[i].last,
            email: users[i].email,
            characterCount: characterCounter,
            itemCount: itemCounter,
        }
        userList.push(newFullUser)
    }
    res.send({ "full users": userList })
})
//////////////////////////////////////////////////////////////////////////////////
//characters//
app.get('/characters', (req, res) => {
    res.send({ "characters": characters })
})

app.get('/characters/:id', (req, res) => {
    let index = characters.findIndex(character => character.id == req.params.id)
    let character = characters[index]
    res.send({ "character": character })
})

app.post('/characters', (req, res) => {
    const characterValidationResult = validateCharacter(req.body)
    console.log("result", characterValidationResult.error)

    if (characterValidationResult.error) {
        return res.status(400).send(
            { message: JSON.parse(characterValidationResult.error.message) }
        )
    }

    let newCharacter = {
        id: characterValidationResult.data.id,
        name: characterValidationResult.data.name,
        level: characterValidationResult.data.level,
        class: characterValidationResult.data.class,
        userId: characterValidationResult.data.userId,
    }
    characters.push(newCharacter)
    res.status(201).send({ "message": "New Character created", "character": newCharacter })
})

app.put('/characters/:id', (req, res) => {
    let index = characters.findIndex(character => character.id == req.params.id)
    let newCharacter = {
        id: req.body.id,
        name: req.body.name,
        level: req.body.level,
        class: req.body.class,
        userId: req.body.userId,
    }
    characters[index] = newCharacter
    res.send("Character Updated " + newCharacter.name)
})

app.delete('/characters/:id', (req, res) => {
    const idToDelete = req.params.id;
    let indexToDelete = characters.findIndex(character => character.id == idToDelete)
    let characterDeleted = characters.splice(indexToDelete, 1)
    res.send("Character Deleted: " + characterDeleted[0].name)
})

//////////////////////////////////////////////////////////////////////////////////
//items//
app.get('/items', (req, res) => {
    res.send({ "characters": items })
})

app.get('/items/:id', (req, res) => {
    let index = items.findIndex(item => item.id == req.params.id)
    let item = items[index]
    res.send({ "item": item })
})

app.post('/items', (req, res) => {
    const itemValidationResult = validateItem(req.body)
    console.log("result", itemValidationResult.error)

    if (itemValidationResult.error) {
        return res.status(400).send(
            { message: JSON.parse(itemValidationResult.error.message) }
        )
    }

    let newItem = {
        id: itemValidationResult.data.id,
        name: itemValidationResult.data.name,
        type: itemValidationResult.data.type,
        mode: itemValidationResult.data.mode,
        characterId: itemValidationResult.data.characterId,
    }
    items.push(newItem)
    res.status(201).send({ "message": "New Item created", "item": newItem })
})

app.put('/items/:id', (req, res) => {
    let index = items.findIndex(item => item.id == req.params.id)
    let newItem = {
        id: req.body.id,
        name: req.body.name,
        type: req.body.type,
        mode: req.body.mode,
        characterId: req.body.characterId,
    }
    items[index] = newItem
    res.send("Item Updated " + newItem.name)
})

app.delete('/characters/:id', (req, res) => {
    const idToDelete = req.params.id;
    let indexToDelete = characters.findIndex(character => character.id == idToDelete)
    let characterDeleted = characters.splice(indexToDelete, 1)
    res.send("Character Deleted: " + characterDeleted[0].name)
})