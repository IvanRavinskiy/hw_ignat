import {UserType} from "../HW8";

type SortActionType = {
    type: 'sort',
    payload: string
}

type CheckActionType = {
    type: 'check',
    payload: number
}

type ActionType = SortActionType | CheckActionType

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            let copyState = [...state]
            copyState.sort((a, b) => {
                if (action.payload === 'up') {
                    if (a.name < b.name) return -1
                } else if (action.payload === 'down') {
                    if (a.name > b.name) return -1
                }
                return 0
            })
            return copyState
        }
        case 'check': {
            // need to fix
            // let copyState = state
            // copyState = copyState.filter(s => s.age > action.payload)
            // return copyState
            return state.filter(s => s.age > action.payload)

        }
        default:
            return state
    }
}