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
        <HeaderMain>Ollie</HeaderMain>
      </HeaderContainerMain>
      <HeaderContainerSub>
        <HeaderSub>Coldwell<span>.</span></HeaderSub>
      </HeaderContainerSub>
    </PageContainer>
  );
};

export default LandingPage;

