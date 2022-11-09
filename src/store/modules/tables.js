import TablesService from "../../services/TablesService";
import Constant from "../../Constant";

export const tables = {
    namespaced: true,
    state: {},
    actions: {
        [Constant.INITIALIZE_TABLE]: async (store) => {
            try {
                const res = await TablesService.GetTables();
                store.commit(Constant.INITIALIZE_TABLE, res.data.data);
            } catch (error) {
                console.error(error);
            }
        }//INITIALIZE_TABLE
    },
    mutations: {
        [Constant.INITIALIZE_TABLE]: (state, payload) => {
            state.tablesList = payload;
        }
    },
    getters: {
        getTables(state) {
            return state.tablesList;
        },
    },
}