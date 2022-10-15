import { Input } from '@mantine/core'
import { useId } from '@mantine/hooks';
import React from 'react'
import InputMask from "react-input-mask";

function CompanyName() {
  const id = useId();

  return (
    <div>
        <Input.Wrapper id={id} label="Company Name" required>
        <Input id={id} placeholder="Amazon/Microsoft/TCS...." />
      </Input.Wrapper>
    </div>
  )
}

export default CompanyName