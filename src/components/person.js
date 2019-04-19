import React from 'react';
import styled from 'styled-components';
import { Grid,Image} from 'semantic-ui-react';
import './App.css';
import image1 from './../issue/images.jpg';
import image2 from './../issue/i.png';
import image3 from './../issue/4.png';

const Container = styled.div`
  display:flex;
  height:220px;
  width:800px;
  margin-left:300px;
  margin-top:20px;
`;

const person = () => (
  <>
    <Grid reversed='mobile' style={{height: '250px'}}>
      <Container>
        <Grid columns={3}>
          <Grid.Column>
            <Image src={image1} size='tiny' circular style={{marginTop:'10px',marginLeft:'55px' }} />
            <h4 style={{ marginTop:"3px",marginLeft: '77px'}}>Alex</h4>
            <p style={{ marginTop: "-3px", marginLeft: '10px' }}> "Extremely well done and an excellent example of learning by doing. Perfect execution."</p>
          </Grid.Column>
          <Grid.Column>
            <Image src={image2} size='tiny' circular style={{ marginTop: '10px', marginLeft: '55px' }} />
            <h4 style={{ marginTop: "3px", marginLeft: '77px' }}>Robin</h4>
            <p style={{ marginTop: "-3px", marginLeft: '10px' }}> "I swear, Edabit has been more useful than the last coding bootcamp I attended. Well done sir."</p>
          </Grid.Column>
          <Grid.Column>
            <Image src={image3} size='tiny' circular style={{ marginTop: '10px', marginLeft: '55px' }} />
            <h4 style={{ marginTop: "3px", marginLeft: '77px' }}>Marvin</h4>
            <p style={{ marginTop: "-3px", marginLeft: '10px' }}> "I just spent the past five hours on Edabit and I don't even feel bad about it. This is addictive stuff!"</p>
          </Grid.Column>
        </Grid>
      </Container>
      <hr style={{ width: '800px',marginLeft:'280px', backgroundColor: 'grey' }} />
    </Grid>
  </>
);

export default person;