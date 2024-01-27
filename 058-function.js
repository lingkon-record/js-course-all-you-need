// new chapter : function
// input output proccessing
// where i use , UseCase

function getCurrentDateTime() {
    const now = new Date()
    const months = now.getMonth() + 1
    const year = now.getFullYear()
    const date = now.getDate()
    const day = now.toLocaleDateString('en-US')
    const time = now.toLocaleTimeString('en-US')
    const week = Math.ceil(date / 7)


    return {
        now,
        months,
        year,
        date,
        day,
        time,
        week
    }
}

// const currentDateTimeInfo = getCurrentDateTime()
// console.log(currentDateTimeInfo);
console.log(getCurrentDateTime());

