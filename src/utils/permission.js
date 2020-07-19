import router from '@/router'
import store from '@/store'
import {
    Message
} from 'element-ui'
import {
    getToken
} from '@/utils/auth' // get token from cookie

router.beforeEach(async (to, from, next) => {
    const haveToken = getToken()
    const whiteList = ['/login']
    if (haveToken) {
        if (to.path === '/login') {
            next({
                path: '/'
            })
        } else {
            const haveUserInfo = store.getters.name
            if (haveUserInfo) {
                next()
            } else {
                try {
                    await store.dispatch('getInfo')
                    next()
                } catch (error) {
                    await store.dispatch('resetToken')
                    Message.error(error || 'Has Error')
                    next(`/login`)
                }
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
        }

    }


})