import { useState } from 'react'

import * as S from './styled'
import { Logo, MenuIcon } from '@/components'

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.Navigation>
        <Logo text='Logo' />
        <MenuIcon show={isOpen} toggle={setIsOpen} />
      </S.Navigation>
    </S.Wrapper>
  )
}
