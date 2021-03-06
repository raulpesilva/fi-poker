import React from 'react'

import useGlobalState from '../../hook/useGlobalState'
import * as Styled from './styles'

const colorDictionary = [
  '#c3cec2',
  '#789DE1',
  '#6EA2A8',
  '#3AAADB',
  '#AC76EA',
  '#45549F',
  '#7EBF76',
  '#554866',
  '#FEB124',
]

const UserList = () => {
  const [users] = useGlobalState('users')
  return (
    <Styled.Container>
      {users?.map((user, index) => {
        return (
          <Styled.User key={user?._id ?? Math.round(Math.random() * 999).toString()}>
            <Styled.initial color={colorDictionary[index % colorDictionary.length]}>
              {user?.userName?.[0] ?? user?.name?.[0] ?? 'FI'}
            </Styled.initial>
            <Styled.Name>{user?.userName ?? user?.name}</Styled.Name>
          </Styled.User>
        )
      })}
    </Styled.Container>
  )
}

export default UserList
