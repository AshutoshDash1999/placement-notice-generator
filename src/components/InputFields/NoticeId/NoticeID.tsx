import { Input } from '@mantine/core'
import { useId } from '@mantine/hooks';
import React from 'react'
import InputMask from "react-input-mask";

function NoticeID() {
  const id = useId();

  return (
    <div>
        <Input.Wrapper id={id} label="Placement Notice ID" required>
        <Input
          component={InputMask}
          mask="PA-9999"
          id={id}
          placeholder="PA-XXXX"
        />
      </Input.Wrapper>
    </div>
  )
}

export default NoticeID