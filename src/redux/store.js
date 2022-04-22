import { configureStore } from '@reduxjs/toolkit'
import photo1 from '../assets/1.jpg'
import photo2 from '../assets/2.jpg'
import photo3 from '../assets/3.jpg'
import photo4 from '../assets/4.jpg'
import photo5 from '../assets/5.jpg'
import photo6 from '../assets/6.jpg'
import photo7 from '../assets/7.jpg'

const initialState = {
    women: [
        {
            id: 1,
            name: "Apollo Running Short",
            srcImg: photo1,
            price: 50
        },
        {
            id: 2,
            name: "Apollo Running Short",
            srcImg: photo2,
            price: 50
        },
        {
            id: 3,
            name: "Apollo Running Short",
            srcImg: photo3,
            price: 50
        },
        {
            id: 4,
            name: "Apollo Running Short",
            srcImg: photo4,
            price: 50
        },
        {
            id: 5,
            name: "Apollo Running Short",
            srcImg: photo5,
            price: 50
        },
        {
            id: 6,
            name: "Apollo Running Short",
            srcImg: photo6,
            price: 50
        }
        
    ],
    men: [
        {
            id: 1,
            name: "Apollo Running Short",
            srcImg: photo1,
            price: 50
        },
        {
            id: 2,
            name: "Apollo Running Short",
            srcImg: photo2,
            price: 50
        },
        {
            id: 3,
            name: "Apollo Running Short",
            srcImg: photo3,
            price: 50
        },
        {
            id: 4,
            name: "Apollo Running Short",
            srcImg: photo4,
            price: 50
        },
        {
            id: 5,
            name: "Apollo Running Short",
            srcImg: photo5,
            price: 50
        },
        {
            id: 6,
            name: "Apollo Running Short",
            srcImg: photo6,
            price: 50
        }
        
    ],
    kids: [
        {
            id: 1,
            name: "Apollo Running Short",
            srcImg: photo7,
            price: 50
        },
        {
            id: 2,
            name: "Apollo Running Short",
            srcImg: photo7,
            price: 50
        },
        {
            id: 3,
            name: "Apollo Running Short",
            srcImg: photo7,
            price: 50
        },
        {
            id: 4,
            name: "Apollo Running Short",
            srcImg: photo7,
            price: 50
        },
        {
            id: 5,
            name: "Apollo Running Short",
            srcImg: photo7,
            price: 50
        },
        {
            id: 6,
            name: "Apollo Running Short",
            srcImg: photo7,
            price: 50
        }
        
    ]
}

const rootReducer = (state = initialState, action) => {
    return state;
}

const store = configureStore({
    reducer: rootReducer
})

export default store;

