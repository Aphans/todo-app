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
    <form @submit.prevent="addNewTask()" class="flex mb-3">
        <input type="text" v-model="task" class="rounded-lg w-full h-10 px-3 text-base border border-primary focus:border-secondary focus:border-2 focus:outline-none mr-2" placeholder="name task">
        <button class="bg-secondary rounded-lg text-white px-4 py2">Add</button>
    </form>
</template>