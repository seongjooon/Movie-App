import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from '../components/Main/Main';

configure({ adapter: new Adapter() });

describe('<Main />', () => {
  let wrapper;

  beforeEach(() => {
    const onLoad = jest.fn();
    const getNextPage = jest.fn();
    const movieList = [
      {
        poster_path: '/asdfoo3.jpg',
        title: 'Life of vaco',
        vote_average: 4,
        release_date: 2019 - 12 - 11,
        genre_ids: [1, 2, 5],
        overview: 'askdfja2qbnelvpaoisfkw'
      }
    ];
    const genreList = [];
    wrapper = shallow(
      <Main
        onLoad={onLoad}
        getNextPage={getNextPage}
        movieList={movieList}
        genreList={genreList}
      />
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain element', () => {
    expect(
      wrapper.contains(<div className="movie-title">Life of vaco</div>)
    ).toBe(true);
    expect(
      wrapper.contains(<p className="movie-overview">askdfja2qbnelvpaoisfkw</p>)
    ).toBe(true);
  });
});
