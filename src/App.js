import React from 'react';
import PageWrapper from './Components/Layout/PageWrapper';
import Input from './Components/InputZone/Input';
import Item from './Components/List/Item';
import ListItem from './Components/List';

export default function App() {
  return (
    <PageWrapper>
      <Input />
      <ListItem>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 0, 1, 4].map(i => <Item />)
        }
      </ListItem>
    </PageWrapper>
  );
}
