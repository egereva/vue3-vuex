import { createStore, createLogger } from 'vuex'
import counterModule from '@/store/modules/counter'
import mutations from '@/store/mutations'
import actions from '@/store/actions'

export default createStore({
    plugins: [createLogger()],
    modules: {
        count: counterModule // для namespaced
    },
    state() {
        return {
            appTitle: 'Vuex Working!'
        }
    },
    mutations: mutations,
    actions: actions,
    getters: {
        uppercaseTitle(state) {
            return state.appTitle.toUpperCase()
        }
    }
})
