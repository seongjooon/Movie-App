import React from 'react';
import { shallow, configure } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App';
import Main from '../components/Main/Main';
import Detail from '../components/Detail/Detail';

configure({ adapter: new Adapter() });

describe('Components', () => {
  describe('should be sent according to the route', () => {
    it('/', () => {
      const wrapper = shallow(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
      expect(wrapper.find(Main)).toHaveLength(0);
      expect(wrapper.find(Detail)).toHaveLength(0);
    });
  });
});
