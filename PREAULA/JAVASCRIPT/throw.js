x = false;
try{
    if(x){
        throw new Error("isso é evitável")
    }
    throw new Error("isso é inevitável")
   
}catch(e){
    console.log(e)
}finally{
    console.log(x)
}

