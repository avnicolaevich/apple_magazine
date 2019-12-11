export const getBestSales = (state, action) => {

    if(state === undefined) {
        return {
            data: [],
            loading: false
        }
    }

     switch (action.type) {
         case "CHANGE_BEST_SALES":
             return {
                 ...state.bestSales,
                 data: action.payload
             };
         case "LOADING_BEST_SALES":
             return {
                 ...state.bestSales,
                 loading: action.payload
             };
         default:
             return state.bestSales
     }
};