






import * as React from 'react';
import Grid from '@mui/material/Grid';

import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function StackCards({value, colorBack, label, labelColor, fontColor}){






    return(
        <>
        
  
<Container maxWidth="sm" style={{backgroundColor:`${colorBack}`, font:`${fontColor}`}}>
<h4 style={{font:`${labelColor}`}}>
    {`${label} ${value}`}
</h4>
        <Box sx={{ bgcolor: {colorBack}, width:'100%' }} style={{ margin: "20px"}} >
       
       <Grid sx={{ flexGrow: 1 }} container spacing={2}>
         <Grid item xs={12}>
           <Grid container justifyContent="center" spacing={2}>
           
                            <Grid item>
                            <img src={`assets/images/rider.jpg`} alt="school" width="500px" height="300px" style={{}}/>

                            </Grid>

                            <Grid item>
                
                                <Paper style={{margin:"20px"}}
                                sx={{
                                    height: 140,
                                    width: 400,
                                    backgroundColor: (theme) =>
                                    theme.palette.mode === "dark" ? "#1A2027" : "#fff"
                                }}
                                >
                                    <p style={{width:"100%"}}>
                                        My favorite course so far is Business Intelligence in Technology: Data Mining. I now look at the world like a data scientist and make machine learning models in my spare time.
                                    </p>
                                    </Paper>
                             </Grid>
           
           </Grid>
         </Grid>
       </Grid>
               </Box>   </Container>

        </>
    );
}