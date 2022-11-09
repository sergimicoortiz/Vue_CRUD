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
        },//INITIALIZE_TABLE

        [Constant.DELETE_TABLE]: async (store, payload) => {
            try {
                await TablesService.DeleteTables(payload.id);
                store.commit(Constant.DELETE_TABLE, { id: payload.id });
            } catch (error) {
                console.error(error);
            }
        },//action delete
        [Constant.ADD_TABLE]: async (store, payload) => {
            try {
                const res = await TablesService.CreateTables(payload.tablesitem);
                store.commit(Constant.ADD_TABLE, res.data.data);
            } catch (error) {
                console.error(error);
            }
        },//action create

        [Constant.UPDATE_TABLE]: async (store, payload) => {
            try {
                const res = await TablesService.UpdateTables(payload.tablesitem.id, payload.tablesitem);
                store.commit(Constant.UPDATE_TABLE, res.data.data);
            } catch (error) {
                console.error(error);
            }
        },//action update
    },
    mutations: {
        [Constant.INITIALIZE_TABLE]: (state, payload) => {
            if (payload) {
                state.tablesList = payload;
            }
        },//initialize mutation
        [Constant.DELETE_TABLE]: (state, payload) => {
            state.tablesList = state.tablesList.filter(item => item.id !== payload.id);
        },//delete mutation
        [Constant.ADD_TABLE]: (state, payload) => {
            state.tablesList.push(payload);
        },//delete mutation
        [Constant.UPDATE_TABLE]: (state, payload) => {
            console.log(payload);
        },//delete update
    },
    getters: {
        getTables(state) {
            return state.tablesList;
        },//all tables
    },
}