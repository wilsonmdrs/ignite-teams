import { Header } from '@components/Header';
import * as S from './styles';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { EmptyList } from '@components/EmptyList';
import { Button } from '@components/Button';

export const Groups = () => {
  const [groups, setGroups] = useState<string[]>([])
  return (
    <S.Container>
        <Header />
        <Highlight title='Teams' subtitle='Play with your team' />
        <FlatList
          data={groups}
          keyExtractor={ item => item}
          renderItem={({ item }) => (
            <GroupCard title={item} />
          )}
          contentContainerStyle={groups.length === 0 && {flex:1}}
          ListEmptyComponent={() => <EmptyList message={'No Teams Added'} />}
        />
        <Button title='Create new team' type='SECONDARY' />
    </S.Container>
  );
}
