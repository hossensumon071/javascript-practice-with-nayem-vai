var date = new Date();

// 0 - sunday, 1 - monday, 2 - tuesday

var today = date.getDay()


switch (today){
    case 0:
        console.log('Today is sunday')
        break
    case 1:
        console.log('Today is monday')
        break
    case 2: 
        console.log('Today is tuesday')
        break
    case 3: 
        console.log('Today is wednesday')
        break
}