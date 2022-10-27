import { Input } from '@mantine/core';
import { useId } from '@mantine/hooks';
import React from 'react';
import InputMask from 'react-input-mask';

function CompanyName() {
  const id = useId();

  return (
    <Input.Wrapper mb='xs' id={id} label='Company Name' required>
      <Input
        id={id}
        name='company_name'
        placeholder='Amazon/Microsoft/TCS....'
      />
    </Input.Wrapper>
  );
}

export default CompanyName;
