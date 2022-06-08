function receivesAFunction (callback){
    callback ();
}
function returnsANamedFunction(){
    const returnsANamedFunction =()=>("named")
    return returnsANamedFunction;
}
function returnsAnAnonymousFunction(){
    return ()=> console.log("anonymous");
}