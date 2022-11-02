import React, { createContext, useState } from 'react';
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
} from '@mantine/core';
import { IconPercentage } from '@tabler/icons';
import { useForm } from '@mantine/form';
import { useContext, useEffect, useId } from 'react';
import InputMask from 'react-input-mask';
import { DatePicker, TimeInput } from '@mantine/dates';
import { addDegree, changeInput, useApp } from '../../context/AppContext';

function AddInfoSection() {
  const id = useId();

  const degreeData = [
    { value: 'bsc', label: 'B.Sc' },
    { value: 'btech', label: 'B.Tech' },
    { value: 'mca', label: 'MCA' },
    { value: 'msc', label: 'M.Sc' },
    { value: 'mtech', label: 'M.Tech' },
  ];

  const branchData = [
    { value: 'cse', label: 'CSE' },
    { value: 'it', label: 'IT' },
    { value: 'ee', label: 'EE' },
    { value: 'ie', label: 'I&E' },
    { value: 'ft', label: 'FT' },
    { value: 'te', label: 'TE' },
    { value: 'ce', label: 'CE' },
    { value: 'bt', label: 'BT' },
    { value: 'mca', label: 'MCA' },
    { value: 'chem', label: 'Chem' },
    { value: 'physics', label: 'Physics' },
    { value: 'mc', label: 'Maths&Comp.' },
  ];

  const maxBacklogs = [
    { value: '0', label: '0' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
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
      <Title order={3} mb='sm' weight={400}>
        Placement Details
      </Title>

      <form onSubmit={formSubmit}>
        <Button type='submit'>Clcik</Button>

        {/* notice id  */}
        <TextInput
          name='notice_id'
          mb='xs'
          id={id}
          required
          label='Placement Notice ID'
          placeholder='PA-XXXX'
          description='Write the notice number here'
          defaultValue={state.notice_id}
          onChange={handleInput}
        />

        {/* company name  */}
        <TextInput
          name='company_name'
          mb='xs'
          id={id}
          required
          label='Company Name'
          placeholder=''
          description='Write company name here'
          defaultValue={state.company_name}
          onChange={handleInput}
        />

        {/* about company  */}
        <Textarea
          mb='xs'
          placeholder='About Company'
          label='About Company'
          name='about_company'
          withAsterisk
          required
          description='Write about company here'
          defaultValue={state.about_company}
          onChange={handleInput}
        />

        {/* job role  */}
        <div>
          <TextInput
            mb='xs'
            label='Job Role'
            placeholder='Full Stack Developer'
            name='job_role'
            defaultValue={state.job_role}
            onChange={handleInput}
            withAsterisk
          />
          <TextInput
            mb='xs'
            label='CTC'
            name='ctc'
            placeholder='6'
            defaultValue={state.job_role}
            onChange={handleInput}
            withAsterisk
          />
          <Button variant='light' my='xs'>
            Add New Role
          </Button>
        </div>

        {/* eligibility criteria  */}
        <div>
          <Text size='md'>Eligibility Criteria:</Text>
          <List type='ordered'>
            <List.Item>
              <MultiSelect
                name='degree_allowed'
                data={degreeData}
                value={state.degree_allowed}
                onChange={handleDropDown}
                label='Degree Allowed'
                placeholder='Pick degree'
                searchable
                clearable
                required
              />
            </List.Item>
            <List.Item>
              <MultiSelect
                data={branchData}
                label='Branches Allowed'
                placeholder='Pick branch'
                searchable
                required
              />
            </List.Item>
            <List.Item>
              <Select
                label='Maximum backlogs allowed'
                placeholder='Pick backlogs count'
                data={maxBacklogs}
                searchable
                required
              />
            </List.Item>
            <List.Item>
              <Input.Wrapper id={id} label='10th Percentage'>
                <Input
                  id={id}
                  placeholder='10th percentage'
                  rightSection={<IconPercentage />}
                />
              </Input.Wrapper>
            </List.Item>
            <List.Item>
              <Input.Wrapper id={id} label='12th Percentage'>
                <Input
                  id={id}
                  placeholder='12th percentage'
                  rightSection={<IconPercentage />}
                />
              </Input.Wrapper>
            </List.Item>
            <List.Item>
              <Input.Wrapper id={id} label='Diploma Percentage'>
                <Input
                  component={InputMask}
                  mask='99'
                  id={id}
                  placeholder='Diploma percentage'
                  rightSection={<IconPercentage />}
                />
              </Input.Wrapper>
            </List.Item>
            <List.Item>
              <Input.Wrapper id={id} label='UG Percentage'>
                <Input
                  component={InputMask}
                  mask='99'
                  id={id}
                  placeholder='UG percentage'
                  rightSection={<IconPercentage />}
                />
              </Input.Wrapper>
            </List.Item>
            <List.Item>
              <Input.Wrapper id={id} label='PG Percentage'>
                <Input
                  component={InputMask}
                  mask='99'
                  id={id}
                  placeholder='PG percentage'
                  rightSection={<IconPercentage />}
                />
              </Input.Wrapper>
            </List.Item>
            <List.Item>
              <Input.Wrapper id={id} label='Minimum Gap year'>
                <Input
                  component={InputMask}
                  mask='9'
                  id={id}
                  placeholder='Minimum year of gaps'
                  rightSection={<IconPercentage />}
                />
              </Input.Wrapper>
            </List.Item>
          </List>
        </div>

        {/* form apply  */}
        <div>
          <TextInput label='Form Link' withAsterisk />
          <DatePicker
            placeholder='Pick date'
            label='Form submission date'
            withAsterisk
            clearable
          />
          <TimeInput
            label='Pick time'
            format='12'
            defaultValue={new Date()}
            withAsterisk
            clearable
          />
        </div>
      </form>
    </Container>
  );
}

export default AddInfoSection;
