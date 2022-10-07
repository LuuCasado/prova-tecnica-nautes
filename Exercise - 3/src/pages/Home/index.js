import React, { useState, useCallback } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import AddToDoForm from "../../components/AddToDoForm";
import PendingList from "../../components/PendingList";
import DoneList from "../../components/DoneList";

const Home = () => {
  const [pendingTasks, setPendingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const handleCreate = useCallback(
    (content) => {
      if (content) {
        setPendingTasks([
          ...pendingTasks,
          { content, id: new Date().getTime() },
        ]);
      }
    },
    [setPendingTasks, pendingTasks]
  );

  const handleComplete = useCallback(
    (id) => {
      const item = pendingTasks.find((task) => task.id === id);
      setPendingTasks(pendingTasks.filter((task) => task.id !== id));
      setDoneTasks([...doneTasks, item]);
    },
    [setPendingTasks, setDoneTasks, pendingTasks, doneTasks]
  );

  const handleReopen = useCallback(
    (id) => {
      const item = doneTasks.find((task) => task.id === id);
      setDoneTasks(doneTasks.filter((task) => task.id !== id));
      setPendingTasks([...pendingTasks, item]);
    },
    [setDoneTasks, setPendingTasks, doneTasks, pendingTasks]
  );

  return (
    <Container>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <AddToDoForm handleCreate={handleCreate} />
        </Grid>
        <Grid container xs={12} spacing={5}>
          <Grid item xs={12} sm={6}>
            <PendingList
              handleComplete={handleComplete}
              pendingTasks={pendingTasks}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DoneList handleReopen={handleReopen} doneTasks={doneTasks} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
