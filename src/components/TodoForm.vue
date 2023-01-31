<script setup>
    import {ref} from 'vue'
    import {useTodo} from '../stores/todo'
    const store = useTodo()
    const task=ref("")
    function addNewTask(){
        if(task.value.trim().length === 0){
            return
        }
        store.addTodo(task.value.trim())
        task.value=""
    }
</script>

<template>
    <form @submit.prevent="addNewTask()">
        <input type="text" v-model="task">
        <button>Add</button>
    </form>
</template>