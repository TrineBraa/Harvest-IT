const model = {
    app: {
        loggedInUser: '',
        darkMode: false,
        lang: 'no',
        page: [
            'loginPage',
            'mainPage',
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
        },
        startPage: {
            searchBar: 'Kantarell i Larvik',
        },
        registerUser: {
            userInputName: '',
            userInputAddress: '',
            userInputPassword: '',
            userInputEmail: '',
        },
        registerSighting: {
            nameInput: 'blåbær',
            lastHarvestInput: '2024-10-22',
            locationInput: 'blåbærskogen i Tønsberg',
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
                Password: 'Linn',
                friends: ['Trine', 'Audun S', 'Even'],
                profilePic: '',
            },
            { 
                id: 'Trine',
                Password: 'Trine',
                friends: [],
                profilePic: '', 
            },
            { 
                id: 'Audun S', 
                Password: 'Audun S',
                friends: [],
                profilePic: '',
            },
            { 
                id: 'Even', 
                Password: 'Even',
                friends: [],
                profilePic: '',
            }, 
        ],
        sightings: [
            { 
                id: 1,
                name: 'blåbær',
                Category: model.data.categories[0],
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