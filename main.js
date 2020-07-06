//const capitalizeSentences = function(array){
//let newSentences=[]
//for(let i=0;i <array.length;i++)
 //let sentences =array[i]
 //for(let ii=0; ii<sentences.length;ii++)

 //if( sentences[ii])
  //return newSentences
//}

const isValidPassword= function(str){
  let space= ' '
if(str.includes(space) || str.length  < 12){

  return false} 

  else return true 


}

const makeHalfSquares = function(array){
let result= []

for(let i=0;i <array.length;i++){

  result.push (Math.pow(array[i],2) / 2)
}
return result 
}

const countAs = function(array){

 let count = 0

  for(let i=0;i < array.length;i++){
 if(array[i]>=90){

  count ++
 }
  }
return count

}

const deleteMiddleLetters = function (str){
let newString=''
  if(str.length % 2){}


  else{}

  return newString
}

const lastIndexOfSpace= function(str){
let space = ''
 
  if(space.includes(str) === false){
return -1


  }
  else if(space.includes(str)){

  }
}

const hyphenateName=function(str){
let result=''


return result 
}
if (typeof capitalizeSentences === 'undefined') {
  capitalizeSentences = undefined;
} 

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof makeHalfSquares === 'undefined') {
  makeHalfSquares = undefined;
}

if (typeof countAs === 'undefined') {
  countAs = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof lastIndexOfSpace === 'undefined') {
  lastIndexOfSpace = undefined;
}

if (typeof hyphenateName === 'undefined') {
  hyphenateName = undefined;
}


module.exports = {
  capitalizeSentences,
  isValidPassword,
  makeHalfSquares,
  countAs,
  deleteMiddleLetters,
  lastIndexOfSpace,
  hyphenateName,
}
