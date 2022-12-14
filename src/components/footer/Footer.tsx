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
            sx={{
              textAlign: "center",
            }}
          >
            Made with <IconHeart size={14} style={{ marginBottom: "-3px" }} />{" "}
            by{" "}
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
