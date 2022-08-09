const initialState = {
    account: undefined,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ACCOUNT":
            return {...state, account: [action.payload]}
        default:
            return state
    }
}

export default rootReducer