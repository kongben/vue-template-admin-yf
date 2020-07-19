import {
    login
} from '@/api/user'
import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

const state = {
    token: ''
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    }
}
const actions = {
    login({
        commit
    }, userInfo) {
        return new Promise((resolve, reject) => {
            login(userInfo).then(res => {
                commit('SET_TOKEN', res.token)
                Cookies.set('token', res.token)
                resolve()
            }).catch(error => {
                console.log(error)
                reject(error)
            })
        })
    }

}


const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store