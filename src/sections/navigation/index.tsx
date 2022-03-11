import * as S from './styled'
import { Logo } from '@/components'

export const Navigation: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Navigation>
        <Logo text='Logo' />
      </S.Navigation>
    </S.Wrapper>
  )
}
