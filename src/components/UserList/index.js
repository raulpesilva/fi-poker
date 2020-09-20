import React from 'react'

import useStorage from '../../hook/useStorage'
import * as Styled from './styles'

const colorDictionary = ['#0794FF', '#EB5151', '#51EBDB']

const UserList = () => {
  const [users] = useStorage('users')
  return (
    <Styled.Container>
      {users?.map((user, index) => {
        return (
          <Styled.User key={user._id}>
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
