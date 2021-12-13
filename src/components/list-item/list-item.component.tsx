import { css } from '@emotion/css';
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import IMember from '../../models/member';
import { getIntervalInDaysMinutesHoursJSON} from '../../utils/dateInterval';
import { NameStyles, ClockStyles, ClockDescriptionStyles, StatusMessageStyles, SetPriority, ClockDigitsStyles, ClockDigitsDiv } from './list-tem.styles';


function ListItem(m:IMember) : React.ReactElement {

    const [dateInterval, setDateInterval] = useState(getIntervalInDaysMinutesHoursJSON(m.startingDay))

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDateInterval(getIntervalInDaysMinutesHoursJSON(m.startingDay))
        }, 1000);
        return () => clearInterval(intervalId);
    }, [m.startingDay]);

    return (
        <div className={ClockDigitsDiv}>
            <Grid item xs={6} md={6} columnSpacing={{ xs: 5, sm: 2, md: 5 }} className={ClockDigitsStyles}>
                <div className={ClockStyles}>
                    <Grid container spacing={1} justifyContent={'space-around'}>
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
            <Grid item xs={6} md={8} className={css`height: 100%; overflow: auto; display: inline-block;`} >
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