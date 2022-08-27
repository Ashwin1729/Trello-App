import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Draggable } from "react-beautiful-dnd";

const useStyle = makeStyles({
  card: {
    padding: "10px 10px 10px 20px",
    margin: "10px",
  },
});

const Card = ({ title, idx, id }) => {
  const classes = useStyle();

  return (
    <Draggable draggableId={id} index={idx}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Paper className={classes.card}>{title}</Paper>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
