import styled from "styled-components";

export const HeaderContainerMain = styled.div`
  height: 50%;
  width: 100%;
  background: #f9a620;
  display: flex;
  align-items: flex-end;
  position: relative;
`;
export const HeaderContainerSub = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const RedContainerMain = styled(HeaderContainerMain)`
  background: #f72c25;
`;
export const BlueContainerMain = styled(HeaderContainerMain)`
  background: #0eb1d2;
`;
