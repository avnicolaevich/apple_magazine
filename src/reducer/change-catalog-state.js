export const changeCatalogState = (state, action) => {

    if(state === undefined) {
        return {
            data: {},
            loading: false,
            min: 0,
            max: 0
        }
    }

     switch (action.type) {
         case "CHANGE_CATALOG_LIST":
             const { id, data } = action.payload;
             return {
                 ...state.catalog,
                 data: {
                     ...state.catalog.data,
                     [id]: data
                 }
             };
         case "CHANGE_LOADING":
             return {
                 ...state.catalog,
                 loading: action.payload
             };
         default:
             return state.catalog
     }
};