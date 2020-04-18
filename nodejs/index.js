const express=require('express')
const bodyParser=require('body-parser')
const jsonParser=bodyParser.json()
const urlencodedParser=bodyParser.urlencoded({extended:false})
//const router=requirconste('./router.js')
const app=express()
const port=8888

//app.use(virtual-path,express.static)
app.use(express.static('html'))
//app.use(router)

app.get('/', (req,res)=>(res.sendFile('index.html')))
app.get('/HelloWorld',(req,res)=>(res.send('hello world!')))

app.post('/submit', urlencodedParser, (req,res)=>{
    console.log(req.body)
    res.send({ok:true,msg:'hello '+req.body.name});
})
app.post('/json', urlencodedParser, (req, res)=>{
    console.log(req.body)
    res.json({msg:'hello '+req.body.name})
})

app.listen(port, ()=>(console.log('server runing on port: ${port}')))