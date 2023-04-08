//callba jo ha argument passed karta ha dosra function ka parameter ma like hr and director

function hr(hr){
    console.log('hr')
    setTimeout(()=>{
        hr()
    },2000)
}
function dir(){
    console.log('dir')
    
}
hr(dir)

function sum(a,b){
    return a+b
}
function calc(fs,a,b){
    return fs();

}
console.log(calc(sum,4,5))
//assyncronniya and syncroniaya
console.log('hh')
setTimeout(()=>{
    console.log('aaa')


},5000)
console.log('cc')

//nodejs work
//call stack and the go api and event loop
//api do programing ka bech ma jo interfface hota ha wohi api hoti 
