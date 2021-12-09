import React, { createRef, useEffect, useRef, useState } from 'react';
import { Grid, MenuItem, Select } from '@mui/material';
import ListItem from "../list-item/list-item.component"
import { ListContainerStyles } from './list.container.styles';
import useFetchData from '../../hooks/use-fetch-data';
import { URL } from '../../utils/url';
import getIMembersFromResponse from '../../utils/process-response';
import { SortingContainer, SortingDescription, SortingEnum } from '../../utils/sorting-enum';
import { css } from '@emotion/css';
import IMember from '../../models/member';


function ListContainer() : React.ReactElement {

  // const mem = new Member("Krzysztof","Waiting");
  // let mem: IMember = {
  //   name:"Krzysztof",
  //   status:"Waiting",
  //   startingDay: (new Date(2021,11,6)),
  //   priority: 1,
  // }

  const [sortingStyle, setSortingStyle] = useState(SortingEnum.NewestAdded); 
  
  const sortRef = useRef<SortingContainer>(); 

  
  let result:IMember[];

  useEffect(()=>{
    if(sortRef.current===undefined)
      sortRef.current = new SortingContainer();
  
  },[])

  useEffect(()=>{
    console.log(sortingStyle);
    console.log(sortRef.current!.dictionary.get(sortingStyle)?.action);
    console.log(result);
    result?.sort(sortRef.current!.dictionary.get(sortingStyle)?.action)
    console.log(result);
  },[sortingStyle])

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
  
  result = getIMembersFromResponse(data!);
  
  const handleChange = (event:any) :void => {
    setSortingStyle(event.target.value);
  };

  return (
    <>
      <div className={css``}>
        <Select labelId="label" id="select" value={sortingStyle} className={css`background-color:white; display:flex`} onChange={handleChange}>
          {/* {sortRef.current?.dictionary.forEach((v,k)=>(
            <MenuItem value={k}>{v.description}</MenuItem>
          ))} //check values method */} 
          <MenuItem value={SortingEnum.NewestAdded}>{sortRef.current?.dictionary.get(SortingEnum.NewestAdded)?.description} </MenuItem>
          <MenuItem value={SortingEnum.ByName}>by Name</MenuItem>
          <MenuItem value={SortingEnum.ByPriority}>by Priority</MenuItem>
        </Select>
      </div>
      <Grid container className={ListContainerStyles} >
        {result.map(m=><ListItem {...m}/>)} {/*no warning?*/}
      </Grid>
    </>
  );
}

export default ListContainer;