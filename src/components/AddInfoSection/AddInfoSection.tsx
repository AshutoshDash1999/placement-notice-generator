import {
  Container,
  Grid,
  Input,
  List,
  MultiSelect,
  Text,
  Textarea,
  Title,
} from '@mantine/core';
import NoticeID from '../InputFields/NoticeId/NoticeID';
import CompanyName from '../InputFields/CompanyName/CompanyName';
import AboutCompany from '../InputFields/AboutCompany/AboutCompany';
import Eligibility from '../InputFields/Eligibility/Eligibility';
import FormSubmission from '../InputFields/FormSubmission/FormSubmission';
import AboutJob from '../InputFields/AboutJob/AboutJob';
import { useForm } from '@mantine/form';

function AddInfoSection() {
  const form = useForm({
    initialValues: {
      // basic details
      notice_id: '',
      company_name: '',
      about_company: '',
      job_role: '',
      ctc: '',
      // eligibility criteria
      degree_allowed: [],
      branchses_allowed: [],
      max_backlog: '',
      tenth_perc: '',
      twelfth_perc: '',
      diploma_perc: '',
      ug_perc: '',
      pg_perc: '',
      min_gap: '',

      // other details:
      form_link: '',
      form_submission_date: '',
      pick_time: '',
    },

    // form validation
    validate: {
      // conditions
    },
  });
  return (
    <Container>
      <Title order={3} mb='sm' weight={400}>
        Placement Details
      </Title>

      <NoticeID />
      <CompanyName />
      <AboutCompany />
      <AboutJob />
      <Eligibility />
      <FormSubmission />
    </Container>
  );
}

export default AddInfoSection;
