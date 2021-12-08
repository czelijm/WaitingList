import React from 'react';
import { Grid } from '@mui/material';
import ListItem from "../list-item/list-item.component"
import { ListContainerStyles } from './list.container.styles';
import useFetchData from '../../hooks/use-fetch-data';
import { URL } from '../../utils/url';
import getIMembersFromResponse from '../../utils/process-response';


function ListContainer() : React.ReactElement {

  // const mem = new Member("Krzysztof","Waiting");
  // let mem: IMember = {
  //   name:"Krzysztof",
  //   status:"Waiting",
  //   startingDay: (new Date(2021,11,6)),
  //   priority: 1,
  // }

  const {
    data,
    loading,
    error
  } = useFetchData(URL);

  console.log({
    data,
    loading,
    error
  });

  if(loading) return <div>Loading...</div>
  if(error || typeof(data)==='string') return <div>Something went wrong</div>
  
  const result = getIMembersFromResponse(data!);
  

  return (
    <>
    <Grid container className={ListContainerStyles} >
      {result.map(m=><ListItem {...m}/>)}
    </Grid>
    </>
  );
}

export default ListContainer;