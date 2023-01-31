import {ref,computed} from 'vue'
import {defineStore} from 'pinia'

export const useTodo = defineStore("todo",()=>{
    const todoList =ref([
    ])
    const id = ref(0)
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
    return{todoList,addTodo,toogleTodo}
})