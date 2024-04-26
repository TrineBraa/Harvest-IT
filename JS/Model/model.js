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
                profilePic: 'https://cdn.discordapp.com/attachments/1224687340065390634/1227905664626720790/image.png?ex=662a1b43&is=6617a643&hm=7a414d53f53b6feb5297cfe48264da70cc5b72101cff736efdfdb881bb648f3a&',
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
                profilePic: 'https://cdn.discordapp.com/attachments/1224687340065390634/1230063579357773824/IMG_0226.JPG?ex=6631f4fa&is=661f7ffa&hm=09a69f04284a789e840d11ba3b78be7f719b82406d0a5bc0376e354c7694ae64&',
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