import * as S from './styled'
import { Navigation } from '@/sections'

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <S.Container>
      <Navigation />
      {children}
    </S.Container>
  )
}
