import React from 'react';
import styled from 'styled-components';
import { Grid, Button, Icon, Input} from 'semantic-ui-react';
import './App.css';

const Container2 = styled.div`
  display:flex;
  height:300px;
  width:800px;
  margin-left:300px;
  margin-top:20px;

`;

const Header2 = () =>(
<>
    <Grid reversed='mobile' style={{ height: '300px', backgroundColor: '#00ad45' }}>
      <Container2>
        <Grid stackable columns={2}>
          <Grid.Column className="textContainer">
             <div className="Learn-to-code-with-interactive">Learn to code with </div>
            <div className="Learn-to-code-with-interactive"style={{marginTop:'18px'}}>interactive challenges</div>
            <div className="Secondparagraph">It's the fastest,easiest,most addictive way to learn</div>
            <div className="Buttons">
            <Button inverted className="Watch-demo" color='white' style={{ height: '30px', width: '150px' }}>Watch Demo</Button>
            <Button inverted className="Explore-Ch" style={{ height: '30px', width: '170px' }}>Explore Challenges</Button>
            </div>
          </Grid.Column>
          <Grid.Column className="SocialContainer">
            <Button className="facebook" color='blue' style={{ height: '30px', width: '165px' }}>Sign in with Face</Button>
            <Button className="goggle" color='red' style={{ height: '30px', width: '170px' }}>Sign in with Goggle</Button>
            <Input className="username"iconPosition='left' placeholder='Pick a username'>
              <Icon name='user' />
              <input />
            </Input>
            <Input className="email" iconPosition='left' placeholder='Your email address'>
              <Icon name='at' />
              <input />
            </Input>
            <Input className="password" type="password"iconPosition='left' placeholder='Create a password'>
              <Icon name='lock' />
              <input />
            </Input>
            <Button className="goggle" color='green' style={{ height: '30px', width: '360px',marginTop:'5px' }}>Create My Free Account</Button>
          </Grid.Column>
        </Grid>
        </Container2>
    </Grid>

</>
);

export default Header2;