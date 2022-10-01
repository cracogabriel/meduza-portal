import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  height: 100%;
  max-height: 36px;
  min-height: 36px;
  width: 100%;
  margin-top: 35px;
  justify-content: space-between;
`

export const HeaderTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 25px;
  color: #202020;
  font-family: 'SackersGothicStd';
  font-weight: 100;
`

export const HeaderButton = styled.button`
  background: #9f4786;
  border-radius: 10px;
  font-size: 14px;
  color: #fff;
  font-weight: 700;
  border: none;
  letter-spacing: 2px;
  padding: 0 30px;
  width: 240px;
  font-family: 'SackersGothicStd';
  cursor: pointer;
`
