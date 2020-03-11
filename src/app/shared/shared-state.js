const initialState = {
    snackbar: {
        color: '',
        message: ''
    }
}
export const actionTypes = {
    setSnackbarSuccess: '[SNACKBAR] SET SNACKBAR SUCCESS',
    setSnackbarError: '[SNACKBAR] SET SNACKBAR ERROR',
    resetSnackbar: '[SNACKBAR] RESET SNACKBAR'
}
const mutations = {
    [actionTypes.setSnackbarSuccess](state, payload) {
        Object.assign(state.snackbar, { color: 'success', ...payload })
    },
    [actionTypes.setSnackbarError](state, payload) {
        Object.assign(state.snackbar, { color: 'error', ...payload })
    },
    [actionTypes.resetSnackbar](state, payload) {
        Object.assign(state.snackbar, { ...payload })
    }
}

const actions = {
    [actionTypes.setSnackbarSuccess]({ commit }, payload) {
        commit(actionTypes.setSnackbarSuccess, payload)
    },
    [actionTypes.setSnackbarError]({ commit }, payload) {
        commit(actionTypes.setSnackbarError, payload)
    },
    [actionTypes.resetSnackbar]({ commit }, payload) {
        commit(actionTypes.resetSnackbar, payload)
    }
}

export default {
    mutations,
    actions,
    state: initialState
};