import { AddStringPipe } from './add-string.pipe';

describe('AddStringPipe', () => {
  it('create an instance', () => {
    const pipe = new AddStringPipe();
    expect(pipe).toBeTruthy();
  });
});
