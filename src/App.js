import React, { useState } from "react";
import List from "./components/List/List";
import { v4 as uuid } from "uuid";
import store from "./utils/Store";
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
  const [data, setData] = useState(store);
  const classes = useStyle();

  const addMoreCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };

    setData(newState);
  };

  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: [],
    };

    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };

  const updateListTitle = (newTitle, listId) => {
    const list = data.lists[listId];
    list.title = newTitle;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const onDragHandler = (result) => {
    console.log(result);
    const { source, destination, draggableId, type } = result;

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];

    if (type === "list") {
      const newListIds = data.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);

      const newState = {
        ...data,
        listIds: newListIds,
      };

      setData(newState);
      return;
    }

    const pickedCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    );

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, pickedCard[0]);
      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [source.droppableId]: destinationList,
        },
      };

      console.log(newState);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, pickedCard[0]);
      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [source.droppableId]: sourceList,
          [destination.droppableId]: destinationList,
        },
      };
      setData(newState);
    }
  };

  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
      <DragDropContext onDragEnd={onDragHandler}>
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
    </StoreApi.Provider>
  );
}

export default App;
