import axios from 'axios'
export default {
    actions: {
        async addProduct({commit}, id) {
            const res = await axios.get(`http://localhost:3001/catalog`);
            const newProduct = res.data;
            const productID = newProduct[id]
            commit('setState', productID);
            commit('setCounter');
            commit('setSameCounter', productID);
        },
        removeByIndex({commit}, receivedID) {
            commit('remFromCart', receivedID)
        },
        removeAllCart({commit}) {
            commit('clearCart')
        }

    },
    mutations: {
        setState(state, productID) {
            
            state.cart.push(productID); 
                        
            state.price = productID.price + state.price
        },
        setCounter(state) {
            state.counter += 1
        },
        setSameCounter(state, productID) {
            if(productID.id === state.price){
                state.sameCounter += 1 
            } 
            
        },
        remFromCart(state, receivedID) {
            state.price = state.price - state.cart[receivedID].price
            state.cart.splice(receivedID, 1);
            state.counter -= 1;
        },
        clearCart(state) {
            state.cart = [],
            state.counter = 0,
            state.price = 0,
            state.sameCounter = 0
        }
    },
    state: {
        cart: [],
        counter: 0,
        price: 0,
        sameCounter: 0
    },
    getters: {
        addedProducts(state) {
            return state.cart
        },
        showCounter(state) {
            return state.counter
        },
        showSameCounter(state) {
            return state.counter
        },
        sumOfProducts(state) {
            return state.price
        }
    }
}