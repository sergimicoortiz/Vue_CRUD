<template>
    <ul class="list-group">
        <ToDoItem v-for="todoitem in state.todolist" :key="todoitem.id" :todoitem="todoitem" />
    </ul>
</template>

<script>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import ToDoItem from '../components/ToDoItem.vue';
import Constants from '../Constant.js';
export default {
    components: { ToDoItem },
    setup() {
        const store = useStore();
        const router = useRouter();

        const state = reactive({
            todolist: computed(() => store.state.todolist)
        });
       
        return {state};
    }
}//export
</script>