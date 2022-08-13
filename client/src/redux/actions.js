// redux methos를 정의하는 파일
export const SET_ACCOUNT = 'SET_ACCOUNT'
export const SET_TOKEN_METADATA = 'SET_TOKEN_METADATA'

export const setAccount = (data) => ({
    type: "SET_ACCOUNT",
    payload: data
})

export const setTokenMetadata = (data) => ({
    type: "SET_TOKEN_METADATA",
    payload: data
})