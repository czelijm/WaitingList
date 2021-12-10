import React, { createRef, useEffect, useRef, useState } from 'react';
import { Grid, MenuItem, Select } from '@mui/material';
import ListItem from "../list-item/list-item.component"
import useFetchData from '../../hooks/use-fetch-data';
import { URL } from '../../utils/url';
import getIMembersFromResponse from '../../utils/process-response';
import { SortingContainer, SortingDescription, SortingEnum } from '../../utils/sorting-enum';
import { css } from '@emotion/css';
import IMember from '../../models/member';
import ListContainer from '../list-container/list.container';


function RootContainer() : React.ReactElement {

  // const mem = new Member("Krzysztof","Waiting");
  // let mem: IMember = {
  //   name:"Krzysztof",
  //   status:"Waiting",
  //   startingDay: (new Date(2021,11,6)),
  //   priority: 1,
  // }

  const [sortingStyle, setSortingStyle] = useState(SortingEnum.Oldest); 
  
  const sortRef = useRef<SortingContainer>(); 

  const resultRef = useRef<IMember[]>(); 
  
  let result:IMember[];

  useEffect(()=>{
    if(sortRef.current===undefined)
      sortRef.current = new SortingContainer();
  },[])

  //Only for reset reason
  useEffect(()=>{
  },[sortingStyle])

  const {
    data,
    loading,
    error
  } = useFetchData(URL);

  // console.log({
  //   data,
  //   loading,
  //   error
  // });

  console.log('Reff?' + resultRef.current)

  
  if(error || typeof(data)==='string') return <div>Something went wrong</div>

  if(resultRef.current===undefined) {
    if(loading) return <div>Loading...</div>

    result = getIMembersFromResponse(data!); 
    
  } else {
    result = resultRef.current; 
  }
  
  // result = getIMembersFromResponse(data!);
  
  const handleChange = (event:any) :void => {
    setSortingStyle(event.target.value);
    result?.sort(sortRef.current!.dictionary.get(event.target.value)?.action)
    resultRef.current = result;
  };
  
  console.log(
    'download!!!'
  );
console.log(result);

  return (
    <>
      <div className={css``}>
        <Select labelId="label" id="select" value={sortingStyle} className={css`background-color:white; display:flex`} onChange={handleChange}>
          {
          Array.from(sortRef.current?.dictionary!,(i)=>{ console.log("XD" + i); return (
            <MenuItem value={i[0]}>{i[1].description}</MenuItem>
          )})}
        </Select>
      </div>
      <ListContainer list={result}/>
    </>
  );
}

export default RootContainer;