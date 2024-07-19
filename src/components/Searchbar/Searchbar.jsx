import { Component } from 'react';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { FaSearch } from 'react-icons/fa';
import Notiflix from 'notiflix';

export class Searchbar extends Component {
  state = {
    searchImg: '',
  };

  handleSearchImage = event => {
    this.setState({ searchImg: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    const { searchImg } = this.state;
    event.preventDefault();
    if (searchImg.trim() === '') {
      Notiflix.Report.info('Fill in the search param!');
    }
    this.props.onSubmit(searchImg);
    this.setState({ searchImg: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <FaSearch />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>
          <SearchFormInput
            className="input"
            type="text"
            autoComplete="off"
            name="searchImg"
            value={this.state.searchImg}
            onChange={this.handleSearchImage}
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}
