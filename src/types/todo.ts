export enum todoState {
    active = 'active',
    completed = 'completed'
}

export type tabState = 'all-todos' | 'active-todos' | 'completed-todos'

export interface todo {
    id: number
    task: string,
    state: todoState
}