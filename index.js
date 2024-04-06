const express = require ('express')
const port = 3500
const app = express()

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/hello/username', (req, res) => {
    //console.log(req.params)
    console.log(typeof req.params.username)
    res.send(`Hello ${req.params.username.toUpperCase()}`)
})

app.get('/add/:x/:y', (req, res)=>{
    const {x, y} = req.params
    res.send(`Result: ${parseInt(x) + parseInt(y)}`)
})

app.get('/users/:username/photo', (req, res)=>{
    if(req.params.username.toUpperCase() === "JORGE"){
        return res.sendFile('./arquitectura.png',{
            root: __dirname
        })
    }
    res.send('El usuario no tiene acceso....!!!')
})

app.get('/name/:name/age/:age', (req, res) => {
    res.send(`El usuario ${req.params.name} tiene ${req.params.age} años..!!!`)
})

app.post('/user', (req, res)=> {
    console.log(req.body)
    res.send('Nuevo usuario creado')
})

app.get('/',(req,res)=>{
    res.send('Hola Mundo')
})

app.get('/mylife', (req,res)=>{
    res.sendFile('./img/imagen01.jpeg',{
        root: __dirname
    })
})

app.get('user', (req, res) => {
    res.json({
        nombres: "Ricardo",
        apellidos: "Coello Palomino",
        edad: 40,
        points: [1,2,3],
        adress:{
            ciudad: "Lima - Perú",
            distrito: "Ate - Vitarte",
            calle: "Av. Andrés Avelino Cáceres"
        }
    })
})

app.get('/isAlive', (req, res) =>{
    res.sendStatus(204)
})


app.put('/products',(req,res)=>{
    res.send('Actualizando productos')
})

app.delete('/products',(req,res)=>{
    res.send('Eliminar productos')
})

app.patch('/products',(req,res)=>{
    res.send('Actualizando una parte del producto')
})

app.listen(port)
console.log('Server on port ${port}')