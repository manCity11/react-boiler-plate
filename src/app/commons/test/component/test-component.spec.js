import React from 'react';
import {shallow} from 'enzyme';
import {MockFactory} from 'MOCKS';
import {TestComponent, __Rewire__} from './test-component';


describe('Testing', () => {
  let TestService;

  beforeEach(() => {
    ({TestService} = MockFactory);

    __Rewire__('TestService', TestService);
  });


  describe('mounting', () => {
    it('should mount', done => {
      const message = 'dummy';
      TestService.fetchDummy.returns(Promise.resolve(message));
      const wrapper = shallow(<TestComponent/>);

      Promise.resolve(wrapper)
        .then(() => {
          expect(wrapper.state().message).to.equal(message);
          done();
        });
    });
  });
});
