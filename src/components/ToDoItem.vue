<template>
    <li>
        <ul>
            <li>Id: {{ todoitem.id }}</li>
            <li>Todo: {{ todoitem.todo }}</li>
            <li>Desc: {{ todoitem.desc }}</li>
            <li>Done: {{ todoitem.done }}</li>

            <li>
                <button @click.stop="toggleDone(todoitem.id)">DONE</button>
                <button @click.stop="deleteTodo(todoitem.id)">DELETE</button>
                <button @click.stop="editTodo(todoitem.id)">EDIT</button>
            </li>
        </ul>
    </li>
    <br>
</template>

<script>
import Constant from '../Constant';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

export default {
    props: {
        todoitem: Object,
    },
    setup(props) {
        const store = useStore();
        const router = useRouter();

        const toggleDone = (id) => {
            store.dispatch(Constant.TOGGLE_DONE, { id });
        }
        const deleteTodo = (id) => {
            store.dispatch(Constant.DELETE_TODO, { id });
        }
        const editTodo = (id) => {
            store.dispatch(Constant.INITIALIZE_TODOITEM, { todoitem: { ...props.todoitem } });
            router.push({ name: 'updateTodo', params: { id } })
        }

        return { toggleDone, deleteTodo, editTodo }
    }
}
</script>