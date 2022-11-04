import React, { useId } from "react";
import {
  Container,
  Button,
  Grid,
  Input,
  List,
  MultiSelect,
  Text,
  Textarea,
  TextInput,
  Title,
  Select,
} from "@mantine/core";
import { IconPercentage } from "@tabler/icons";
import { useForm } from "@mantine/form";
import InputMask from "react-input-mask";
import { DatePicker, TimeInput } from "@mantine/dates";
import { addDegree, changeInput, useApp } from "../../context/AppContext";

function AddInfoSection() {
  const id = useId();

  const degreeData = [
    { value: "B.Sc", label: "B.Sc" },
    { value: "B.Tech", label: "B.Tech" },
    { value: "MCA", label: "MCA" },
    { value: "M.Sc", label: "M.Sc" },
    { value: "M.Tech", label: "M.Tech" },
  ];

  const branchData = [
    { value: "CSE", label: "CSE" },
    { value: "IT", label: "IT" },
    { value: "EE", label: "EE" },
    { value: "I&E", label: "I&E" },
    { value: "FT", label: "FT" },
    { value: "TE", label: "TE" },
    { value: "CE", label: "CE" },
    { value: "BT", label: "BT" },
    { value: "MCA", label: "MCA" },
    { value: "Chem", label: "Chem" },
    { value: "Physics", label: "Physics" },
    { value: "Maths&Comp.", label: "Maths&Comp." },
  ];

  const maxBacklogs = [
    { value: "0", label: "0" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
  ];

  // const [placementNoticeData, setPlacementNoticeData] = useState({
  //   notice_id: '',
  //   company_name: '',
  //   about_company: '',
  //   job_role: '',
  //   ctc: '',
  //   // eligibility criteria
  //   degree_allowed: [],
  //   branchses_allowed: [],
  //   max_backlog: '',
  //   tenth_perc: '',
  //   twelfth_perc: '',
  //   diploma_perc: '',
  //   ug_perc: '',
  //   pg_perc: '',
  //   min_gap: '',

  //   // other details:
  //   form_link: '',
  //   form_submission_date: '',
  //   pick_time: '',
  // });

  // Clear these 👆 after providing values to all input

  const { state, dispatch } = useApp();

  const handleDropDown = (value: any) => {
    // console.log(value);
    // console.log(state.degree_allowed);

    dispatch(addDegree(value));
  };

  const handleInput = (event: any) => {
    console.log(event.target.value);
    dispatch(changeInput({ [event.target.name]: event.target.value }));
  };

  const formSubmit = (event: any) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <Container>
      <Title order={3} mb="sm" weight={400}>
        Placement Details
      </Title>

      <form onSubmit={formSubmit}>
        {/* <Button type='submit'>Clcik</Button> */}

        {/* notice id  */}
        <TextInput
          name="notice_id"
          mb="xs"
          id={id}
          required
          label="Placement Notice ID"
          placeholder="PA-XXXX"
          description="Write the notice number here"
          defaultValue={state.notice_id}
          onChange={handleInput}
        />

        {/* company name  */}
        <TextInput
          name="company_name"
          mb="xs"
          id={id}
          required
          label="Company Name"
          placeholder=""
          description="Write company name here"
          defaultValue={state.company_name}
          onChange={handleInput}
          // {...form.getInputProps('company_name')}
        />

        {/* about company  */}
        <Textarea
          id={id}
          mb="xs"
          placeholder="About Company"
          label="About Company"
          name="about_company"
          withAsterisk
          required
          description="Write about company here"
          defaultValue={state.about_company}
          onChange={handleInput}
          // {...form.getInputProps('about_company')}
        />

        {/* job role  */}
        <div>
          <TextInput
            mb="xs"
            label="Job Role"
            placeholder="Full Stack Developer"
            name="job_role"
            defaultValue={state.job_role}
            onChange={handleInput}
            withAsterisk
          />
          <TextInput
            mb="xs"
            label="CTC"
            name="ctc"
            placeholder="6"
            defaultValue={state.ctc}
            onChange={handleInput}
            withAsterisk
          />
          <Button variant="light" my="xs">
            Add New Role
          </Button>
        </div>

        {/* eligibility criteria  */}
        <div>
          <Text size="md">Eligibility Criteria:</Text>
          <List type="ordered">
            <List.Item>
              <MultiSelect
                name="degree_allowed"
                data={degreeData}
                value={state.degree_allowed}
                onChange={handleDropDown}
                label="Degree Allowed"
                placeholder="Pick degree"
                searchable
                clearable
                required
              />
            </List.Item>
            <List.Item>
              <MultiSelect
                name="branches_allowed"
                data={branchData}
                value={state.branches_allowed}
                onChange={handleDropDown}
                label="Branches Allowed"
                placeholder="Pick branch"
                searchable
                clearable
                required
              />
            </List.Item>
            <List.Item>
              <Select
                name="max_backlog"
                label="Maximum backlogs allowed"
                placeholder="Pick backlogs count"
                data={maxBacklogs}
                searchable
                required
                value={state.max_backlog}
                clearable
              />
            </List.Item>
            <List.Item>
              <Input.Wrapper id={id} label="10th Percentage">
                <Input
                  id={id}
                  placeholder="10th percentage"
                  name="tenth_perc"
                  rightSection={<IconPercentage />}
                  defaultValue={state.tenth_perc}
                  onChange={handleInput}
                />
              </Input.Wrapper>
            </List.Item>
            <List.Item>
              <Input.Wrapper id={id} label="12th Percentage">
                <Input
                  name="twelfth_perc"
                  id={id}
                  placeholder="12th percentage"
                  rightSection={<IconPercentage />}
                  defaultValue={state.twelfth_perc}
                  onChange={handleInput}
                />
              </Input.Wrapper>
            </List.Item>
            <List.Item>
              <Input.Wrapper id={id} label="Diploma Percentage">
                <Input
                  name="diploma_perc"
                  component={InputMask}
                  mask="99"
                  id={id}
                  placeholder="Diploma percentage"
                  rightSection={<IconPercentage />}
                  defaultValue={state.diploma_perc}
                  onChange={handleInput}
                />
              </Input.Wrapper>
            </List.Item>
            <List.Item>
              <Input.Wrapper id={id} label="UG Percentage">
                <Input
                  name="ug_perc"
                  component={InputMask}
                  mask="99"
                  id={id}
                  placeholder="UG percentage"
                  rightSection={<IconPercentage />}
                  defaultValue={state.ug_perc}
                  onChange={handleInput}
                />
              </Input.Wrapper>
            </List.Item>
            <List.Item>
              <Input.Wrapper id={id} label="PG Percentage">
                <Input
                  name="pg_perc"
                  component={InputMask}
                  mask="99"
                  id={id}
                  placeholder="PG percentage"
                  rightSection={<IconPercentage />}
                  defaultValue={state.pg_perc}
                  onChange={handleInput}
                />
              </Input.Wrapper>
            </List.Item>
            <List.Item>
              <Input.Wrapper id={id} label="Minimum Gap year">
                <Input
                  name="min_gap"
                  component={InputMask}
                  mask="9"
                  id={id}
                  placeholder="Minimum year of gaps"
                  rightSection={<IconPercentage />}
                  defaultValue={state.min_gap}
                  onChange={handleInput}
                />
              </Input.Wrapper>
            </List.Item>
          </List>
        </div>

        {/* form apply  */}
        <div>
          <TextInput
            name="form_link"
            defaultValue={state.form_link}
            onChange={handleInput}
            label="Form Link"
            withAsterisk
            placeholder="Paste google form link here"
          />
          <DatePicker
            name="form_submission_date"
            placeholder="Pick date"
            label="Form submission date"
            withAsterisk
            clearable
            defaultValue={state.form_submission_date}
            onChange={handleInput}
          />
          <TimeInput
            name="form_submission_time"
            label="Pick time"
            format="12"
            withAsterisk
            clearable
            defaultValue={state.form_submission_time}
            onChange={handleInput}
          />
        </div>
      </form>
    </Container>
  );
}

export default AddInfoSection;
