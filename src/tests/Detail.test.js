import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Detail from '../components/Detail/Detail';

configure({ adapter: new Adapter() });

describe('<Detail />', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      match: {
        params: {
          movie_id: 123
        }
      },
      getMovieDetail: jest.fn(),
      genreList: ['Horor', 'Comic', 'Action'],
      movieDetail: {
        poster_path: '/asdfoo3.jpg',
        title: 'Life of vaco',
        vote_average: 4,
        release_date: 2019 - 12 - 11,
        genre_ids: [1, 2, 5],
        overview: 'askdfja2qbnelvpaoisfkw'
      },
      movieActorList: [
        {
          character: 'Augusto',
          credit_id: '5aa327c20e0a26075700097b',
          name: 'Felipe Camargo'
        },
        {
          character: 'Tereza',
          credit_id: '5aa327b2925141278d000773',
          name: 'Carol Castro'
        }
      ]
    };

    wrapper = shallow(<Detail {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain element', () => {
    expect(
      wrapper.contains(<div className="movie-detail-title">Life of vaco</div>)
    ).toBe(true);
    expect(
      wrapper.contains(<div className="actor-name">Felipe Camargo</div>)
    ).toBe(true);
    expect(
      wrapper.contains(<div className="actor-character">Tereza</div>)
    ).toBe(true);
  });
});
