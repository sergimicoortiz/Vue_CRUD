<template>
    <li>
        <ul>
            <li>Id: {{ tablesitem.id }}</li>
            <li>Todo: {{ tablesitem.name }}</li>

            <li>
                <button @click.stop="deleteTodo(tablesitem.id)">DELETE</button>
                <button @click.stop="editTodo(tablesitem.id)">EDIT</button>
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
        tablesitem: Object,
    },
    setup(props) {
        const store = useStore();
        const router = useRouter();
        const deleteTodo = (id) => {
            store.dispatch(Constant.DELETE_TODO, { id });
        }

        const editTodo = (id) => {
            router.push({ name: 'todoUpdate', params: { id } })
        }

        return { deleteTodo, editTodo }
    }
}
</script>