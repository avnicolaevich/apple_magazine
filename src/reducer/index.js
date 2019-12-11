import { changeCatalogState } from "./change-catalog-state";
import { createCurrentDevice } from "./create-current-device";
import { changeModals } from "./change-modals";
import { updateUser } from "./update-user";
import { getBestSales } from "./get-best-sales";

const reducer = (state, action) => {
    return {
        user: updateUser(state, action),
        catalog: changeCatalogState(state, action),
        currentDevice: createCurrentDevice(state, action),
        modals: changeModals(state, action),
        bestSales: getBestSales(state, action),
    }
};

export default reducer;