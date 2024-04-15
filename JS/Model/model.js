const model = {
    app: {
        loggedInUser: null,
        darkMode: false,
        lang: 'no',
        currentPage: 'mainPage',
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
            locationInput: '',
            imageInput: '',
        },
        findingsPage: { 
            locationBar: '',
        },
    },
    data: {
        users: [
            { 
                id: 'Linn',
                email: 'linn@gmail.com',
                password: 'Linn',
                friends: ['Trine', 'Audun S', 'Even'],
                profilePic: '',
            },
            { 
                id: 'Trine',
                email: 'trine@gmail.com',
                password: 'Trine',
                friends: [],
                profilePic: '', 
            },
            { 
                id: 'Audun S', 
                email: 'audunS@gmail.com',
                password: 'Audun S',
                friends: [],
                profilePic: '',
            },
            { 
                id: 'Even', 
                email: 'even@gmail.com',
                password: 'Even',
                friends: [],
                profilePic: '',
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
                foundBy: 'Linn'
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