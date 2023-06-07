import * as React from 'react';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Footer from './Footer';
import StackCards from './StackCards.js/StackCards';

const arr=[{value:"1", colorBack:"#f0b67f", label:"Education", fontColor:"#2f2f2f", labelColor:"green"}, 
{value:"2", colorBack:"red", label:"Competitions", fontColor: "black", labelColor:"black"},
{key:"3", colorBack:"red", label:"Experience", fontColor: "black", labelColor:"black"},
{key:"4", colorBack:"red", label:"Designs",fontColor: "black",  labelColor:"black"},
]

export default function MainContentTrial(){


    return(
        <div>
            
            <Container maxWidth="sm">
            <h1 style={{padding:"10px"}}>
            Welcome! I'm Sunny!
        </h1>
       

<StackCards value="1" colorBack="#f0b67f" label="Education" fontColor="#2f2f2f" labelColor="green"/>
<StackCards value="2" colorBack="red" label="Competitions" fontColor="#2f2f2f" labelColor="blue"/>
<StackCards value="3" colorBack="orange" label="Designs" fontColor="#2f2f2f" labelColor="red"/>
<StackCards value="4" colorBack="yellow" label="Interests" fontColor="#2f2f2f" labelColor="green"/>



<Footer style={{position: "absolute"}}/>
      </Container>
      </div>
    

    );
}