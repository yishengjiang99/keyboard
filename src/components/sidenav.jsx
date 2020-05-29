import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";

export const Sidenav = (props) => {
  return (
    <List>
      {props.links.map((link) => {
        return (
          <ListItem
            onClick={async (e) => {
              (link.onClick && link.onClick(e)) ||
                (link.href && (document.location.href = link.href) && true) ||
                alert(link.name + "clicked");
            }}
          >
            {/* {link.icon ? <Icon> {link.icon}</Icon> : null} */}
            <ListItemText>{link.text}</ListItemText>
          </ListItem>
        );
      })}
    </List>
  );
};
