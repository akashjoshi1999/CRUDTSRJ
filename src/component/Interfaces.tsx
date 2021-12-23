export interface TTask {
    task: string,
    day: number,
    id: number
}

export interface Tinput {
    task: string,
    day: number,
}

export interface inputState {
    name: string,
    value: number | string
}

export interface actionType {
    type: string,
    payload: string | number
}

export interface initialState {
    // task: string[] | number[]
    task: {
        task: string,
        day: number,
        id: number
    }[]
}