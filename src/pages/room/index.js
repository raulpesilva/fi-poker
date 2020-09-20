import React, { useEffect, useState } from 'react'
import Button from '../../components/shared/button'
import CardColumn from '../../components/cardColumn'
import useModal from '../../hook/useModal'
import { useParams } from 'react-router-dom'
import * as Styled from './styles'
const Room = () => {
  const [teste, setTest] = useState('')
  const { sendMessage } = useModal()
  let { id } = useParams()
  useEffect(() => {
    console.log(id)
  }, [id])
  const handleCLick = () => {
    sendMessage({ type: 'default' })
  }

  const handleOpenRoom = () => {
    sendMessage({
      type: 'voting',
      title: 'tests',
      description: 'asdl jflasdjf lasjdklafjs ljafslçdfj lasjdfl jasdlfjals jd',
    })
  }
  return (
    <>
      <Button onClick={handleCLick}>Entrar</Button>
      <Styled.Main>
        <CardColumn></CardColumn>
      </Styled.Main>
    </>
  )
}

export default Room
