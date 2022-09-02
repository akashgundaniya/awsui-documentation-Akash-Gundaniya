import React, { useState } from "react";

import Container from "@awsui/components-react/container";
import Box from "@awsui/components-react/box";
import Header from "@awsui/components-react/header";
import SpaceBetween from "@awsui/components-react/space-between";
import Button from "@awsui/components-react/button";
import ColumnLayout from "@awsui/components-react/column-layout";

function ButtonDemo() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState<SelectProps.Option | null>(null);
  return (
      <SpaceBetween size={"m"}>
      <Container header={<Header variant={"h1"}>Test h1</Header>}>
        <ColumnLayout columns={3} borders="vertical">
          <Box><Button variant="primary">Primary</Button></Box>
          <Box> <Button>Secondary</Button></Box>
          <Box> <Button iconName="add-plus">With Icon</Button></Box>
           
        </ColumnLayout>
      </Container> 

      <Container header={<Header variant={"h1"}>Variant</Header>}>
        <ColumnLayout columns={3} borders="vertical">
          <Box><Button variant="primary">Primary</Button></Box> 
          <Box><Button variant="normal ">Primary</Button></Box> 
          <Box><Button variant="link">Primary</Button></Box> 
          <Box><Button variant="icon ">Primary</Button></Box> 
          <Box><Button variant="inline-icon ">Primary</Button></Box> 
        </ColumnLayout>
      </Container> 
    </SpaceBetween>
  );
}

 

export default ButtonDemo;