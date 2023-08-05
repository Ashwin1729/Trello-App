# Trello App

It is a basic trello clone that contains basic functionality of Trello.
In it we can add different list, different lists can have different tasks which can be dragged and dropped inside a list and across the lists too.

### Technologies Used

Application is implemented in React.js, application wide state management is done using React Context, UI and Styling is done using Material UI and React-beautiful-dnd is used for the drag and drop functionality.

Deployment Link - https://trello-app-ashwin.netlify.app/



### OPTIONAL QUESTIONS -----------------

1. (Ans) =>  To allow users to create and edit stages for a particular board, what I will do is, I will create a new field inside my context or redux (lets say boards) to save an array of objects, each object corresponding to each board. Each object will contain one of the fields (lets say lists) as an array  of objects representing each task. In this way will have a list of different boards each one having its corresponding lists. Now we can display it in the UI. In this case our draggables will be a list of items of a particular board and boards as well. Droppables would be App component (for draggables as stages) and Stages (for draggables as list items).


2. (Ans)=> In this case we can have a comment field inside of each list object in our context or redux so that each task can list of comments corresponding to them as well. In UI we can have an icon which the user can click to add the comment on each task, and with the help of functions we can store them in our application wide store.


3. (Ans)=> At the end we will be fetching all the information regarding boards and their corresponding tasks through some API. While fetching or posting data from API we can handle errors using try catch method. In this way even if an error occurs then we can handle that accordingly. We can prompt the user about the same by rendering some UI components according to error messages. 
