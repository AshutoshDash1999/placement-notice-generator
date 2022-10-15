import { Input, List, MultiSelect, Select, Text } from "@mantine/core";
import { useId } from "@mantine/hooks";
import { IconPercentage } from "@tabler/icons";
import React from "react";
import InputMask from 'react-input-mask';

function Eligibility() {
    const id = useId()
  const degreeData = [
    { value: "bsc", label: "B.Sc" },
    { value: "btech", label: "B.Tech" },
    { value: "mca", label: "MCA" },
    { value: "msc", label: "M.Sc" },
    { value: "mtech", label: "M.Tech" },
  ];

  const branchData = [
    { value: "cse", label: "CSE" },
    { value: "it", label: "IT" },
    { value: "ee", label: "EE" },
    { value: "ie", label: "I&E" },
    { value: "ft", label: "FT" },
    { value: "te", label: "TE" },
    { value: "ce", label: "CE" },
    { value: "bt", label: "BT" },
    { value: "mca", label: "MCA" },
    { value: "chem", label: "Chem" },
    { value: "physics", label: "Physics" },
    { value: "mc", label: "Maths&Comp." },
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
  return (
    <div>
      <Text size="md">Eligibility Criteria:</Text>
      <List type="ordered">
        <List.Item>
          <MultiSelect
            data={degreeData}
            label="Degree Allowed"
            placeholder="Pick degree"
            searchable
            clearable
            required
          />
        </List.Item>
        <List.Item>
          <MultiSelect
            data={branchData}
            label="Branches Allowed"
            placeholder="Pick branch"
            searchable
            required
          />
        </List.Item>
        <List.Item>
          <Select
            label="Maximum backlogs allowed"
            placeholder="Pick backlogs count"
            data={maxBacklogs}
            searchable
            required
          />
        </List.Item>
        <List.Item>
          <Input.Wrapper id={id} label="10th Percentage">
            <Input
              component={InputMask}
              mask="99"
              id={id}
              placeholder="10th percentage"
              rightSection={<IconPercentage/>}
            />
          </Input.Wrapper>
        </List.Item>
        <List.Item>
          <Input.Wrapper id={id} label="12th Percentage">
            <Input
              component={InputMask}
              mask="99"
              id={id}
              placeholder="12th percentage"
              rightSection={<IconPercentage/>}
            />
          </Input.Wrapper>
        </List.Item>
        <List.Item>
          <Input.Wrapper id={id} label="Diploma Percentage">
            <Input
              component={InputMask}
              mask="99"
              id={id}
              placeholder="Diploma percentage"
              rightSection={<IconPercentage/>}
            />
          </Input.Wrapper>
        </List.Item>
        <List.Item>
          <Input.Wrapper id={id} label="UG Percentage">
            <Input
              component={InputMask}
              mask="99"
              id={id}
              placeholder="UG percentage"
              rightSection={<IconPercentage/>}
            />
          </Input.Wrapper>
        </List.Item>
        <List.Item>
          <Input.Wrapper id={id} label="PG Percentage">
            <Input
              component={InputMask}
              mask="99"
              id={id}
              placeholder="PG percentage"
              rightSection={<IconPercentage/>}
            />
          </Input.Wrapper>
        </List.Item>
        <List.Item>
          <Input.Wrapper id={id} label="Minimum Gap year">
            <Input
              component={InputMask}
              mask="9"
              id={id}
              placeholder="Minimum year of gaps"
              rightSection={<IconPercentage/>}
            />
          </Input.Wrapper>
        </List.Item>
      </List>
    </div>
  );
}

export default Eligibility;
