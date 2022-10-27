import { Button, TextInput } from '@mantine/core';

function AboutJob() {
  return (
    <div>
      <TextInput mb='xs' label='Job Role' name='job_role' withAsterisk />
      <TextInput mb='xs' label='CTC' name='ctc' withAsterisk />
      <Button variant='light' my='xs'>
        Add New Role
      </Button>
    </div>
  );
}

export default AboutJob;
