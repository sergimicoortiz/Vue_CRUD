import Api from "./Api";
import secrets from "../secrets";

export default {

    GetTables() {
        return Api(secrets.URL_LARAVEL).get('tables');
    },//get all

    GetTablesSpring() {
        return Api(secrets.URL_SPRING).get('tables');
    },//get all

    DeleteTables(id) {
        return Api(secrets.URL_LARAVEL).delete(`tables/${id}`);
    },//delete

    CreateTables(data) {
        return Api(secrets.URL_LARAVEL).post('tables', data);
    },//create

    UpdateTables(id, data) {
        return Api(secrets.URL_LARAVEL).put(`tables/${id}`, { "name": data.name });
    }//update

}//export