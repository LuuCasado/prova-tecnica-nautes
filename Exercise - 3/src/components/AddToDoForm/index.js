import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const AddToDoForm = ({ handleCreate }) => {
  const [value, setValue] = useState("");

  return (
    <Grid container>
      <Grid xs={12} item justifyContent="center">
        <Typography variant="h3" gutterBottom align="center">
          Add To Do:
        </Typography>
      </Grid>
      <Grid
        xs={12}
        container
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <Grid item>
          <TextField
            label="To Do"
            variant="outlined"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleCreate(value);
              setValue("");
            }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddToDoForm;
