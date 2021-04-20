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
  position: relative;
`

export const RedContainerMain = styled(HeaderContainerMain)`
  background: #F72C25;
`
export const BlueContainerMain = styled(HeaderContainerMain)`
  background: #0EB1D2;
`
// $blockcolor1: #F9A620;
// $blockcolor2: #F72C25;
// $blockcolor3: #0EB1D2;