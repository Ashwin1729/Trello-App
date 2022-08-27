import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Data from "./Store";

const StoreApi = React.createContext({
  data: {},
  setData: () => {},
  addMoreCard: (title, listId) => {},
  addMoreList: (title) => {},
  updateListTitle: (newTitle, listId) => {},
  onDragHandler: (result) => {},
});

export const StoreApiProvider = (props) => {
  const [data, setData] = useState(Data);

  console.log(data);

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
    <StoreApi.Provider
      value={{
        data: data,
        addMoreCard: addMoreCard,
        addMoreList: addMoreList,
        updateListTitle: updateListTitle,
        onDragHandler: onDragHandler,
      }}
    >
      {props.children}
    </StoreApi.Provider>
  );
};

export default StoreApi;
