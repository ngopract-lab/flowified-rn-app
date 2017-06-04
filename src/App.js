// @flow
import React from 'react';
import { View, Text } from 'react-native';

import type { todosType } from './types';

const Todo = ({ task }: { task: string }) => (
  <Text>
    { task }
  </Text>
);

const Todos = ({ todos }: { todos: todosType }) => (
  <View>
    <Text>JUST A TODO</Text>
    <View>
      { todos.map(todo => <Todo key={todo.id} {...todo} />) }
    </View>
  </View>
);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, task: 'makan' },
        { id: 2, task: 'minum' },
        { id: 3, task: 'mandi' },
      ],
    };
  }

  state: {
    todos: todosType,
  }

  props: {
    title: string,
  }

  render() {
    const { todos } = this.state;
    const { title } = this.props;
    return (
      <View>
        <Text>{title}</Text>
        <Todos todos={todos} />
      </View>
    );
  }
}
