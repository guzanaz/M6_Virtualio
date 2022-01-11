import {createStore} from 'vuex'

const store = createStore({
    state:{
        appName:"Virtualio"
    },

    getters:{
        appName (state){
            return state.appName
        }
    }
})

export default store