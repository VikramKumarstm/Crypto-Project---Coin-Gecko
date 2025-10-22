import {create} from 'zustand'

const store = create((Set) => ({
    currency: 'usd',
    setCurrency: (newCurrency) => Set( (state) => {
        return {
            ...state,
            currency: newCurrency
        }
    })
}))

export default store;