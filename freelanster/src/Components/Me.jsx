import React, { useState } from 'react';
// import Images from './Img/imgindex.js'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Images from '../Img/imgindex';



const Me = () => {

    const [loading, setLoading] = useState(true);
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.display = 'none';
            setLoading(false);
        }, 0);
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const styling = {
        container: {
            padding: 1,
            marginTop: 14,
            // flexGrow: 2,
            width: "60%",
        }
    }

    return (
        !loading && (

            <>
                <CssBaseline />
                <Container sx={styling.container} fixed >


                    <Box sx={{ flexGrow: 6 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                {/* <Item> */}
                                <Card sx={{ minWidth: 280 }}>
                                    <CardContent>
                                        <Stack direction="row" spacing={2}>
                                            <Avatar
                                                alt="osama"
                                                src={Images.osama}
                                                sx={{ width: 56, height: 56 }}
                                            />
                                        </Stack>
                                        <Typography variant="body2">
                                            Osama Shaikh
                                        </Typography>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Full Stack Developer
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" variant='contained'>Follow</Button>
                                    </CardActions>
                                </Card>
                                {/* </Item> */}
                            </Grid>
                            <Grid item xs={8}>
                                <Card sx={{ minWidth: 280 }}>
                                    <Stack direction="row" spacing={2}>
                                        <CardContent>


                                            <Typography variant="body4">
                                                Osama Shaikh
                                            </Typography>
                                            <br></br>
                                            <Typography variant="body2" color={"#1cd6ce"} mt={2}>
                                                Shaikhosama@gmail.com
                                            </Typography>

                                        </CardContent>
                                    </Stack>
                                    <CardActions>
                                        <Button size="small" variant='contained'>Follow</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Item>xs=4</Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>

            </>
        )
    );
}

export default Me





