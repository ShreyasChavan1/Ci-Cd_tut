const Redis = require('ioredis')

const redisclient = new Redis({
    host: process.env.HOST,
    port: process.env.PORT
})

async function checkredis(){
    
    try{
        await redisclient.set("user","works")
        const value = await redisclient.get("user");
        console.log(value)
    }catch{
        console.error("something went wrong here")
    }finally{
        await redisclient.disconnect()
    }
}

checkredis()