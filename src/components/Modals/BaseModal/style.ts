import styled, { keyframes } from 'styled-components'

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.17);
  display: flex;
  justify-content: center;
  align-items: center;
`

export type ModalContainerProps = {
  width: string
  height: string
}

const entrance = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
  
`

export const ModalCard = styled.div<ModalContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
  background: #fbfbfb;
  border-radius: 10px;
  z-index: 3;
  padding: 20px 32px;
  animation: ${entrance} 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`

export const ModalTitle = styled.p`
  font-size: 20px;
  font-family: 'SackersGothicStd';
  font-weight: 200;
`

export const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  justify-content: space-between;
  height: 330px;
  margin-top: 30px;
`

export const WorkoutRegisterContainer = styled.div`
  margin-top: 30px;
  flex-direction: column;
  height: 330px;
  width: 700px;
  display: flex;
`
export const WorkoutRegisterBox = styled.div`
  background: #d9d9d9;
  height: 100%;
  width: 100%;
  display: flex;
  border-radius: 10px;
`

export const AddWorkoutButton = styled.p`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  margin-right: 4px;
  width: auto;
  color: #9f4786;
  text-decoration: underline;
  cursor: pointer;
`

type SelectWorkoutProps = {
  isSelected?: boolean
  isAddButton?: boolean
}

export const SelectWorkout = styled.div<SelectWorkoutProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  min-height: 50px;
  height: 50px;
  width: 50px;
  min-width: 50px;
  background-color: #515151;
  border-radius: 10px;
  margin-right: 8px;
  margin-top: 5px;

  ${(props) => props.isSelected && `min-height: 75px;`}
  ${(props) => props.isSelected && `box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);`}
  ${(props) => props.isAddButton && `background-color: #158B28;`}

  cursor: pointer;

  &:first-child {
    margin-top: 0px;
  }
`

export const ExerciseData = styled.div`
  display: flex;
  background: #fbfbfb;
  border-radius: 10px;
  min-height: 34px;
  max-height: 34px;
  align-items: center;
  margin: 4px 8px;
  width: 100%;

  &:first-child {
    margin-top: 8px;
  }
`

export const ExerciseIcon = styled.img`
  width: 34px;
  height: 34px;
  margin: 0px 10px;
`

export const ExerciseInfo = styled.p`
  font-size: 13px;
`
