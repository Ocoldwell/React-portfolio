import styled from 'styled-components';

export const HeaderContainerMain = styled.div`
  height: 50%;
  width: 100%;
  background: #F9A620;
  display: flex;
  align-items: flex-end;
  position: relative;
`
export const HeaderContainerSub = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`

export const RedContainerMain = styled(HeaderContainerMain)`
  background: #F72C25;
`
export const BlueContainerMain = styled(HeaderContainerMain)`
  background: #0EB1D2;
`
