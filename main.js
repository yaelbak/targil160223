//* מערך עם 5 שמות תלמידים והדפסת קונסול 

var names = ["אברהם","יצחק","יעקב","משה","אהרון"]

console.log(names)

//* לוח הכפל

for(let i = 1 ; i <= 10 ; i++){
    var line = ""
    for(let j = 1 ; j<=10 ; j++){
        var product = i*j
        if(product == 50 || product == 100 || product == 72){
            line+=  "*"+(product)+"*".toString().padEnd(4," ") 
        }else
        {
            line += (product).toString().padEnd(6," ")
        }
    }
    console.log(line)
}

//*תרגיל 3

var answer = prompt('Please type a number')
console.log(answer)


//* תרגיל 4
var answer = prompt('Enter STOP to break the loop\n')
 while(answer!="STOP"){
     var answer = prompt('Enter STOP to break the loop \n')
 }
console.log("Out of the loop")


//*תרגיל 5
// ask for a number
// convert string to number
// check if after conversion we received a valid number
// repeat if not valid

var number = NaN
while(isNaN(number)){
    number = prompt("Enter a number\n")
}
var arr = []
if(number < 0){
    for(let i = 0 ; i <= -1*(number) ; i++){
        arr.push(i*-1)
    }
}
else{
        for(let i = 0 ; i <= number ; i++){
        arr.push(i)
    }
}

var arr = []
var increment = number > 0 ? 1 : -1
for(let i = 0 ; i != number ;i+=increment){
    arr.push(i)
}
arr.push(Number(number))
console.log(arr)

//*תרגיל 6

var currentName = prompt("Enter a name\n")
var found = false;
for(let i=0 ; i<names.length ; i++){
    if(currentName === names[i]){
        console.log("found")
        found = true;
    }
}
if(found == false){
    console.log("not found")
}

//* תרגיל 7
var height = 5
var width = 5


// for(const a of names){
//     console.log(a)
// }

for(let i = 1; i<=height;i++){
    var line =""
    for(let j=1 ; j<=width ; j++){
        line+="*"
    }
    console.log(line)
}

//* תרגיל 8

height = prompt("Enter height\n")
width = prompt("Enter width\n")

for(let i = 1; i<=height;i++){
    var line =""
    for(let j=1 ; j<=width ; j++){
        line+="*"
    }
    console.log(line)
}


//* תרגיל 9

var height = 7
for(let i =1; i <= height ;i++){
    var nextAst=""
    if(i < (height/2)+1){
        nextAst = "*".repeat(i)
    }
    else{
        nextAst = "*".repeat(height-i+1)
    }
    console.log(nextAst)
}