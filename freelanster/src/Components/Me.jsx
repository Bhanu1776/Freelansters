import React from 'react';
import Images from './Img/imgindex.js'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



const Me = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Item>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Stack direction="row" spacing={2}>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src="/static/images/avatar/1.jpg"
                                            sx={{ width: 56, height: 56 }}
                                        />
                                    </Stack>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="body2">
                                        Osama Shaikh
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Item>xs=4</Item>
                    </Grid>
                </Grid>
            </Box>

        </>
    );
}

export default Me





