import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import ToDoItem from "../ToDoItem";

const DoneList = ({ doneTasks, handleReopen }) => {
  return (
    <Grid container xs={12} spacing={5}>
      <Grid item xs={12}>
        <Typography variant="h5">Done:</Typography>
      </Grid>
      {doneTasks.map((task) => (
        <Grid item xs={12}>
          <ToDoItem
            key={task.id}
            content={task.content}
            handleReopen={() => handleReopen(task.id)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default DoneList;
