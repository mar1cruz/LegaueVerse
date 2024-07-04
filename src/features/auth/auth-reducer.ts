

const initialState = {
    isLoggedIn: false
}

type initType = typeof initialState

type ActionType = LoginActionType | LogoutActionType

export const authReducer = (state: initType = initialState, action: ActionType): initType => {
    switch (action.type) {
        case "API/LOGIN": {
            return {...state, isLoggedIn: true}
        }
        case "API/LOGOUT": {
            return {...state, isLoggedIn: false}
        }
        default:
            return state;
    }
}

type LoginActionType = ReturnType<typeof LoginAC>
export const LoginAC = () => {
    return {type: 'API/LOGIN'} as const;
}

type LogoutActionType = ReturnType<typeof LogoutAC>
export const LogoutAC = () => {
    return {type: 'API/LOGOUT'} as const;
}