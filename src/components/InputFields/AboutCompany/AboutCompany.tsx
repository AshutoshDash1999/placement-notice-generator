import { Textarea } from '@mantine/core';
import React from 'react';

function AboutCompany() {
  return (
    <Textarea
      mb='xs'
      placeholder='About Company'
      label='About Company'
      name='about_company'
      withAsterisk
      required
    />
  );
}

export default AboutCompany;
