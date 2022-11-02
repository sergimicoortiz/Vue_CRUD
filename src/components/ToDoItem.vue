<template>
    <li>
        <ul>
            <li>Id: {{ todoitem.id }}</li>
            <li>Todo: {{ todoitem.id }}</li>
            <li>Desc: {{ todoitem.id }}</li>
            <li>Done: {{ todoitem.id }}</li>
        </ul>
    </li>
</template>

<script>
import Constant from '../Constant';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';

export default {
    props: {
        todoitem: Object
    },
    setup(props) {
        console.log(props);
        /*  const store = useStore();
         const router = useRouter();
 
         const checked = (done) => {
             return { "list-group-item": true, "list-group-item-success": done };
         }
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
 
         return { toggleDone, deleteTodo, editTodo, checked } */
    }
}
</script>