import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import ToDoItem from "../ToDoItem";

const PendingList = ({ handleComplete, pendingTasks }) => {
  return (
    <Grid container xs={12} spacing={5}>
      <Grid item xs={12}>
        <Typography variant="h5">Pendings:</Typography>
      </Grid>
      {pendingTasks.map((task) => (
        <Grid item xs={12}>
          <ToDoItem
            key={task.id}
            content={task.content}
            handleComplete={() => handleComplete(task.id)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default PendingList;
