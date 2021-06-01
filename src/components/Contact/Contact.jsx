import React from "react";
import PageContainer from "../../shared/PageContainer";
import {
  HeaderContainerMain,
  HeaderContainerSub,
} from "../../shared/HeaderContainer";
import { HeaderMain } from "../../shared/Header";
import TypeformWidget from "../TypeformWidget";

const Contact = (props) => {
  return (
    <PageContainer>
      <HeaderContainerMain>
        <HeaderMain>Contact</HeaderMain>
      </HeaderContainerMain>
      <HeaderContainerSub>
        <TypeformWidget />
      </HeaderContainerSub>
    </PageContainer>
  );
};

export default Contact;
