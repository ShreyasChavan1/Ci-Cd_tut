const Redis = require('ioredis')

const redisclient = new Redis({
    host: process.env.host,
    port: process.env.port
})

async function checkredis(){
    try{
        await redisclient.set("user","works")
        const value = await redisclient.get("user");
    
        console.log(value)
    }catch{
        console.error("something went wrong here")
    }
}
checkredis()