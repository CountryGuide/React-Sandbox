export const ActionTypes = {
    User: {
        FETCH_USER: 'FETCH_USER'
    },

    Tasks: {
        FETCH_TASKS:  'FETCH_TASKS',
        NEW_TASK:     'NEW_TASK',
        DELETE_TASK:  'DELETE_TASK',
        TASK_PATCHED: 'TASK_PATCHED',
        TASK_CHECKED: 'TASK_CHECKED',
    },

    Purchases: {
        FETCH_PURCHASES:  'FETCH_PURCHASES',
        NEW_PURCHASE:     'NEW_PURCHASE',
        PURCHASE_PATCHED: 'PURCHASE_PATCHED',
        PURCHASE_DELETED: 'PURCHASE_DELETED'
    },

    Global: {
        UPDATE_CURRENCY_RATES: 'UPDATE_CURRENCY_RATES'
    }
};
