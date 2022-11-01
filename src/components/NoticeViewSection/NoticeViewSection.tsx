import {
  Box,
  Button,
  Container,
  CopyButton,
  Tabs,
  Title,
  Tooltip,
} from '@mantine/core';
import { useApp } from '../../context/AppContext';

function NoticeViewSection() {
  const { state: values } = useApp();

  return (
    <Container>
      <Title order={3} weight={400}>
        Notice View
      </Title>

      <Tabs defaultValue='preview' mt={'sm'}>
        <Tabs.List>
          <Tabs.Tab value='preview'>Preview</Tabs.Tab>
          <Tabs.Tab value='text'>Text</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value='preview' pt='xs'>
          <Box
            sx={{
              margin: '1em 0',
              border: '1px solid #ced4da',
              minHeight: '200px',
              borderRadius: '4px',
              padding: '8px',
            }}
          >
            {/* notice id */}
            <p>
              <b>{values.notice_id}</b>
            </p>
            {/* company name */}
            {values.company_name && (
              <p>
                <b>Company: </b>
                {values.company_name}
              </p>
            )}
            {/* about company */}
            {values.about_company && (
              <p>
                <b>About Company: </b> <br />
                {values.about_company}
              </p>
            )}
          </Box>
        </Tabs.Panel>

        <Tabs.Panel value='text' pt='xs'>
          <Box
            sx={{
              margin: '1em 0',
              border: '1px solid #ced4da',
              minHeight: '200px',
              borderRadius: '4px',
              padding: '8px',
            }}
          >
            {/* these should be according to whatsapp formatting */}
            <p>**{values.notice_id}**</p>
            <p>**Company:** {values.company_name}</p>
            <p>**About Company:** {values.about_company}</p>
          </Box>
        </Tabs.Panel>
      </Tabs>

      <Tooltip label='Copy formatted text'>
        {/* value is the formatted text */}
        {/* TODO: generate the formatted text from the values(coming from global state)*/}
        <CopyButton value='text_to_be_copied'>
          {({ copied, copy }) => (
            <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
              {copied ? 'Copied text' : 'Copy'}
            </Button>
          )}
        </CopyButton>
      </Tooltip>
    </Container>
  );
}

export default NoticeViewSection;
