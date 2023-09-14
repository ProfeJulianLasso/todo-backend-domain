import { HelloWorld } from '../src';

describe('App', () => {
  it('should create the app', () => {
    const app = new HelloWorld();
    app.sayHello('test domain');
    expect(app).toBeTruthy();
  });
});
