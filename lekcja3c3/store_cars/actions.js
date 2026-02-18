import axios from 'axios'

const actions = {
    async SAMPLE_ACTION({ commit }) {
        const response = await axios.get('http://localhost:3000/data')
        console.log("response.data", response.data);
        commit('SAMPLE_MUTATION', response.data)
    },
    // kolejne akcje, jeśli potrzebne
}

export default actions