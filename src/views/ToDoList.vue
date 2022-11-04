<template>
    <ul class="list-group">
        <ToDoItem v-for="todoitem in state.todolist" :key="todoitem.id" :todoitem="todoitem" />
    </ul>
    <button @click="test()">TEST</button>
</template>

<script>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import ToDoItem from '../components/ToDoItem.vue';
export default {
    components: { ToDoItem },
    setup() {
        const store = useStore();
        const router = useRouter();
        const toaster = store.state.toaster;

        const state = reactive({
            todolist: computed(() => store.state.todolist)
        });

        const test = () => {
            toaster.show(`show`);
        }

        return { state, test };
    }
}//export
</script>