import React, { useState } from "react";
import { Paper, Typography, Collapse } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import InputCard from "./InputCard";

const useStyle = makeStyles({
  root: {
    marginTop: "10px",
    width: "300px",
  },
  addCard: {
    padding: "10px 10px 10px 20px",
    margin: "0px 10px 10px 10px",
    background: "#EBECF0",
    "&:hover": {
      backgroundColor: "#bbbbbafc",
    },
  },
});

const InputContainer = ({ listId, type }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.addCard}
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography>
            {type === "card" ? "+ Add a Card" : "+ Add a List"}
          </Typography>
        </Paper>
      </Collapse>
    </div>
  );
};

export default InputContainer;
