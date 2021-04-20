import React from 'react'
import PageContainer from "../../shared/PageContainer";
import {HeaderContainerMain, HeaderContainerSub} from "../../shared/HeaderContainer";
import {HeaderMain, HeaderSub} from "../../shared/Header";

const AboutMe = () => {
  return (
    <PageContainer >
    <HeaderContainerMain>
      <HeaderMain>
        About
      </HeaderMain>
    </HeaderContainerMain>
    <HeaderContainerSub>
      <HeaderSub>
        Me
      </HeaderSub>
    </HeaderContainerSub>
  </PageContainer>
  )
}

export default AboutMe
