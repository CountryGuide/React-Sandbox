import { ActionTypes } from "../actions/types";


export function purchases(state = { purchases: [] }, action) {
    switch (action.type) {
        case ActionTypes.Purchases.FETCH_PURCHASES:
        case ActionTypes.Purchases.NEW_PURCHASE:
            return {
                ...state,
                purchases: action.payload.purchases || [],
                purchaseDeleted: false
            };
        case ActionTypes.Purchases.PURCHASE_DELETED:
            return {
                ...state,
                purchaseDeleted: true
            };
        default:
            return state;
    }
}
