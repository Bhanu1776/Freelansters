import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Images from '../Img/imgindex';
import styles from 'styled-components';
import { teal } from '@material-ui/core/colors';
import SendIcon from '@mui/icons-material/Send';

const SingleJob = () => {

    const [loading, setLoading] = useState(true);
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.display = 'none';
            setLoading(false);
        }, 0);
    }
    const styling = {
        container: {
            padding: 3,
            marginTop: 14,
            // flexGrow: 2,
            width: "100%",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 10px 25px",
            borderRadius: "16px",

        },
        typography: {
            marginTop: 3,
        },


    }

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(teal['A400']),
        backgroundColor: teal['A200'],
        padding: '8 0',
        '&:hover': {
            backgroundColor: teal['A400'],
        },
    }));
    return (
        <>
            <CssBaseline />
            <Container sx={styling.container} fixed >
                <Box sx={{ flexGrow: 2 }}>
                    {/* <Stack direction="row" spacing={2}> */}
                    <Grid container spacing={2}>
                        <Grid item xs={5}>
                            <Image src={Images.bhanu} alt="" />

                            <CardActions>
                                <ColorButton size="medium" variant='contained' sx={{ width: "400px", ml: -1, }} endIcon={<SendIcon />}>Send Proposal</ColorButton>
                            </CardActions>
                        </Grid>
                        <Grid item xs={7}>
                            <Card sx={{ minWidth: 280 }}>
                                <CardContent>
                                    <Box sx={{
                                        display: 'grid',
                                        gap: 1,
                                        gridTemplateColumns: 'repeat(2, 1fr)',

                                    }}>
                                        <Typography variant="body2" sx={{ fontWeight: 900 }} >
                                            Title:
                                        </Typography>

                                        <Typography variant="body2">
                                            Gayming
                                        </Typography>
                                    </Box>
                                    <hr></hr>
                                    <Box sx={{
                                        display: 'grid',
                                        gap: 1,
                                        gridTemplateColumns: 'repeat(2, 1fr)',

                                    }}>
                                        <Typography variant="body2" sx={{ fontWeight: 900 }} >
                                            Date:
                                        </Typography>

                                        <Typography variant="body2">
                                            28/11/2002
                                        </Typography>
                                    </Box>
                                    <hr></hr>
                                    <Box sx={{
                                        display: 'grid',
                                        gap: 1,
                                        gridTemplateColumns: 'repeat(2, 1fr)',

                                    }}>
                                        <Typography variant="body2" sx={{ fontWeight: 900 }} >
                                            Price:
                                        </Typography>

                                        <Typography variant="body2">
                                            20000
                                        </Typography>
                                    </Box>
                                    <hr></hr>
                                    <Box sx={{
                                        display: 'grid',
                                        gap: 1,
                                        gridTemplateColumns: 'repeat(2, 1fr)',

                                    }}>
                                        <Typography variant="body2" sx={{ fontWeight: 900 }} >
                                            Duration:
                                        </Typography>

                                        <Typography variant="body2">
                                            3hr
                                        </Typography>
                                    </Box>
                                    <hr></hr>
                                    <Box sx={{
                                        display: 'grid',
                                        gap: 1,
                                        gridTemplateColumns: 'repeat(2, 1fr)',

                                    }}>
                                        <Typography variant="body2" sx={{ fontWeight: 900 }}>
                                            Description:
                                        </Typography>
                                        <TextareaAutosize
                                            maxRows={8}
                                            aria-label="empty textarea"
                                            // placeholder="Empty"
                                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. loremLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. lorem"
                                            style={{ width: "100%" }}
                                        />

                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    {/* </Stack> */}
                </Box>
            </Container>
        </>
    )
}

const Image = styles.img`
height: 400px;
width: 400px;
borderRadius: "16px",
boxShadow: "rgba(0, 0, 0, 0.35) 0px 10px 25px",
`



export default SingleJob
