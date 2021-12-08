export const getIntervalInYearsMothsDaysJSON = (start:Date) =>{
    const datesInterval = new Date((new Date()).getTime() - start.getTime())
    // console.log({years,months,days,hours,mintes});

    
// To calculate the time difference of two dates
    // var Difference_In_Time = (new Date()).getTime() - start.getTime();
  
    // To calculate the no. of days between two dates
    // var Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
    // var Difference_In_Hours = Math.ceil(Difference_In_Time / (1000 * 3600));
    // var Difference_In_Minutes = Math.ceil(Difference_In_Time / (1000 * 60));
    // var Difference_In_Seconds = Math.ceil(Difference_In_Time / (1000 ));
    // console.log( `${Difference_In_Time} ${Difference_In_Days} ${Difference_In_Hours} ${Difference_In_Minutes} ${Difference_In_Seconds}`);
    // console.log( `${Difference_In_Time} ${Difference_In_Days} ${Difference_In_Hours%24} ${Difference_In_Minutes%60} ${Difference_In_Seconds%60}`);

    // console.log(datesInterval);
    // datesInterval.setMinutes(datesInterval.getMinutes()+366*60*24); //????
    // console.log(datesInterval);
    // console.log(new Date());
    // console.log(start);
    return getYearsMothsDaysFromIntervalJSON(datesInterval);
}

export const getYearsMothsDaysFromIntervalJSON = (datesInterval:Date) =>{
    const years = format(datesInterval.getUTCFullYear() - 1970);//not 1970
    const months = format(datesInterval.getUTCMonth());
    // const months = format(datesInterval.getUTC());
    const days = format(datesInterval.getUTCDay());
    const hours = format(datesInterval.getUTCHours());
    const mintes = format(datesInterval.getUTCMinutes());
    const x = format((datesInterval.getUTCMilliseconds()));
    console.log(x);

    return {years,months,days,hours,mintes}
}


export const getIntervalInDaysMinutesHoursJSON = (start:Date) => {

    let differenceInTime = (new Date()).getTime() - start.getTime();
    var differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    var differenceInHours = Math.ceil(differenceInTime / (1000 * 3600));
    var differenceInMinutes = Math.ceil(differenceInTime / (1000 * 60));
    var differenceInSeconds = Math.ceil(differenceInTime / (1000 ));

    return {
        days: format(differenceInDays),
        hours:format(differenceInHours%24),
        minutes:format(differenceInMinutes%60),
        seconds:format(differenceInSeconds%60),
    }
}


const format = (n:number) => n<10?`0${n}`:n.toString();