import React from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

import routes from './routes/index';
import Game from './game/Game';
import ShopCart from './shop/shopCart';

const App = () => <div />;

const mapStateToProps = state => ({
  product: state.ShopCart
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
