// redux methos를 정의하는 파일

export const SET_ACCOUNT = 'SET_ACCOUNT'

export const setAccount = (data) => ({
    type: "SET_ACCOUNT",
    payload: data
})