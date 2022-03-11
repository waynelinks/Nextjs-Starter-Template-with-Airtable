import { Divide as Hamburger } from 'hamburger-react'

import * as S from './styled'

type MenuIconProps = {
  show: boolean
  toggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuIcon: React.FC<MenuIconProps> = ({ show, toggle }) => {
  return (
    <S.Container>
      <Hamburger
        size={30}
        rounded
        label='Show menu'
        hideOutline={true}
        toggled={show}
        toggle={toggle}
      />
    </S.Container>
  )
}
