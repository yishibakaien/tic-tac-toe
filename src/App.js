import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Game from './game/Game';
import ShopCart from './shop/shopCart';

const App = ({ todos, actions }) => (
  <div>
    <Header addTodo={actions.addTodo} />
    <MainSection todos={todos} actions={actions} />
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
