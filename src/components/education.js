import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

const Education = ({ startYear, endYear, schoolName, schoolDescription }) => {
  return (
    <Grid>
      <Cell style={{ fontSize: "bold" }} col={4}>
        <p>{startYear} - {endYear}</p>
      </Cell>
      <Cell col={8}>
        <h4 style={{ marginTop: '0px' }}>{schoolName}</h4>
        <p>{schoolDescription}</p>
      </Cell>
    </Grid>
  )
}



export default Education;
