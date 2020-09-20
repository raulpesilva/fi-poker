import React, { useContext, createContext, useReducer, useMemo, useCallback } from 'react'
import Wrapper from './Wrapper'

const initialState = undefined

function reducer(state, action) {
  switch (action.type) {
    case 'set':
      return { ...action.payload }
    case 'clear':
      return undefined
    default:
      return state
  }
}
const Context = createContext()

const useModalContext = () => {
  const modalContext = useContext(Context)

  if (modalContext === undefined) {
    throw new Error(
      'não foi possível achar o objeto de Modal. seu componente está dentro de um Modal provider?'
    )
  }
  return modalContext
}

const useModal = () => {
  const [state, dispatch] = useModalContext()

  const sendMessage = useCallback(value => {
    dispatch({ type: 'set', payload: value })
  }, [])

  return { state, sendMessage }
}

export const withModal = component => modal => {
  const Component = component
  return rest => (
    <ModalProvider modal={modal}>
      <Component {...rest} />
    </ModalProvider>
  )
}

export const ModalProvider = ({ children, modals, style, applyTopPositionOffset }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleClose = e => {
    e.stopPropagation()
    dispatch({ type: 'clear' })
  }

  if (state && !modals) {
    console.warn(
      `Para seu componente seja mostrado na tela você deve passar ele como propriedade no ModalProvider.\n
       Provider Ex: \n<ModalProvider modal={SeuComponenteDeToast}>\n
       <Sua Tela/>\n
       </ModalProvider>\n
       heighOrderComponent Ex: \nexport default withModal(SuaTela)(SeuComponenteDeModal)
       `
    )
  }

  const Modal = modals?.[state?.type ?? 'default']
  const modalState = useMemo(() => (modals ? state : {}), [state, modals])

  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
      {state && (
        <Wrapper
          styles={style}
          close={handleClose}
          applyTopPositionOffset={state?.applyTopPositionOffset ?? applyTopPositionOffset}
        >
          {Modal && <Modal {...modalState} closeModal={handleClose} />}
        </Wrapper>
      )}
    </Context.Provider>
  )
}

export default useModal
