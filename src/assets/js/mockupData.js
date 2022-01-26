const data = require("./data.json")
export const invokeData = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(data)
    },1500)
})