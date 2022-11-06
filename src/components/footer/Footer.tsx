import React from "react";
import { Container, Divider, Text } from "@mantine/core";
import { IconHeart } from "@tabler/icons";

function Footer() {
  return (
    <Container>
      <Divider
        my="lg"
        label={
          <Text size="sm">
            Made with <IconHeart size={14} /> by &nbsp;
            <a href="https://ashutoshdash.netlify.app/" target="_blank">Ashutosh Dash</a> &nbsp;
            and &nbsp; <a target="_blank" href="https://dineshrout.netlify.app/">Dinesh Rout</a>
          </Text>
        }
        labelPosition="center"
      />
    </Container>
  );
}

export default Footer;
