import React from "react";
import { Container, Input } from "@mantine/core";
import { useId } from '@mantine/hooks';
import InputMask from 'react-input-mask';

function AddInfoSection() {
  const id = useId();

  return (
    <Container>
      <Input.Wrapper id={id} label="Placement Notice ID" required>
        <Input
          component={InputMask}
          mask="PA-9999"
          id={id}
          placeholder="PA-XXXX"
        />
      </Input.Wrapper>
      <Input.Wrapper id={id} label="Company Name" required>
        <Input
          id={id}
          placeholder="Amazon/Microsoft/TCS...."
        />
      </Input.Wrapper>
      <Input.Wrapper id={id} label="About the Company" required>
        <Input
          component={InputMask}
          mask="PA-9999"
          id={id}
          placeholder="PA-XXXX"
        />
      </Input.Wrapper>
    </Container>
  );
}

export default AddInfoSection;
