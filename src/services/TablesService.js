import Api from "./Api";

export default {

    GetTables() {
        return Api().get('tables');
    }//get all

}//export