import React from 'react'
import PageContainer from "../../shared/PageContainer";
import {RedContainerMain, HeaderContainerSub} from "../../shared/HeaderContainer";
import {HeaderMain, HeaderSub} from "../../shared/Header";


const AboutMe = () => {
  return (
    <PageContainer >
    <RedContainerMain >
      <HeaderMain>
        About
      </HeaderMain>
    </RedContainerMain>
    <HeaderContainerSub>
      <HeaderSub>
        Me
      </HeaderSub>
    </HeaderContainerSub>
  </PageContainer>
  )
}

export default AboutMe
