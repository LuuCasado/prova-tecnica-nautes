import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const ToDoItem = ({ content, handleComplete, handleReopen }) => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        {handleComplete && (
          <Button size="small" onClick={handleComplete}>
            Complete
          </Button>
        )}
        {handleReopen && (
          <Button size="small" onClick={handleReopen}>
            Reopen
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ToDoItem;
