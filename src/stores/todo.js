import {ref,computed} from 'vue'
import {defineStore} from 'pinia'
import { isModelListener } from '@vue/shared'

export const useTodo = defineStore("todo",()=>{
    const todoList =ref([
    ])
    const id = ref(0)
    const totalTodo=computed(()=>{
        return todoList.value.length})
    const totalCompleted=computed(()=>{
        const total = todoList.value.filter((item)=>item.completed)
        return total.length
    })
    function addTodo(task){
        console.log(task)
        const date = new Date()
        const newTask = {id:id.value++,task,completed:false,date}
        todoList.value.push(newTask)
    }
    function toogleTodo(id){
        const task = todoList.value.find(item=>item.id === id)
        if(task){
            task.completed = !task.completed
        }
    }
    function deleteTodo(id){
        todoList.value = todoList.value.filter((item)=>item.id !== id)
    }
    return{todoList,addTodo,toogleTodo,deleteTodo,totalTodo,totalCompleted}
})