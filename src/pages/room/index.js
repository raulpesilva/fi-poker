import React from 'react';
import Button from '../../components/shared/button';
import Input from '../../components/shared/input'
import CreatorButton from '../../components/creatorButton'

const Room = () => {
  return (
    <>
      <Button >Entrar</Button>
      <Input placeholder='Teste'></Input>
      <CreatorButton editable={true}>Criar tarefa</CreatorButton>
    </>
  );
};

export default Room;
