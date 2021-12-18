const app =require("./src/app")

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})



//sudo kill -9 $(lsof -t -i:7595) 
//comando que salva as portas kkkk