var i = 0 

// while(i < 10) {
//     console.log('sumon hossen')
//     i++
// }


var isRunning = true

while (isRunning){
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand == 9){
        console.log('Winner Winner chicken Diner')
        isRunning = false 
    } else {
        console.log('you have got')
    }
}