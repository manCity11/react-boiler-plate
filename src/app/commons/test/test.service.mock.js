import {MockFactory} from 'MOCKS';

MockFactory.define('TestService', () => ({
  init: sinon.stub(),
  fetchDummy: sinon.stub()
}));
