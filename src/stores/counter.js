import {ref,computed} from 'vue'
import {defineStore} from 'pinia'

export const useCounter = defineStore("counter",()=>{
    const count = ref(0)
    const name = ref('Angel')

    const doubleCount=computed(()=>count.value*2)

    const nameUppercase= computed(()=>name.value.toUpperCase())

    function increment(){
        count.value++
    }

    function reverseName(){
        const reverse = name.value.split('').reverse().join('')
        name.value = reverse
    }

    return{count,name,increment,reverseName,doubleCount,nameUppercase}
})
// export const useCounter = defineStore("counter",{
//     //state
//     state:()=>({
//         count:0,
//         name:"Ángel"
//     }),
//     //getters
//     getters:{
//         doubleCount:(state)=>{
//             return state.count*2
//         },
//         nameUppercase:(state)=>{
//             return state.name.toUpperCase();
//         }
//     },
//     //actions
//     actions:{
//         increment(){
//             this.count++
//         },
//         reverseName(){
//             const reverse = this.name.split('').reverse().join('')
//             this.name = reverse
//         }
//     }
// })