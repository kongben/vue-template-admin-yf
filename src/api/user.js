export function login(data) {
    if (Math.random(0, 1) > 0.5) {
        return Promise.resolve({
            roles: ['admin'],
            username: data.username,
            introduction: 'I am a super administrator',
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            name: 'Super Admin',
            token: 'aaa'
        })
    } else {
        return Promise.reject('登录失败再试一次')
    }
}