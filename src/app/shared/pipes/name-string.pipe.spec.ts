import { NameStringPipe } from './name-string.pipe';

describe('NameStringPipe', () => {
  it('create an instance', () => {
    const pipe = new NameStringPipe();
    expect(pipe).toBeTruthy();
  });
});
