import React, { useState, useContext } from "react";
import { Paper, InputBase, Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Clear } from "@mui/icons-material";
import StoreApi from "../../utils/StoreApi";

const useStyle = makeStyles({
  card: {
    margin: "0px 10px 10px 10px",
    paddingBottom: "40px",
  },
  input: {
    margin: "10px",
  },
  btnConfirm: {
    background: "#4ad6e0",
  },
  confirm: {
    margin: "0px 10px 10px 10px",
  },
});

const InputCard = ({ setOpen, listId, type }) => {
  const classes = useStyle();
  const [cardTitle, setCardTitle] = useState("");
  const ctx = useContext(StoreApi);

  const handleOnChange = (e) => {
    setCardTitle(e.target.value);
  };

  const addCardHandler = () => {
    if (type === "card") {
      if (cardTitle.trim() !== "") {
        ctx.addMoreCard(cardTitle, listId);
      }
      setOpen(false);
      setCardTitle("");
    } else if (type === "list") {
      if (cardTitle.trim() !== "") {
        ctx.addMoreList(cardTitle);
      }

      setOpen(false);
      setCardTitle("");
    }
  };

  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            onChange={handleOnChange}
            multiline
            // onBlur={() => setOpen(false)}
            fullWidth
            inputProps={{
              className: classes.input,
            }}
            value={cardTitle}
            placeholder={
              type === "card" ? "Enter card title..." : "Enter list title..."
            }
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.btnConfirm} onClick={() => addCardHandler()}>
          {type === "card" ? "Add Card" : "Add List"}
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <Clear />
        </IconButton>
      </div>
    </div>
  );
};

export default InputCard;
