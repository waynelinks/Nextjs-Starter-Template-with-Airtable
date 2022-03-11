import * as S from './styled'

type LogoProps = {
  text: string
}

export const Logo: React.FC<LogoProps> = ({ text }) => (
  <S.Wrapper>
    <S.H1>{text}</S.H1>
  </S.Wrapper>
)
