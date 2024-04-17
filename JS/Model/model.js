const model = {
    app: {
        loggedInUser: 'Linn',
        profileToVisit: 'Linn',
        darkMode: false,
        lang: 'no',
        currentPage: 'profilePage',
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
                tlf: '',
                adress: 'Linn Linnsens gate 1, 1111 Larvik',
                password: 'Linn',
                friends: ['Trine', 'Audun S', 'Even'],
                profilePic: 'https://cdn.discordapp.com/attachments/1224687340065390634/1227905664626720790/image.png?ex=662a1b43&is=6617a643&hm=7a414d53f53b6feb5297cfe48264da70cc5b72101cff736efdfdb881bb648f3a&',
            },
            { 
                id: 'Trine',
                email: 'trine@gmail.com',
                tlf: '',
                adress: '',
                password: 'Trine',
                friends: [],
                profilePic: './Images/Trine.jpg', 
            },
            { 
                id: 'Audun S', 
                email: 'audunS@gmail.com',
                tlf: '',
                adress: '',
                password: 'Audun S',
                friends: [],
                profilePic: 'https://cdn.discordapp.com/attachments/1224687340065390634/1230063579357773824/IMG_0226.JPG?ex=6631f4fa&is=661f7ffa&hm=09a69f04284a789e840d11ba3b78be7f719b82406d0a5bc0376e354c7694ae64&',
            },
            { 
                id: 'Even', 
                email: 'even@gmail.com',
                tlf: '',
                adress: '',
                password: 'Even',
                friends: [],
                profilePic: 'https://cdn.discordapp.com/attachments/1224687340065390634/1227905106540892231/IMG_0025.jpg?ex=662a1abe&is=6617a5be&hm=c2ba864cb2ee1ba1aa30aa7eb8bba044983a14552d4701a51c3b3ab5909c2f8f&',
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