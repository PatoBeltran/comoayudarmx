import { ModalType, ModalState, ActionType, Action } from '../types';

export function modals(state: ModalState = { type: ModalType.NotSpecified, showing: false }, action: Action) {
    switch (action.type) {
        case ActionType.SHOW_ABOUT_MODAL:
            return {
                type: ModalType.About,
                showing: true
            }
        case ActionType.HIDE_ABOUT_MODAL:
            return {
                type: ModalType.About,
                showing: false
            }
        case ActionType.SHOW_HOWTO_MODAL:
            return {
                type: ModalType.HowTo,
                showing: true
            }
        case ActionType.HIDE_HOWTO_MODAL:
            return {
                type: ModalType.HowTo,
                showing: false
            }
        default:
            return state;
    }
}