import React from 'react';
import styled from 'styled-components';
import { Grid,Icon,List } from 'semantic-ui-react';
import './App.css';

const Container = styled.div`
  display:flex;
  height:30px;
  width:800px;
  margin-left:300px;
  margin-top:10px;

`;

const footer = () => (
  <>
   
    <Grid reversed='mobile' style={{ height: '40px'}}>
      <Container>
        <span>2019 edabit</span>
      
      </Container> 
    </Grid>

    
  </>
);

export default footer;