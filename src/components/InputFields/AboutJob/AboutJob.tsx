import { Button, TextInput } from '@mantine/core'
import React from 'react'

function AboutJob() {
  return (
    <div>
        <TextInput label="Job Role"  withAsterisk/>
        <TextInput label="CTC"  withAsterisk/>
        <Button variant="light">Add New Role</Button>
    </div>
  )
}

export default AboutJob