export default {
    namespaced: true,
    state() {
        return {
            counter: 1
        }
    },
    // мутации полностью синхронные
    mutations: {
        increment(state) {
            state.counter ++
        },
        add(state, payload) {
            state.counter += payload.value
        }
    },
    actions: {
        incrementAsync(context, payload) {
            console.log(context)
            setTimeout(() => {
                context.commit('add', payload)
            }, payload.delay)
        }
    },
    getters: {
        counter(state) {
            if(state.counter > 30) {
                return 0
            }
            return state.counter
        },
        doubleCounter(_, getters, rootState, rootGetters) {
            console.log(rootState) // глобальный стейт
            console.log(rootGetters) // глобальный геттер
            return getters.counter * 2
        }
    }
}
