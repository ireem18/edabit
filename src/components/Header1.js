import React from 'react';
import styled from 'styled-components';
import { Grid,Button } from 'semantic-ui-react';
import './App.css';

const Container = styled.div`
  display:flex;
  height:40px;
  width:800px;
  margin-left:300px;
  margin-top:20px;
`;

const Header1 = () => (
<>

    <Grid reversed='mobile'style={{ height: '40px', backgroundColor:'#00ad45',borderColor:'grey'}}>
      <Container>
        <span className='edabit'>edabit</span>
        <Button inverted className="sign-in"color='white'  style={{height:'30px',width:'100px'}}>Sign In</Button>
        <Button inverted className="Register"style={{ height: '30px', width: '100px' }}>Register</Button>
      </Container>
      <hr style={{backgroundColor:'grey'}}/>
      
    </Grid>

</>
);

export default Header1;