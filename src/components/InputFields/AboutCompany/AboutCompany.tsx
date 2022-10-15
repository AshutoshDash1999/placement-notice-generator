import { Textarea } from "@mantine/core";
import React from "react";

function AboutCompany() {
  return (
    <div>
      <Textarea
        placeholder="About Company"
        label="About Company"
        withAsterisk
        required
      />
    </div>
  );
}

export default AboutCompany;
