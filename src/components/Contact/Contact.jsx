import React from "react";
import PageContainer from "../../shared/PageContainer";
import {
  HeaderContainerMain,
  HeaderContainerSub,
} from "../../shared/HeaderContainer";
import { HeaderMain } from "../../shared/Header";
import  ContactForm  from "./ContactForm";

const Contact = (props) => {
  return (
    <PageContainer>
      <HeaderContainerMain>
        <HeaderMain>Contact</HeaderMain>
      </HeaderContainerMain>
      <HeaderContainerSub>
        <ContactForm/>
      </HeaderContainerSub>
    </PageContainer>
  );
};

export default Contact;
