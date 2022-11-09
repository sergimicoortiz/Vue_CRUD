import Vuex from "vuex";

import { tables } from './modules/tables.js';

export default Vuex.createStore({

    modules: {
        tables: tables
    }
});