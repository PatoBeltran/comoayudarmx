import { Action, ActionType } from '../../types';

export function cards(state: any[] = [], action: Action) {
    switch (action.type) {
        case ActionType.ADD_CARD:
            return [
                ...state,
                action.card
            ];
        case ActionType.LOAD_CARDS:
            return action.cards;
        default:
            return state;
    }
}