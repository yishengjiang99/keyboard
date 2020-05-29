import { React, loadSubApp } from "subapp-react";
import { Button } from "@material-ui/core";

export const Link = ({ href }) => {
  return (
    <Button
      onClick={() => {
        document.location.href = href;
      }}
      color="primary"
    >
      {href}
    </Button>
  );
};

export const Image = ({ src, href }) => {
  return (
    <Button
      onClick={() => {
        document.location.href = href;
      }}
      color="primary"
    >
      <img src={src} />
    </Button>
  );
};
