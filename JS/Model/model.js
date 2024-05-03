const model = {
    app: {
        loggedInUser: '',
        profileToVisit: '',
        darkMode: false,
        lang: 'no',
        currentPage: 'loginPage',
        page: [
            'loginPage',
            'mainPage',
            'registerUserPage',
            'registerFindingsPage',
            'profilePage',
            'findingsPage', // siden hvor man ser info om bær/sopp/fisk (slide 6)
            'mushroomPage',
            'berryPage',
            'fishPage',
        ]
    },
    inputs: {
        loginInputs: {
            email: '',
            password: '',
            errorMsg: '',
        },
        startPage: {
            searchBar: '',
        },
        registerUser: {
            id: '',
            email: '',
            password: '',
            friends: [],
            profilePic: '',
        },
        registerSighting: {
            nameInput: '',
            lastHarvestInput: '',
            category: '',
            locationInput: '',
            imageInput: '',
            errorMsg: '',
        },
        findingsPage: { 
            locationBar: '',
        },
    },
    data: {
        badges: [
            {name: 'Første soppen', img: './Images/mushroombadge.png'},
            {name: 'Første fisken', img: './Images/fishbadge.png'},
            {name: 'Første bæret', img: './Images/berrybadge.png'},
        ],
        upcomingBadges: [
            {name: '5 Fisk', img: './Images/fivefishbadge.png'},
            {name: '5 sopp', img: './Images/fivemushroombadge.png'},
            {name: '5 bær', img: './Images/fiveberrybadge.png'},
            
        ],
        users: [
            { 
                id: 'Linn',
                email: 'linn@gmail.com',
                tlf: '111 11 111',
                adress: 'Linn Linnsens gate 1, 1111 Larvik',
                password: 'Linn',
                friends: ['Trine', 'Audun S', 'Even'],
                badges: [0,1,2],
                upcomingBadges: [0,1,2],
                profilePic: './Images/Linn.jpg',
            },
            { 
                id: 'Trine',
                email: 'trine@gmail.com',
                tlf: '',
                adress: '',
                password: 'Trine',
                friends: ["Linn", "Audun S"],
                badges: [2],
                upcomingBadges: [2],
                profilePic: './Images/Trine.jpg', 
            },
            { 
                id: 'Audun S', 
                email: 'audunS@gmail.com',
                tlf: '',
                adress: '',
                password: 'Audun S',
                friends: ["Even", "Trine"],
                badges: [0,1,2],
                upcomingBadges: [0,1,2],
                profilePic: './Images/Audun.png',
            },
            { 
                id: 'Even', 
                email: 'even@gmail.com',
                tlf: '',
                adress: '',
                password: 'Even',
                friends: ["Linn", "Audun S"],
                badges: [1],
                upcomingBadges: [1],
                profilePic: './images/Even.jpg',
            }, 
        ],
        sightings: [
            { 
                id: 1,
                name: 'blåbær',
                category: 0,
                lastHarvest: '2024-10-22',
                location: 'blåbærskogen i Tønsberg', 
                image: '', 
                foundBy: 'Linn',
            },
        ],
        categories: [
            {
                name: 'Berry',
                numberOfSightings: '',
                registeredInCategory: [],
            },
            {
                name: 'Mushroom',
                numberOfSightings: '',
                registeredInCategory: [],
            },
            {
                name: 'Fish',
                numberOfSightings: '',
                registeredInCategory: [],
            },
        ]
    },
}