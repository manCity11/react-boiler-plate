// for testing purpose
const TestMethod = () => ({
  init() {
    return 'test';
  },
  fetchDummy() {
    return Promise.resolve('test');
  }
});

export const TestServiceTest = TestMethod;
export const TestService = new TestMethod();
