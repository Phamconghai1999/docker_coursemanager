export const authReducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'SAVEAUTH': return {
            ...state
        }
    }
}