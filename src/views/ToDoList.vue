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
import { createToaster } from "@meforma/vue-toaster";
export default {
    components: { ToDoItem },
    setup() {
        const toaster = createToaster({ "position": "top-right", "duration": 1500 });
        const store = useStore();
        const router = useRouter();
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