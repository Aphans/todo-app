<script setup>
import {useCounter} from '../stores/counter'
import {storeToRefs} from 'pinia'
const store = useCounter()
const {name,count,doubleCount,nameUppercase} = storeToRefs(store)

//
const {increment,reverseName} = store
</script>

<template>
    <div>
    <p>Counter : {{ count }}</p>
    <p>Double: {{ doubleCount }}</p>
    <p>Name: {{ name }} - {{ nameUppercase }} </p>
    <hr>
    <button @click="increment">increment</button>
    <button @click="reverseName">reverseName</button>
  </div>
</template>