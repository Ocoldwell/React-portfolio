import React from "react";
import PageContainer from "../../shared/PageContainer";
import { motion } from "framer-motion";
import {
  HeaderContainerMain,
  HeaderContainerSub,
} from "../../shared/HeaderContainer";
import { HeaderMain, HeaderSub } from "../../shared/Header";

const LandingPage = () => {
  return (
    <PageContainer>
      <HeaderContainerMain>
        <motion.h1>Hi, I'm Ollie.</motion.h1>
      </HeaderContainerMain>
      <HeaderContainerSub>
        <motion.h2
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={{ x: 100 }}
        >
          I'm a Developer.
        </motion.h2>
      </HeaderContainerSub>
    </PageContainer>
  );
};

export default LandingPage;
