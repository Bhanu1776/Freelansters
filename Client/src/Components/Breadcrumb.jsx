import * as React from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import styles from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, -0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const Wrapper = styles.section`
  .backbtn{
    display:flex;
  align-items: center;
  background: linear-gradient(-45deg,  rgba(255,255,255,0.25), rgba(0,0,0,0.8));
  border-radius: 50px;
  display: flex;
  height: 30px;
  width:100px ;
  color:white;
  margin: 5px 0px 0px 5px;
  justify-content: center;
  position:absolute;
   box-shadow: 
      12px 12px 16px 0 rgba(0, 0, 0, 0.7),
    -8px -8px 16px 0 rgba(255, 255, 255, 0.3);
    //  animation: vibrate-1 0.3s linear infinite both;

}

@keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}



.css-6od3lo-MuiChip-label {
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 12px;
    padding-right: 12px;
    white-space: nowrap;
    color: #c4c3ca;
}
.css-1oohpub-MuiChip-root .MuiChip-icon {
    margin-left: 5px;
    margin-right: -6px;
    color: #c4c3ca;
}

`;

export default function CustomizedBreadcrumbs() {
  const navigate = useNavigate();
  function handleClick(event) {
    event.preventDefault();
    navigate("/Home");
  }

  return (
    <>
      <Wrapper>
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
              className="backbtn"
              component="a"
              href="/"
              label="Home"
              icon={<HomeIcon fontSize="small" />}
            />
          </Breadcrumbs>
        </div>
      </Wrapper>
    </>
  );
}
