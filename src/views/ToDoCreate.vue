<template>
    <div class="container">
        <div class="row">
        </div>
        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label htmlFor="name">Name :</label>
                    <input type="text" class="form-control" v-model="state.todoitemlocal.name" />
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-primary m-1" @click="addTodo">Add</button>
                    <button type="button" class="btn btn-primary m-1" @click="cancel">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Constant from '../Constant';
import { reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

export default {
    setup() {
        const store = useStore();
        const router = useRouter();

        const state = reactive({
            todoitemlocal: { name: "" }
        });

        const addTodo = () => {
            if (state.todoitemlocal.name.trim().length >= 2) {
                store.dispatch(`tables/${Constant.ADD_TABLE}`, { tablesitem: state.todoitemlocal })
                router.push({ name: "todolist" });
            } else {
                alert('Error regex');
            }
        }
        const cancel = () => {
            router.push({ name: "todolist" });
        }
        return { state, addTodo, cancel }
    }
}
</script>