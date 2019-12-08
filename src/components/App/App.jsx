import React, { Component } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import getItems from '../../services/api';
import Gallery from '../Gallery/Gallery';
import style from './App.module.css';

export default class App extends Component {
  state = {
    query: '',
    page: 1,
    items: [],
    error: null,
  };

  componentDidMount() {
    const { query, page } = this.state;
    getItems(query, page).then(({ data }) =>
      this.setState({ items: data.hits }),
    );
  }

  fetchItems = (query, page, items) => {
    getItems(query, page)
      .then(({ data }) =>
        this.setState({
          items: [...items, ...data.hits],
          query,
          page,
        }),
      )
      .catch(error => this.setState({ error }));
  };

  onScroll = () => {
    window.scrollTo(0, 1000);
  };

  onSubmit = value => {
    this.setState({ query: value });
    this.fetchItems(value, 1, []);
  };

  onLoadMore = () => {
    const { query, page, items } = this.state;
    this.fetchItems(query, page + 1, items);
    this.onScroll();
  };

  render() {
    const { items, error } = this.state;
    return (
      <div className={style.wrapper}>
        <SearchForm onSubmit={this.onSubmit} />
        {error && <p>Woops, something went wrong: {error.message}</p>}
        {!!items.length && (
          <Gallery posts={items} onLoadMore={this.onLoadMore} />
        )}
      </div>
    );
  }
}
