// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. // SPDX-License-Identifier: MIT-0
import Form from "@awsui/components-react/form";
import FormField from "@awsui/components-react/form-field";
import Input from "@awsui/components-react/input";
import Select, { SelectProps } from "@awsui/components-react/select";
import Container from "@awsui/components-react/container";
import Header from "@awsui/components-react/header";
import SpaceBetween from "@awsui/components-react/space-between";
import Button from "@awsui/components-react/button";
import AppLayout from "@awsui/components-react/app-layout";
import SideNavigation from "@awsui/components-react/side-navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import {Home} from "./Home";
import Test from "./Test"; 
import ContainersDemo from "./Container";
import ButtonDemo from "./ButtonDemo";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState<SelectProps.Option | null>(null);
  return (
    <AppLayout
       navigation={
          <SideNavigation
            header={{
              text: "AWS UI",
              href: "/"
            }}
            items={[
              {
                text: "Containers",
                type: "link",
                href: "/containers"
              },  
              {
                text: "Buttons",
                type: "link",
                href: "/button-demo"
              }, 
                
            ]}
          />
        }
      content={
        <BrowserRouter>
            <Routes>
              <Route exact path="/containers" element={<ContainersDemo />} /> 
              <Route exact path="/button-demo" element={<ButtonDemo />} /> 
               
              <Route
                path="*"
                element={
                   <Test />
                }
              />
            </Routes>
          </BrowserRouter>
      }
    />
  );
}

export default App;
