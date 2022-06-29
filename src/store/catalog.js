import axios from 'axios'
export default {
    actions: {
        async fetchPhones(result) {
            const res = await axios.get(`http://localhost:3001/catalog`);
            const newPhones = res.data;
            result.commit('updatePhones', newPhones);
        }
    },
    mutations: {
        updatePhones(state, newPhones) {
            state.phones = newPhones
        }
    },
    state: {
        phones: []
    },
    getters: {
        allPhones(state) {
            return state.phones
        }
    },
}