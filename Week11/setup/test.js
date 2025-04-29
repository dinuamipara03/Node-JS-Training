//Repeating Setup
beforeEach(() => console.log('connection setup'));
beforeEach(() => console.log('database setup'));

afterEach(() => console.log('database teardown'));
afterEach(() => console.log('connection teardown'));

test('test 1', () => console.log('test 1'));

describe('extra', () => {
  beforeEach(() => console.log('extra database setup'));
  afterEach(() => console.log('extra database teardown'));

  test('test 2', () => console.log('test 2'));
});

//Onetime Setup
beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});


//Order of Execution
describe('describe outer', () => {
    console.log('describe outer-a');
  
    describe('describe inner 1', () => {
      console.log('describe inner 1');
  
      test('test 1', () => console.log('test 1'));
    });
  
    console.log('describe outer-b');
  
    test('test 2', () => console.log('test 2'));
  
    describe('describe inner 2', () => {
      console.log('describe inner 2');
  
      test('test 3', () => console.log('test 3'));
    });
  
    console.log('describe outer-c');
  });
