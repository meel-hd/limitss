import { Badge, Card, Group, Table, Text } from "@mantine/core";

function Status(jobs) {
  console.log(jobs);
  return (
    <Table>
      <thead>
        <tr>
          <th>Job</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {jobs.jobs.map((job) => {
          let color = "yellow";
          if (job.conclusion === "success") {
            color = "green";
          } else if (job.conclusion === "failure") {
            color = "red";
          }
          return (
            <tr key={job.id}>
              <td>{job.labels[0]}</td>
              <td>
                <Badge color={color}>{job.conclusion || 'Starting'}</Badge>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Status;
