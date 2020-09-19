import React from 'react'
import * as Styled from './styles'

const users = [
  {
    _id: '6ae00b30-cf03-4cfb-b36d-a413fdd24807',
    userName: 'Kaio',
  },
  {
    _id: '6ae00b30-cf03-4cfb-b36d-a413fdd24809',
    userName: 'gui',
  },
  {
    _id: '6ae00b30-cf03-4cfb-b36d-a413fdd24808',
    userName: 'raul',
  },
  {
    _id: '6ae00b30-cf03-4cfb-b36d-a413fdd24804',
    userName: 'dan',
  },
]

const colorDictionary = ['#0794FF', '#EB5151', '#51EBDB']

const UserList = () => {
  return (
    <Styled.Container>
      {users.map((user, index) => {
        return (
          <Styled.User key={user._id}>
            <Styled.initial color={colorDictionary[index % colorDictionary.length]}>
              {user.userName[0]}
            </Styled.initial>
            <Styled.Name>{user.userName}</Styled.Name>
          </Styled.User>
        )
      })}
    </Styled.Container>
  )
}

export default UserList
