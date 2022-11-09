<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label htmlFor="todo">Name :</label>
                    <input type="text" class="form-control" v-model="state.todoitemlocal.name" />
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-primary m-1" @click="updateTodo()">Update</button>
                    <button type="button" class="btn btn-primary m-1" @click="cancel()">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Constant from '../Constant';
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router';

export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const currentRoute = useRoute();

        const todoitem = store.getters["tables/getTables"].find((item) => item.id === currentRoute.params.id);

        const state = reactive({
            todoitemlocal: { ...todoitem }
        });
        console.log(state);

        const updateTodo = () => {
            store.dispatch(`tables/${Constant.UPDATE_TABLE}`, { tablesitem: state.todoitemlocal });
            router.push({ name: "todolist" });
        }

        const cancel = () => {
            router.push({ name: "todolist" });
        }

        return { state, updateTodo, cancel };
    }
}
</script>