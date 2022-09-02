import React, { useState } from "react";

import Container from "@awsui/components-react/container";
import Box from "@awsui/components-react/box";
import Header from "@awsui/components-react/header";
import SpaceBetween from "@awsui/components-react/space-between";
import Button from "@awsui/components-react/button";
import ColumnLayout from "@awsui/components-react/column-layout";

function ContainersDemo() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState<SelectProps.Option | null>(null);
  return (
      <SpaceBetween size={"m"}>
      <Container header={<Header variant={"h1"}>Test h1</Header>}>
        <ColumnLayout columns={3} borders="vertical">
          <Box>Column 1</Box>
          <Box>Column 2</Box>
          <Box>Column 3</Box>
        </ColumnLayout>
      </Container>
      <Container header={<Header variant={"h2"}>Test h2</Header>}>
        A sample text
      </Container>
      <Container
        header={<Header variant={"h3"}>Test h3</Header>}
        footer={
          <SpaceBetween direction="horizontal" size="s">
            <Button variant="primary">Primary</Button>
            <Button>Secondary</Button>
          </SpaceBetween>
        }
      >
        A sample text
      </Container>
    </SpaceBetween>
  );
}

 

export default ContainersDemo;