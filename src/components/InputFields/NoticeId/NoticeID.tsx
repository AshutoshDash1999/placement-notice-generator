import { Input } from '@mantine/core';
import { useId } from '@mantine/hooks';
import React from 'react';
import InputMask from 'react-input-mask';

function NoticeID() {
  const id = useId();

  return (
    <Input.Wrapper mb='xs' id={id} label='Placement Notice ID' required>
      <Input
        component={InputMask}
        mask='PA-9999'
        id={id}
        name='notice_id'
        placeholder='PA-XXXX'
      />
    </Input.Wrapper>
  );
}

export default NoticeID;
