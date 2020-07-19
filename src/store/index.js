import {
    login,
    getInfo
} from '@/api/user'
import Vue from 'vue'
import Vuex from 'vuex'
import {
    setToken,
    removeToken,
    getToken
} from "@/utils/auth";

import {
    resetRouter
} from "@/router";

Vue.use(Vuex)

const getDefaultState = () => {
    return {
        token: getToken(),
        name: '',
        avatar: ''
    }
}
const state = getDefaultState()

const mutations = {
    RESET_STATE: (state) => {
        Object.assign(state, getDefaultState())
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    }
}
const actions = {
    login({
        commit
    }, userInfo) {
        return new Promise((resolve, reject) => {
            login(userInfo).then(res => {
                commit('SET_TOKEN', res.token)
                setToken(res.token)
                resolve()
            }).catch(error => {
                console.log(error)
                reject(error)
            })
        })
    },
    getInfo({
        commit
    }) {
        return new Promise((resolve, reject) => {
            getInfo(state.token).then(res => {
                commit('SET_NAME', res.userName)
                commit('SET_AVATAR', res.userAvatar)
                resolve()
            }).catch(error => {
                console.log(error)
                reject(error)
            })
        })
    },
    resetToken({
        commit
    }) {
        return new Promise(resolve => {
            removeToken()
            commit('RESET_STATE')
            resolve()
        })
    },
    loginOut({
        commit
    }) {
        removeToken()
        commit('RESET_STATE')
        resetRouter()
    }


}
const getters = {
    avatar: state => state.avatar,
    name: state => state.name
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store