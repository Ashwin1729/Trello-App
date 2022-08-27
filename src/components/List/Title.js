import React, { useContext, useState } from "react";
import { Typography, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { MoreHoriz } from "@mui/icons-material";
import StoreApi from "../../utils/StoreApi";

const useStyle = makeStyles({
  editableTitleContainer: {
    margin: "10px",
    display: "flex",
  },
  editableTitle: {
    flexGrow: 1,
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  input: {
    margin: "10px",
    "&:focus": {
      background: "#ddd",
    },
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
});

const Title = ({ title, listId }) => {
  const [open, setOpen] = useState(false);
  const ctx = useContext(StoreApi);
  const [newTitle, setNewTitle] = useState(title);
  const classes = useStyle();

  const onChangeHandler = (e) => {
    setNewTitle(e.target.value);
  };

  const onBlurHandler = () => {
    setOpen(!open);
    ctx.updateListTitle(newTitle, listId);
  };

  return (
    <div>
      {open ? (
        <div>
          <InputBase
            onChange={onChangeHandler}
            autoFocus
            type="text"
            value={newTitle}
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            onBlur={onBlurHandler}
          />
        </div>
      ) : (
        <div className={classes.editableTitleContainer}>
          <Typography
            onClick={() => setOpen(!open)}
            className={classes.editableTitle}
          >
            {title}
          </Typography>
          <MoreHoriz />
        </div>
      )}
    </div>
  );
};

export default Title;
