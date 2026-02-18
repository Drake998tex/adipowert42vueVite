const mutations = {

    SAMPLE_MUTATION(state, cars) {
        state.cars = cars
    },

    zmiana(state, it,) {
        if (it.damaged == true) {
            it.damaged = false
        } else {
            it.damaged = true
        }
    },
    zmiana1(state, NewCar) {
        state.cars.push(NewCar)
        console.log(state.cars)
    }

}

export default mutations