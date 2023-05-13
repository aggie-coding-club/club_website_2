import { Paper, Button } from "@mui/material";

export default function ProjectCard() {
  return (
    <Paper sx={{ width: "400px" }}>
      <h3>Rev Registration</h3>
      <p>
        Rev Registration is an automatic class scheduler for Texas A&M, that
        generates schedules given the courses a student would like to take and
        what preferences they have.
      </p>
      <Button>Learn more</Button>
    </Paper>
  );
}
