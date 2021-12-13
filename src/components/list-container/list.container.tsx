import React from 'react';
import { Grid } from '@mui/material';
import ListItem from "../list-item/list-item.component"
import { ListContainerStyles } from './list.container.styles';
import IMember from '../../models/member';

type ListProps = {
  list:IMember[]
}

function ListContainer({list}:ListProps) : React.ReactElement {

  return (
    <>
      <Grid container className={ListContainerStyles} >
        {list.map(m=><ListItem key={m.id} {...m}/>)}
      </Grid>
    </>
  );
}

export default ListContainer;