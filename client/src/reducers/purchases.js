import { ActionTypes } from "../actions/types";


export function purchases(state = { purchases: [] }, action) {
    switch (action.type) {
        case ActionTypes.Purchases.FETCH_PURCHASES:
            return {
                ...state,
                purchases: action.payload.purchases || []
            };
        default:
            return state;
    }
}
