/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import styles from "styled-components";
import { teal } from "@material-ui/core/colors";
import SendIcon from "@mui/icons-material/Send";

const SingleJob = () => {
  const [loading, setLoading] = useState(true);
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 0);
  }
  const styling = {
    container: {
      padding: 3,
      marginTop: 14,
      width: "100%",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 10px 25px",
      borderRadius: "16px",
    },
    typography: {
      marginTop: 3,
    },
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(teal["A400"]),
    backgroundColor: teal["A200"],
    padding: "8 0",
    "&:hover": {
      backgroundColor: teal["A400"],
    },
  }));
  return (
    <>
      <CssBaseline />
      <Container sx={styling.container} fixed>
        <Box sx={{ flexGrow: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Image
                src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt=""
                loading="lazy"
              />

              <CardActions>
                <ColorButton
                  size="medium"
                  variant="contained"
                  sx={{ width: "400px", ml: -1 }}
                  endIcon={<SendIcon />}
                >
                  <a href="mailto:sunkabhanu281202@gmail.com">Send Proposal</a>
                </ColorButton>
              </CardActions>
            </Grid>
            <Grid item xs={7}>
              <Card sx={{ minWidth: 280 }}>
                <CardContent>
                  <Box
                    sx={{
                      display: "grid",
                      gap: 1,
                      gridTemplateColumns: "repeat(2, 1fr)",
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 900 }}>
                      Title:
                    </Typography>

                    <Typography variant="body2">Android Development</Typography>
                  </Box>
                  <hr></hr>
                  <Box
                    sx={{
                      display: "grid",
                      gap: 1,
                      gridTemplateColumns: "repeat(2, 1fr)",
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 900 }}>
                      Date:
                    </Typography>

                    <Typography variant="body2">15/08/2022</Typography>
                  </Box>
                  <hr></hr>
                  <Box
                    sx={{
                      display: "grid",
                      gap: 1,
                      gridTemplateColumns: "repeat(2, 1fr)",
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 900 }}>
                      Price:
                    </Typography>

                    <Typography variant="body2">₹20000</Typography>
                  </Box>
                  <hr></hr>
                  <Box
                    sx={{
                      display: "grid",
                      gap: 1,
                      gridTemplateColumns: "repeat(2, 1fr)",
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 900 }}>
                      Duration:
                    </Typography>

                    <Typography variant="body2">3hr</Typography>
                  </Box>
                  <hr></hr>
                  <Box
                    sx={{
                      display: "grid",
                      gap: 1,
                      gridTemplateColumns: "repeat(2, 1fr)",
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 900 }}>
                      Description:
                    </Typography>
                    <TextareaAutosize
                      maxRows={8}
                      aria-label="empty textarea"
                      // placeholder="Empty"
                      defaultValue="Need a Freelancer to build an application for the grocery which can be efficient, fast and user-friendly."
                      style={{ width: "100%" }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

const Image = styles.img`
height: 400px;
width: 400px;
borderRadius: "16px",
boxShadow: "rgba(0, 0, 0, 0.35) 0px 10px 25px",
`;

export default SingleJob;
