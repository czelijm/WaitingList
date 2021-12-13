import React, { useEffect, useRef, useState } from 'react';
import { MenuItem, Select } from '@mui/material';
import useFetchData from '../../hooks/use-fetch-data';
import { URL } from '../../utils/url';
import getIMembersFromResponse from '../../utils/process-response';
import { SortingContainer,  SortingEnum } from '../../utils/sorting-utils';
import IMember from '../../models/member';
import ListContainer from '../list-container/list.container';
import { SelectContainerStyles, SelectStyles } from './root-container.styles';


function RootContainer() : React.ReactElement {

  const [sortingStyle, setSortingStyle] = useState(SortingEnum.ByPriorityDescending); 
  
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
  
  if(error || typeof(data)==='string') return <div>Something went wrong</div>

  if(resultRef.current===undefined) {
    if(loading) return <div>Loading...</div>

    result = getIMembersFromResponse(data!);
    result.sort(sortRef.current!.dictionary.get(sortingStyle)?.action) 
    
  } else {
    result = resultRef.current; 
  }

  
  const handleChange = (event:any) :void => {
    setSortingStyle(event.target.value);
    result?.sort(sortRef.current!.dictionary.get(event.target.value)?.action)
    resultRef.current = result;
  };
  
  return (
    <>
      <div className={SelectContainerStyles}>
        <Select labelId="label" id="select" value={sortingStyle} className={SelectStyles} onChange={handleChange}>
          {
          Array.from(sortRef.current?.dictionary!,(i)=>{ return (
            <MenuItem value={i[0]}>{i[1].description}</MenuItem>
          )})}
        </Select>
      </div>
      <ListContainer list={result}/>
    </>
  );
}

export default RootContainer;