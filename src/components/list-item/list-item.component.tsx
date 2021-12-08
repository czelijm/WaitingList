import { css } from '@emotion/css';
import { Grid } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Colors } from '../../constants/colors';
import IMember from '../../models/member';
import { getIntervalInDaysMinutesHoursJSON, getIntervalInYearsMothsDaysJSON, getYearsMothsDaysFromIntervalJSON } from '../../utils/dateInterval';
import { NameStyles, ClockStyles, ClockDescriptionStyles, StatusMessageStyles, SetPriority } from './list-tem.styles';


function ListItem(m:IMember) : React.ReactElement {

    // var dateInterval = getIntervalInYearsMothsDaysJSON(m.startingDay);
    // console.log( m.startingDay.toISOString())
    
    var datesInterval = new Date((new Date()).getTime() - m.startingDay.getTime())

    const datesIntervalRef = useRef(datesInterval)

    var intervalId:any;

    const [dateInterval, setDateInterval] = useState(getIntervalInDaysMinutesHoursJSON(m.startingDay))

    useEffect(() => {
        intervalId = setInterval(() => {
            //basedOnintervals
            // datesIntervalRef.current.setMinutes(datesIntervalRef.current.getMinutes()+1);
            // console.log(datesIntervalRef.current);
            // setDateInterval(getYearsMothsDaysFromIntervalJSON(datesIntervalRef.current))
            //dasedOnDates
            //new wai
            setDateInterval(getIntervalInDaysMinutesHoursJSON(m.startingDay))
        }, 1);//1000);
        console.log("rerender useEffect")
        return () => clearInterval(intervalId);
    }, []);

    // console.log("rerender")

    return (
        <div className={css` margin-bottom:20px; display: flex; align-items: flex-start; width:100%`}>
            <Grid item xs={6} md={6} columnSpacing={{ xs: 5, sm: 2, md: 5 }} className={css`background-color:${Colors.DARK_BLUE}; height: 100%; width:auto;`}>
                <div className={ClockStyles}>
                    <Grid container spacing={1} justifyContent={'space-around'} alignItems="stretch">
                        {/* <Grid item xs={2} marginRight={1}>
                            {dateInterval.years}
                            <div className={ClockDescriptionStyles}> years </div>
                        </Grid> */}
                        {/* <Grid item xs={2} marginRight={1}>
                            {dateInterval.months}
                            <div className={ClockDescriptionStyles}> months </div>
                        </Grid> */}
                        <Grid item xs={4} md={1} marginRight={1}>
                            {dateInterval.days}
                            <div className={ClockDescriptionStyles}> days </div>
                        </Grid>
                        <Grid item xs={4} md={1} marginRight={1}>
                            {dateInterval.hours} 
                            <div className={ClockDescriptionStyles}> hours </div>
                        </Grid>
                        <Grid item xs={4} md={1} marginRight={1}>
                            {dateInterval.minutes}
                            <div className={ClockDescriptionStyles}> minutes </div>
                        </Grid>
                        <Grid item xs={4} md={1} marginRight={1}>
                            {dateInterval.seconds}
                            <div className={ClockDescriptionStyles}> seconds </div>
                        </Grid>
                    </Grid>
                </div>    
            </Grid>
            <Grid item xs={6} md={8} alignItems="stretch" >
                <div className={css`${NameStyles} ${SetPriority(m.priority)}`}>
                    {m.name}
                    <div className={StatusMessageStyles}>
                        {m.status}
                    </div> 
                </div>
            </Grid>


        </div>
    )
}

export default ListItem;