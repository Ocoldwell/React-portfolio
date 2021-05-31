import React from "react";
import PageContainer from "../../shared/PageContainer";
import {
  HeaderContainerMain,
  HeaderContainerSub,
} from "../../shared/HeaderContainer";
import { HeaderMain, HeaderSub } from "../../shared/Header";

const LandingPage = () => {
  return (
    <PageContainer>
      <HeaderContainerMain>
        <HeaderMain>Hi, I'm Ollie.</HeaderMain>
      </HeaderContainerMain>
      <HeaderContainerSub>
        <HeaderSub>I'm a Web Developer</HeaderSub>
      </HeaderContainerSub>
    </PageContainer>
  );
};

export default LandingPage;

