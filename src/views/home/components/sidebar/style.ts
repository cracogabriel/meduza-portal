import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  width: 45px;
  height: 100vh;
  background: #515151;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`

type SidebarImageProps = {
  width: number
  height: number
}

export const SidebarImage = styled.img<SidebarImageProps>`
  margin: 8px 0 12px 0;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`
