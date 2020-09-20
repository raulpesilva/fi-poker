import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Form = styled.div`
  width: 415px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${({ theme }) => theme.radii.normal}px;
  background-color: ${({ theme }) => theme.colors.mediumGray};
  padding-bottom: 30px;
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.header}px;
  color: ${({ theme }) => theme.colors.highlight};
  margin-top: 40px;
  margin-bottom: 40px;
`

export const WrapperDivision = styled.div`
  display: flex;
  align-items: center;
`
export const DivisionText = styled.p`
  color: ${({ theme }) => theme.colors.highlight};
  margin: 0 10px;
`
export const Line = styled.div`
  width: 152px;
  height: 0.5px;
  background-color: ${({ theme }) => theme.colors.highlight};
`

export const Separator = styled.div`
  height: 10px;
`

export const SeparatorMedium = styled.div`
  height: 20px;
`

export const SeparatorLarge = styled.div`
  height: 50px;
`

export const Image = styled.img``
