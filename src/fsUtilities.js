

const {readJSON,writeJson} = require("fs-extra")
const {join} = require ("path")
const filePath = join(__dirname,"./services/books/books.json") // dirname it's currently directory this case is (fsUtilities).

const readDB = async (filePath) =>{
 try{
     const fileJson = await readJSON(filePath)
     return fileJson
 }catch(error){
     throw new Error(error)
 }


}
const writeDB = async (filePath,fileContent) =>{
    try{
        const fileJson = await writeJson(filePath,fileContent)
        return fileJson
    }catch(error){
        throw new Error(error)
    }
   
   
   }
   module.exports={
       getBooks:async()=>readDB(filePath),
       writeBooks : async()=> writeDB(filePath,fileContent)
   }