import { TextInput } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { TimeInput } from '@mantine/dates'
import React from 'react'

function FormSubmission() {
  return (
    <div>
        <TextInput label="Form Link"  withAsterisk/>
        <DatePicker placeholder="Pick date" label="Form submission date" withAsterisk clearable/>
        <TimeInput label="Pick time" format="12" defaultValue={new Date()}  withAsterisk clearable />
    </div>
  )
}

export default FormSubmission