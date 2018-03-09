import React from 'react';
import ArticleList from '../ArticleList';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });


// import { configure,shallow } from 'enzyme';
// configure({ adapter: new Adapter() });

describe('ArticleList', () => {
  const testProps = {
    articles:{
      a:{id: 'a'},
      b:{id: 'b'},
    },
  };

  it('renders correctly', () => {
      const wrapper = shallow(
          <ArticleList
              {...testProps}
          />
      );
      expect(wrapper.find('ArticleContainer').length).toBe(2);

      expect(wrapper).toMatchSnapshot();
  });
});




// import Article from '../Article';


// Article.propTypes = {};


// import renderer from 'react-test-renderer';



// store:{
//     lookupAuthor: jest.fn(()=>({}))
// }



// const tree = renderer.create(
//   <ArticleList
//     {...testProps }
//   />
// ).toJSON();

// expect(tree.c hildren.length).toBe(2);
// expect(tree).toMatchSnapshot();

