import {createStore} from 'vuex'

const store = createStore({
    state:{
        appName:"Virtualio"
    },
    mutations:{

    },
    actions:{

    },
    modules:{

    },
    getters:{
        appName (state){
            return state.appName
        }
    }
})

export default store