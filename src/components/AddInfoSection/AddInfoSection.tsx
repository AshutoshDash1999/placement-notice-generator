import React from "react";
import {
  Container,
  Grid,
  Input,
  List,
  MultiSelect,
  Text,
  Textarea,
} from "@mantine/core";
import NoticeID from "../InputFields/NoticeId/NoticeID";
import CompanyName from "../InputFields/CompanyName/CompanyName";
import AboutCompany from "../InputFields/AboutCompany/AboutCompany";
import Eligibility from "../InputFields/Eligibility/Eligibility";
import FormSubmission from "../InputFields/FormSubmission/FormSubmission";
import AboutJob from "../InputFields/AboutJob/AboutJob";

function AddInfoSection() {


  return (
    <Container>
      
      <NoticeID/>
      <CompanyName/>
      <AboutCompany/>
      <AboutJob/>
      <Eligibility/>
      <FormSubmission/>
    </Container>
  );
}

export default AddInfoSection;
