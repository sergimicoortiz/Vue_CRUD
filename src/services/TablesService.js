import Api from "./Api";

export default {

    GetTables() {
        return Api().get('tables');
    },//get all

    DeleteTables(id) {
        return Api().delete(`tables/${id}`);
    },//delete

    CreateTables(data) {
        return Api().post('tables', data);
    },//create

    UpdateTables(id, data) {
        return Api().put(`tables/${id}`, { "name": data.name });
    }//update

}//export