import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  CopyButton,
  Tabs,
  Title,
  Tooltip,
  SegmentedControl,
} from "@mantine/core";
import { useApp } from "../../context/AppContext";
import Preview from "./Preview";
import WhatsAppPreview from "./WhatsAppPreview";
import TelegramPreview from "./TelegramPreview";

function NoticeViewSection() {
  const { state: values } = useApp();
  const [previewBox, setPreviewBox] = useState("preview");

  const renderPreview = () => {
    switch (previewBox) {
      case "preview":
        return <Preview />;
      case "whatsapp":
        return <WhatsAppPreview />;
      case "telegram":
        return <TelegramPreview />;
      default:
        return <Preview />;
    }
  };

  return (
    <Container sx={{ position: "sticky", top: 0 }}>
      <Title order={3} py="sm" weight={400}>
        Notice View
      </Title>

      <SegmentedControl
        color="indigo"
        data={[
          {
            value: "preview",
            label: <Box ml={10}>Preview</Box>,
          },
          {
            value: "whatsapp",
            label: <Box ml={10}>WhatsApp</Box>,
          },
          {
            value: "telegram",
            label: <Box ml={10}>Telegram</Box>,
          },
        ]}
        onChange={(e) => setPreviewBox(e)}
      />

      <Box>{renderPreview()}</Box>

      <Tooltip label="Copy formatted text">
        {/* value is the formatted text */}
        {/* TODO: generate the formatted text from the values(coming from global state)*/}
        <CopyButton value="text_to_be_copied">
          {({ copied, copy }) => (
            <Button color={copied ? "green" : "indigo"} onClick={copy}>
              {copied ? "Copied text" : "Copy"}
            </Button>
          )}
        </CopyButton>
      </Tooltip>
    </Container>
  );
}

export default NoticeViewSection;
