import React, { useEffect, useState } from 'react'
import Button from '../../components/shared/button'
import Input from '../../components/shared/input'
import TextArea from '../../components/shared/textArea'
import CreatorButton from '../../components/creatorButton'
import CardCreator from '../../components/cardCreator'
<<<<<<< HEAD
import Card from '../../components/card'
import EditableCard from '../../components/editableCard'
import CardColumn from '../../components/cardColumn'
import * as Styled from './styles'
=======
import UserList from '../../components/UserList'
>>>>>>> b2253555b2f0cd39c27aa1ad69dec3f3886e0ab6

const Room = () => {
  const [teste, setTest] = useState('')

  useEffect(() => {
    console.log(teste)
  }, [teste])

  return (
    <>
<<<<<<< HEAD
      {/* <Button>Entrar</Button>
=======
      <Button>Entrar</Button>
>>>>>>> b2253555b2f0cd39c27aa1ad69dec3f3886e0ab6
      <Input placeholder="Teste"></Input>
      <CreatorButton editable={true} onCreate={setTest}>
        Criar tarefa
      </CreatorButton>
      <CreatorButton onClick={() => console.log('testeeewe')}>Criar tarefa</CreatorButton>
      <TextArea placeholder="teste"></TextArea>
<<<<<<< HEAD
      <CardCreator
        onCreate={data => console.log(data)}
        onCancel={() => console.log('testeasdasdew')}
      ></CardCreator>
      <Card
        title="teste"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna..."
      ></Card> */}
      <Styled.Main>
      <CardColumn></CardColumn>
      </Styled.Main>
=======
      <UserList />
      <CardCreator></CardCreator>
>>>>>>> b2253555b2f0cd39c27aa1ad69dec3f3886e0ab6
    </>
  )
}

export default Room
