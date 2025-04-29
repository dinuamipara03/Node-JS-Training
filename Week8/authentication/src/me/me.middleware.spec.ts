import { MeMiddleware } from './me.middleware';

describe('MeMiddleware', () => {
  it('should be defined', () => {
    expect(new MeMiddleware()).toBeDefined();
  });
});
