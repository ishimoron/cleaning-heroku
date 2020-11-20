import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";

import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import HomeIcon from "@material-ui/icons/Home";
import CreateIcon from '@material-ui/icons/Create';
import PaymentIcon from '@material-ui/icons/Payment';
import EcoIcon from '@material-ui/icons/Eco';
import RateReviewIcon from '@material-ui/icons/RateReview';

import "./Drawer.css"

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function MainDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
            <NavLink to="/">Home</NavLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EcoIcon />
          </ListItemIcon>
            <NavLink to="/services">Services</NavLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <QuestionAnswerIcon />
          </ListItemIcon>
            <NavLink to="/questions">Questions</NavLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CreateIcon />
          </ListItemIcon>
            <NavLink to="/contacts">Contacts</NavLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PaymentIcon />
          </ListItemIcon>
          <NavLink to="/results">Results</NavLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <RateReviewIcon />
          </ListItemIcon>
          <NavLink to="/review">Review</NavLink>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
