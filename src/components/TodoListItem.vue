<script setup>
    import {toRefs} from 'vue'
    import { useTodo } from '../stores/todo';
    const store = useTodo()
    //actions
    const {toogleTodo} = store
    const props = defineProps({
        id:Number,
        task:String,
        completed:Boolean,
        date:String
    })

    const {id,task,completed,date} = toRefs(props)
</script>
<template>
    <li @click="toogleTodo(id)">{{ task }} -- {{ completed }} -- {{ date }}</li>
</template>