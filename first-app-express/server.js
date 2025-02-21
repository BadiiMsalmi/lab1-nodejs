const express = require('express')
const app = express()

let todos = [
    {id:1,title:"film 1"},
    {id:2,title:"film 2"}
]

app.get('/file',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})


app.get('/user/:id',(req,res)=>{
    res.send('user id is '+req.params.id)
})

app.post('/api/todos/create',(req,res)=>{
    todos.push(req.body)
    res.send(todos)
})

app.put('/api/todos/update/:id',(req,res)=>{
    const id = Number(qs.params.id)
    todos = todos.map(todo=>{
        return todo.id === id ? [...todo,...req.body] : todo
    })
    res.send(todos)
})

app.delete('/api/todos/delete/:id',(req,res)=>{
    const id = Number(qs.params.id)
    todos = todos.filter(todo=>todo.id !== id)
    res.send(todos)
})

app.get('/api/todos/:id',(req,res)=>{
    const id = Number(qs.params.id)
    let checkTodo = todos.find(todo=>todo.id === id)
    if(!checkTodo){
        res.status(404).send('todo not found')
    }
    res.send(checkTodo)
})

app.get('/api/todo/:id',(req,res)=>{
    res.send('todo id is '+req.params.id)
})

app.get('/',(req,res)=>{
    res.send('welcome to my server')
    res.json({message:'welcome to my server'})
    res.end('welcome to my server')
})


app.listen(5000,()=>{
    console.log('listening on port',5000)
})