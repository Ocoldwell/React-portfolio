import React from 'react'
import PageContainer from "../../shared/PageContainer";
import {HeaderContainerMain, HeaderContainerSub} from "../../shared/HeaderContainer";
import {HeaderMain, HeaderSub} from "../../shared/Header";


const LandingPage = () => {
  return (
    <PageContainer>
      <HeaderContainerMain>
        <HeaderMain>
          Ollie
        </HeaderMain>
      </HeaderContainerMain>
      <HeaderContainerSub>
        <HeaderSub>
          Coldwell
        </HeaderSub>
      </HeaderContainerSub>
    </PageContainer>
  )
}

export default LandingPage
// $blockcolor1: #F9A620;
// $blockcolor2: #F72C25;
// $blockcolor3: #0EB1D2;