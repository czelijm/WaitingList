export const getIntervalInYearsMothsDaysJSON = (start:Date) =>{
    const datesInterval = new Date((new Date()).getTime() - start.getTime())
    return getYearsMothsDaysFromIntervalJSON(datesInterval);
}

export const getYearsMothsDaysFromIntervalJSON = (datesInterval:Date) =>{
    const years = format(datesInterval.getUTCFullYear() - 1970);
    const months = format(datesInterval.getUTCMonth());
    const days = format(datesInterval.getUTCDay());
    const hours = format(datesInterval.getUTCHours());
    const mintes = format(datesInterval.getUTCMinutes());

    return {years,months,days,hours,mintes}
}


export const getIntervalInDaysMinutesHoursJSON = (start:Date) => {

    let differenceInTime = (new Date()).getTime() - start.getTime();
    var differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    var differenceInHours = Math.ceil(differenceInTime / (1000 * 3600))-1;
    var differenceInMinutes = Math.ceil(differenceInTime / (1000 * 60))-1;
    var differenceInSeconds = Math.ceil(differenceInTime / (1000 ))-1;

    return {
        days: format(differenceInDays),
        hours:format(differenceInHours%24),
        minutes:format(differenceInMinutes%60),
        seconds:format(differenceInSeconds%60),
    }
}


const format = (n:number) => n<10?`0${n}`:n.toString();