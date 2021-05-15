import React from 'react';
import {View, Text, FlatList, ListRenderItem} from 'react-native';
import styled from 'styled-components/native';


type ListItem = {id: string, text: string}
type List = ListItem[]

const list: List = [
  {id: "1", text: "투수리스트를 만들꼬야!"},
  {id: "2", text: "투수리스트를 만들수 있을까..?"},
  {id: "3", text: "투수리스트를 어떻게든 만들자!"},
]

function App() {
  const renderItem: ListRenderItem<ListItem> = ({item}) => {
    return (
        <View>
          <Text>{item.text}</Text>
        </View>
    );
  };

  return (
    <Container>
      <TodoList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item: ListItem)  => item.id}
      />
    </Container>
  );
}

const TodoList = (styled.FlatList`
  width: 100%;
` as unknown) as typeof FlatList;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`

export default App;
