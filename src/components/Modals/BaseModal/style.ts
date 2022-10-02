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

export const FullContainer = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: none;
  position: absolute;
`
export const WorkoutRegisterContainer = styled.div`
  margin-top: 30px;
  flex-direction: column;
  height: 330px;
  width: 900px;
  display: flex;
  margin-left: 10px;
`
export const WorkoutRegisterBox = styled.div`
  background: #d9d9d9;
  height: 100%;
  width: 100%;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`

type AddWorkoutButtonDTO = {
  disabled?: boolean
}

export const AddWorkoutButton = styled.button<AddWorkoutButtonDTO>`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  margin-right: 4px;
  width: auto;
  color: #9f4786;
  text-decoration: underline;
  cursor: pointer;
  border: none;
  outline: none;
  ${(props) => props.disabled && `color: #515151;`}
  ${(props) => props.disabled && `cursor: auto;`}
  ${(props) => props.disabled && `text-decoration: none;`}
`

type SelectWorkoutProps = {
  isSelected?: boolean
  isAddButton?: boolean
  hasDeleteIcon?: boolean
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
  background-color: #616161;
  border-radius: 10px;
  margin-right: 8px;
  margin-top: 5px;

  ${(props) => props.isSelected && ` background-color: #515151;`}
  ${(props) => props.isSelected && ` font-weight: bold;`}
  ${(props) => props.isSelected && `min-height: 75px;`}
  ${(props) => props.isSelected && `box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);`}
  ${(props) => props.isSelected && props.hasDeleteIcon && `min-height: 45px;`}
  ${(props) => props.isSelected && props.hasDeleteIcon && `margin-bottom: 0;`}
  ${(props) => props.isSelected && props.hasDeleteIcon && `border-radius: 10px 10px 0px 0px;`}
  ${(props) => props.isAddButton && `background-color: #158B28;`}

  cursor: pointer;

  &:first-child {
    margin-top: 0px;
  }
`

export const DeleteWorkout = styled.div`
  background: tomato;
  height: 30px;
  width: 50px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 10px 10px;
  font-size: 10px;
  cursor: pointer;
`

export const ExerciseData = styled.div`
  display: flex;
  background: #fbfbfb;
  border-radius: 10px;
  height: 48px;
  min-height: 48px;
  align-items: center;
  position: relative;
  width: auto;
  margin: 4px 8px;
  &:first-child {
    margin-top: 8px;
  }
`

type ExerciseInputDTO = {
  width?: string
  margin?: string
}

export const ExerciseInput = styled.input<ExerciseInputDTO>`
  border: none;
  text-decoration: none;
  margin: ${(props) => props.margin};
  width: ${(props) => (props.width ? props.width : '200px')};
  border-radius: 2px;
  border-bottom: 2px solid #313131;
  height: 26px;
  padding: 5px 10px;
  font-size: 14px;
  background: #f2feff;
  &:focus {
    outline: none;
  }
`

type ExerciseCreateButtonDTO = {
  background: string
}

export const ExerciseCreateButton = styled.button<ExerciseCreateButtonDTO>`
  position: absolute;
  top: 0;
  height: 100%;
  border-radius: 0px 10px 10px 0px;
  display: flex;
  align-items: center;
  color: white;
  border: none;
  width: 38px;
  right: 0;
  justify-content: center;
  cursor: pointer;
  background: ${(props) => props.background};
`
export const ExerciseIcon = styled.img`
  width: 34px;
  height: 34px;
  margin: 0px 10px;
`

export const ExerciseInfo = styled.p`
  font-size: 13px;
  width: 100%;
`

export const ConfirmContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0px 60px 0 10px;
`
