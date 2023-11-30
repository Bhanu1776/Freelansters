/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { UserContext } from "../Routing";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Images from "../Img/imgindex";
import { teal } from "@mui/material/colors";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const Profile = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);

  const [userData, setUserData] = useState({});
  dispatch({ type: "USER", payload: true });

  const callProfilePage = async () => {
    try {
      const res = await fetch(process.env.BACKEND_URL+"/profile", {
        method: "GET", //! IMP
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      dispatch({ type: "USER", payload: true });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callProfilePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const GetHired = () => {
    navigate(process.env.BACKEND_URL+"/FindFreelancer/GetHired");
  };
  const PostJobs = () => {
    navigate("/FindJobs/PostJobs");
  };

  const [loading, setLoading] = useState(true);
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 0);
  }

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(teal["A400"]),
    backgroundColor: teal["A200"],
    "&:hover": {
      backgroundColor: teal["A400"],
    },
  }));

  const styling = {
    container: {
      padding: 3,
      marginTop: 14,
      width: "60%",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 10px 25px",
      borderRadius: "16px",
    },
    typography: {
      marginTop: 3,
    },
    LinearProgress: {
      color: "#00c8aa",
    },
  };

  return (
    !loading && (
      <>
        {/* //! Use Get Method in form while fetching data  */}
        <form method="GET"></form>

        <CssBaseline />
        <Container sx={styling.container} fixed>
          <Box sx={{ flexGrow: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                {/* <Item> */}
                <Card sx={{ minWidth: 280 }}>
                  <CardContent>
                    <Stack direction="row" spacing={2}>
                      <Avatar
                        alt="osama"
                        src="https://ik.imagekit.io/bhanu1776/Freelansters/osama.jpg?updatedAt=1682608749618"
                        sx={{ width: 56, height: 56 }}
                      />
                    </Stack>
                    <Typography variant="body2" sx={{ fontSize: 20, my: 1 }}>
                      {userData.name}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14, mb: -1 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Full Stack Developer
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <ColorButton size="small" variant="contained">
                      Edit
                    </ColorButton>
                    <ColorButton
                      size="small"
                      variant="contained"
                      onClick={GetHired}
                    >
                      Get Hired
                    </ColorButton>
                    <ColorButton
                      size="small"
                      variant="contained"
                      onClick={PostJobs}
                    >
                      Post Job
                    </ColorButton>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={8}>
                <Card sx={{ minWidth: 280 }}>
                  <CardContent>
                    <Box
                      sx={{
                        display: "grid",
                        gap: 1,
                        gridTemplateColumns: "repeat(2, 1fr)",
                      }}
                    >
                      <Typography variant="body2">Name:</Typography>

                      <Typography variant="body2">{userData.name}</Typography>
                    </Box>
                    <hr></hr>
                    <Box
                      sx={{
                        display: "grid",
                        gap: 1,
                        gridTemplateColumns: "repeat(2, 1fr)",
                      }}
                    >
                      <Typography variant="body2">Email:</Typography>

                      <Typography variant="body2">{userData.email}</Typography>
                    </Box>
                    <hr></hr>
                    <Box
                      sx={{
                        display: "grid",
                        gap: 1,
                        gridTemplateColumns: "repeat(2, 1fr)",
                      }}
                    >
                      <Typography variant="body2">Number:</Typography>

                      <Typography variant="body2">{userData.phone}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="body3">Interest and Skills</Typography>
                    <Typography variant="body2" mt={1} mb={2}>
                      Web Design:
                      <LinearProgress
                        variant="determinate"
                        value={85}
                        sx={styling.LinearProgress}
                      />
                    </Typography>
                    <Typography variant="body2" mt={0} mb={2}>
                      Video-Editing:
                      <LinearProgress
                        variant="determinate"
                        value={55}
                        sx={styling.LinearProgress}
                      />
                    </Typography>
                    <Typography variant="body2" mt={0} mb={2}>
                      Android Development:
                      <LinearProgress
                        variant="determinate"
                        value={70}
                        sx={styling.LinearProgress}
                      />
                    </Typography>
                    <Typography variant="body2" mt={0}>
                      Accountancy:
                      <LinearProgress
                        variant="determinate"
                        value={60}
                        sx={styling.LinearProgress}
                      />
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </>
    )
  );
};

export default Profile;
