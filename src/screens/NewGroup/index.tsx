import { Header } from '@components/Header'
import * as S from './styles'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
export function NewGroup() {
    return (
        <S.Container>
            <Header showBackButton />
            <S.Content>
                <S.Icon />
                <Highlight 
                    title='New Team'
                    subtitle='Create a new Team to add members'
                />
                <Input />
                <Button title='Create' />

            </S.Content>
        </S.Container>
    )
}