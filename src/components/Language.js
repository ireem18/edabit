import React from 'react';
import styled from 'styled-components';
import { Grid, Button,Segment } from 'semantic-ui-react';
import './App.css';

const Container = styled.div`
  display:flex;
  height:50px;
  width:800px;
  margin-left:300px;
  margin-top:20px;
 
`;
const Container1 = styled.div`
  display:flex;
  height:50px;
  width:800px;
  margin-left:300px;
  margin-top:6px;
  border-radius:none;
 
`;

const Language = () => (
  <>
    <Grid reversed='mobile' style={{ marginTop:'140px',height: '140px', backgroundColor: '#00ad45',}}>
      <Container>
            <Button inverted color='white' style={{ marginLeft:'50px',marginRight:'8px',height: '40px', width: '160px' }}>C# </Button>
        <Button inverted color='white' style={{ height: '40px', marginRight: '8px', width: '160px' }}>C++</Button>
            <Button inverted color='white' style={{ height: '40px', marginRight:'8px', width: '160px' }}>Java</Button>
        <Button inverted color='white' style={{ height: '40px', marginRight: '8px', width: '160px' }}>JavaScript</Button>
      </Container>
      <Container1 style={{ marginBottom:'30px' }} >
        <Button inverted color='white' style={{ marginLeft: '50px', marginRight: '8px', height: '40px', width: '160px' }}>PHP</Button>
        <Button inverted color='white' style={{ height: '40px', marginRight:'8px', width: '160px' }}>Pyhton</Button>
        <Button inverted color='white' style={{ height: '40px', marginRight:'8px', width: '160px' }}>Ruby</Button>
        <Button inverted color='white' style={{ height: '40px', marginRight: '8px', width: '160px' }}>Swift</Button>
      </Container1>
    </Grid>
  </>
);

export default Language;