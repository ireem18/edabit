import React from 'react';
import styled from 'styled-components';
import { Grid, Icon, Image } from 'semantic-ui-react';
import image1 from './../issue/3.PNG';

const Container2 = styled.div`
  display:flex;
  height:200px;
  width:800px;
  margin-left:300px;
  margin-top:20px;
 

`;

const Middle3 = () => (
  <>
    <Container2>
      <Grid reversed='mobile' columns={2} padded>
        <Grid.Column>
          <Image src={image1} />
        </Grid.Column>
        <Grid.Column className="ortala" >
          <h5 className="the-fastest-way-to-learn" style={{ marginTop: '70px' }}>The Fastest Way To Learn </h5>
          <p>Everyone knows the fastest way to learn a spoken language is by having conversations with native
             speakers. Likewise, the fastest way to learn to code is by actually coding. Edabit offers an almost
             limitless supply of bite-sized challenges, so you can rapidly advance your abilities.
             It's the absolute fastest way to learn.
          </p>
        </Grid.Column>
      </Grid>
    </Container2>

  </>
);

export default Middle3;