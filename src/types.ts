export enum CardType {
    Monetary,
    Food,
    Volunteer,
    Medical,
    Blood,
    Housing,
    Assestment
}

export enum ModalType {
    NotSpecified,
    About,
    HowTo
}

export interface ModalState {
    type: ModalType,
    showing: boolean
}

export enum ActionType {
    LOAD_CARDS = 'LOAD_CARDS',    
    ADD_CARD = 'ADD_CARD',
    SHOW_ABOUT_MODAL = 'SHOW_ABOUT_MODAL',
    HIDE_ABOUT_MODAL = 'HIDE_ABOUT_MODAL',
    SHOW_HOWTO_MODAL = 'SHOW_HOWTO_MODAL',
    HIDE_HOWTO_MODAL = 'HIDE_HOWTO_MODAL',
    LOAD_CONTACTS = 'LOAD_CONTACTS',
};

export type Action = {
    type: ActionType.ADD_CARD,
    card: any
} | {
    type: ActionType.LOAD_CARDS,
    cards: any[]
} | {
    type: ActionType.SHOW_ABOUT_MODAL,
    modal: ModalState
} | {
    type: ActionType.HIDE_ABOUT_MODAL,
    modal: ModalState
} | {
    type: ActionType.SHOW_HOWTO_MODAL,
    modal: ModalState
} | {
    type: ActionType.HIDE_HOWTO_MODAL,
    modal: ModalState
} | {
    type: ActionType.LOAD_CONTACTS,
    contacts: any[]
}
