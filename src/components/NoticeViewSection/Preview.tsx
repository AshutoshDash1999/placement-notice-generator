import React from "react";
import { useApp } from "../../context/AppContext";
import {
  Box,
  Button,
  Container,
  CopyButton,
  Tabs,
  Title,
  Tooltip,
} from "@mantine/core";
function Preview() {
  const { state: values } = useApp();
  console.log(values);

  return (
    <div>
      <Box
        sx={{
          margin: "1em 0",
          border: "1px solid #ced4da",
          minHeight: "500px",
          borderRadius: "4px",
          padding: "8px",
        }}
      >
        {/* notice id */}
        <p>
          <b>{values.notice_id}</b>
        </p>
        {/* company name */}
        {values.company_name && (
          <p>
            <b>Company: </b>
            {values.company_name}
          </p>
        )}
        {/* about company */}
        {values.about_company && (
          <p>
            <b>About Company: </b> <br />
            {values.about_company}
          </p>
        )}
        {values.job_role && (
          <p>
            <b>Job Role: </b> <br />
            {values.job_role}
          </p>
        )}
        {values.ctc && (
          <p>
            <b>CTC: </b> <br />
            {values.ctc}
          </p>
        )}
        {values.degree_allowed.length > 0 && (
          <p>
            <b>Degree: </b> <br />
            {values.degree_allowed.toString()}
          </p>
        )}
        {values.branches_allowed.length > 0 && (
          <p>
            <b>Branch: </b> <br />
            {values.branches_allowed}
          </p>
        )}

        {values.max_backlog && (
          <p>
            <b>Maximum Backlog: </b> <br />
            {values.max_backlog}
          </p>
        )}

        {values.tenth_perc && (
          <p>
            <b>Min 10th %: </b> <br />
            {values.tenth_perc}%
          </p>
        )}

        {values.twelfth_perc && (
          <p>
            <b>Min 12th %: </b> <br />
            {values.twelfth_perc}%
          </p>
        )}

        {values.diploma_perc && (
          <p>
            <b>Min diploma %: </b> <br />
            {values.diploma_perc}%
          </p>
        )}

        {values.ug_perc && (
          <p>
            <b>Min UG %: </b> <br />
            {values.ug_perc}%
          </p>
        )}

        {values.pg_perc && (
          <p>
            <b>Min PG %: </b> <br />
            {values.pg_perc}%
          </p>
        )}

        {values.form_link && (
          <p>
            All the eligible and interested candidates are required to fill the
            form by : <b>{values.form_link}</b>
          </p>
        )}
      </Box>
    </div>
  );
}

export default Preview;
