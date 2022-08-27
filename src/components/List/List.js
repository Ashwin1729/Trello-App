import React from "react";
import { Paper, CssBaseline } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Card from "../Card";
import InputContainer from "../Input/InputContainer";
import { Draggable, Droppable } from "react-beautiful-dnd";

const useStyle = makeStyles({
  root: {
    width: "300px",
    marginLeft: "10px",
  },
  cardContainer: {
    marginTop: "40px",
  },
});

const List = ({ list, idx }) => {
  const classes = useStyle();

  return (
    <Draggable draggableId={list.id} index={idx}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Paper
            className={classes.root}
            style={{ backgroundColor: "#11f3f0b0" }}
          >
            <CssBaseline />
            <Title title={list.title} listId={list.id} />
            <Droppable droppableId={list.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={classes.cardContainer}
                >
                  {list.cards.map((card, idx) => {
                    return (
                      <Card
                        key={card.id}
                        title={card.title}
                        idx={idx}
                        id={card.id}
                      />
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <InputContainer listId={list.id} type="card" />
          </Paper>
        </div>
      )}
    </Draggable>
  );
};

export default List;
