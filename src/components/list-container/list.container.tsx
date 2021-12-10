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

type ListProps = {
  list:IMember[]
}

function ListContainer({list}:ListProps) : React.ReactElement {

  console.log("RERERERERENDER!!!!")
  console.log(list)
  return (
    <>
      <Grid container className={ListContainerStyles} >
        {list.map(m=><ListItem key={m.id} {...m}/>)} {/*no warning?*/}
      </Grid>
    </>
  );
}

export default ListContainer;