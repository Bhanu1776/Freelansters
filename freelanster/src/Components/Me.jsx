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
// import TextField from '@mui/material/TextField';
// import { typography } from '@mui/system';
import { teal } from '@mui/material/colors';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const Me = () => {

    const [loading, setLoading] = useState(true);
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.display = 'none';
            setLoading(false);
        }, 0);
    }

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(teal['A400']),
        backgroundColor: teal['A200'],
        '&:hover': {
            backgroundColor: teal['A400'],
        },
    }));
    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // }));

    const styling = {
        container: {
            padding: 3,
            marginTop: 14,
            // flexGrow: 2,
            width: "60%",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 10px 25px",
            // bgcolor: 'background.paper',
            // borderColor: 'text.primary',
            // border: 1,
            borderRadius: "16px",

        },
        typography: {
            marginTop: 3,
        },
        LinearProgress: {
            color: '#00c8aa',
        }
    }

    return (
        !loading && (

            <>
                <CssBaseline />
                {/* <Card sx={styling.container} fixed> */}
                <Container sx={styling.container} fixed >

                    <Box sx={{ flexGrow: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4} >
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
                                        <Typography variant="body2" sx={{ mb: 1 }}>
                                            Osama Shaikh
                                        </Typography>
                                        <Typography sx={{ fontSize: 14, mb: -1 }} color="text.secondary" gutterBottom>
                                            Full Stack Developer
                                        </Typography>

                                    </CardContent>
                                    <CardActions>
                                        <ColorButton size="small" variant='contained'>Follow</ColorButton>
                                    </CardActions>
                                </Card>
                                {/* </Item> */}
                            </Grid>
                            <Grid item xs={8}>
                                <Card sx={{ minWidth: 280 }}>
                                    {/* <Stack direction="row" spacing={2}> */}
                                    <CardContent>

                                        <Box sx={{
                                            display: 'grid',
                                            gap: 1,
                                            gridTemplateColumns: 'repeat(2, 1fr)',
                                        }}>
                                            <Typography variant="body2">
                                                Name:
                                            </Typography>

                                            <Typography variant="body2">
                                                Osama Shaikh
                                            </Typography>
                                        </Box>
                                        <hr></hr>
                                        <Box sx={{
                                            display: 'grid',
                                            gap: 1,
                                            gridTemplateColumns: 'repeat(2, 1fr)',
                                        }}>
                                            <Typography variant="body2">
                                                Email:
                                            </Typography>

                                            <Typography variant="body2" >
                                                Shaikhosama499@gmail.com
                                            </Typography>
                                        </Box>
                                        <hr></hr>
                                        <Box sx={{
                                            display: 'grid',
                                            gap: 1,
                                            gridTemplateColumns: 'repeat(2, 1fr)',
                                        }}>
                                            <Typography variant="body2">
                                                Number:
                                            </Typography>

                                            <Typography variant="body2" >
                                                9136281166
                                            </Typography>
                                        </Box>



                                    </CardContent>

                                    {/* </Stack> */}
                                    {/* <CardActions>
                                        <Button size="small" variant='contained' sx={{ mr: -2 }}>Edit Profile</Button>
                                    </CardActions> */}
                                </Card>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="body3">
                                            Interest and Skills
                                        </Typography>
                                        <Typography variant="body2" mt={1} mb={2}>
                                            Web Design:
                                            <LinearProgress variant="determinate" value={85} sx={styling.LinearProgress} />
                                        </Typography>
                                        <Typography variant="body2" mt={0} mb={2}>
                                            Video-Editing:
                                            <LinearProgress variant="determinate" value={55} sx={styling.LinearProgress} />
                                        </Typography>
                                        <Typography variant="body2" mt={0} mb={2} >
                                            Android Development:
                                            <LinearProgress variant="determinate" value={70} sx={styling.LinearProgress} />
                                        </Typography>
                                        <Typography variant="body2" mt={0} >
                                            Accountancy:
                                            <LinearProgress variant="determinate" value={60} sx={styling.LinearProgress} />
                                        </Typography>

                                    </CardContent>

                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                {/* </Card> */}

            </>
        )
    );
}

export default Me





    // < Grid item xs = { 8} sm = { 6} >
    //     <Card sx={{ minWidth: 280 }}>
    //         <Stack direction="row" spacing={2}>
    //             <CardContent>
    // < Typography variant = "body3" sx = { styling.typography } > Name:</ >
    //                                             <TextField type="text" id="standard-basic" variant="standard" required sx={{ ml: 2, border: 0, width: 300 }} />
    //                                             <br></br><br />
    //                                             <Typography variant="body3" sx={styling.typography}>Email:</Typography>
    //                                             <TextField type="email" id="standard-basic" variant="standard" required sx={{ ml: 2, border: 0, width: 300 }} />
    //                                             <br></br><br />
    //                                             <Typography variant="body3" sx={styling.typography}>Number:</Typography>
    //                                             <TextField type="number" id="standard-basic" variant="standard" required sx={{ ml: 2, border: 0, width: 300 }} />
    //                                             <br></br>
    //             </CardContent>
    //         </Stack>
    //         <CardActions>
    //             <Button size="small" variant='contained'>Follow</Button>
    //         </CardActions>
    //     </Card>
    //                         </Grid >

    // < div className="container" >
    //     <div className="row py-3 mt-4">
    //         <div className="col-8 mx-auto">
    //             <div className="progress mb-3">
    //                 <div className="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
    //             </div>
    //         </div>
    //     </div>
    //                                     </ >