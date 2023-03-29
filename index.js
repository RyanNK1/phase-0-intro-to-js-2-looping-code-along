// Code your solutions in this file
const spy = ['Guadalupe','Ollie', 'Aki'];
function  writeCards(spy){
    const surprise = []
    for(let i=0; i < spy.length ;  i++){
        surprise.push (`Thank you, ${spy[i]}, for the wonderful surprise gift!`)
        console.log( surprise);
    }
    return surprise;
}
function countDown(){
    for (let j = 10; j>=0; j--){
        console.log(j)
    }
}
