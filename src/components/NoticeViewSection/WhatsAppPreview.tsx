import React from 'react'
import { useApp } from "../../context/AppContext";
import {
  Box,
  Button,
  Container,
  CopyButton,
  Tabs,
  Title,
  Tooltip,
} from "@mantine/core";
function WhatsAppPreview() {
  const { state: values } = useApp();
  console.log(values);
  return (
    <div>
      <Box
            sx={{
              margin: "1em 0",
              border: "1px solid #ced4da",
              minHeight: "500px",
              borderRadius: "4px",
              padding: "8px",
            }}
          >
            {/* these should be according to whatsapp formatting */}
            <p>**{values.notice_id}**</p>
            <p>**Company:** {values.company_name}</p>
            <p>**About Company:** {values.about_company}</p>
          </Box>
    </div>
  )
}

export default WhatsAppPreview