<template>
    <ul class="list-group">
        <ToDoItem v-for="tablesitem in state.tablesList" :key="tablesitem.id" :tablesitem="tablesitem" />
    </ul>
    <button @click="test()">TEST</button>
</template>

<script>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Constant from "../Constant";
import ToDoItem from '../components/ToDoItem.vue';
export default {
    components: { ToDoItem },
    setup() {
        const store = useStore();
        const router = useRouter();
        const toaster = store.state.toaster;

        store.dispatch(`tables/${Constant.INITIALIZE_TABLE}`);
        const state = reactive({
            tablesList: computed(() => store.getters["tables/getTables"])
        });

        const test = () => {
            toaster.show(`show`);
        }

        return { state, test };
    }
}//export
</script>