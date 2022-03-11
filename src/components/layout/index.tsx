import * as S from './styled'

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  )
}
