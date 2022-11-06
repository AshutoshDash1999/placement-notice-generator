import { Container, Divider, Text } from "@mantine/core";
import { IconHeart } from "@tabler/icons";

function Footer() {
  return (
    <Container>
      <Divider
        my="lg"
        label={
          <Text
            size="sm"
            sx={{ display: "flex", alignItems: "center", gap: "6px" }}
          >
            Made with <IconHeart size={14} /> by
            <a href="https://ashutoshdash.netlify.app/" target="_blank">
              Ashutosh Dash
            </a>{" "}
            and{" "}
            <a target="_blank" href="https://dineshrout.netlify.app/">
              Dinesh Rout
            </a>
          </Text>
        }
        labelPosition="center"
      />
    </Container>
  );
}

export default Footer;
