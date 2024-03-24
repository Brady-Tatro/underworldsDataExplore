import createDataContext from "./createDataContext";

const gameReducer = (state, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export const { Context, Provider } = createDataContext(
    gameReducer,
    {},
    []
)