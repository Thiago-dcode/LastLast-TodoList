

export const GetDate = (input) => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() +1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()

    
    const fullDate = `${date.toDateString()} ${hour}:${minute <10 ? '0' + minute:minute}`
    const minDate = `${year}-${month<10? '0'+month:month}-${day}`
    switch(input){
        case 'todo':
            return fullDate
        case 'min':
            return minDate
        default:
            
            return new Date(input).toDateString()

    }

    // const difference = new Date(input).getTime() - date.getTime() 

    

    

}

