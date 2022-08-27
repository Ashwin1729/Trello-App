import React, { useContext } from "react";
import List from "./components/List/List";

import { makeStyles } from "@mui/styles";
import StoreApi from "./utils/StoreApi";
import InputContainer from "./components/Input/InputContainer";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const useStyle = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: "#134553",
  },
  heading: {
    width: "100%",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    fontSize: "80px",
    color: "#11f3f0b0",
    fontFamily: "Tangerine",
  },
  inner: {
    display: "flex",
    flexDirection: "row",
  },
});

function App() {
  const classes = useStyle();
  const ctx = useContext(StoreApi);
  const data = ctx.data;

  return (
    <DragDropContext onDragEnd={ctx.onDragHandler}>
      <Droppable droppableId="app" type="list" direction="horizontal">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={classes.root}
          >
            <div className={classes.heading}>Trello</div>
            <div className={classes.inner}>
              {data.listIds.map((listId, idx) => {
                const list = data.lists[listId];
                return <List list={list} key={listId} idx={idx} />;
              })}
              <InputContainer type="list" />
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
