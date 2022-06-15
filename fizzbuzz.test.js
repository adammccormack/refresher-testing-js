  const fizzBuzz = require('./fizzBuzz');


  describe('fizzBuzz', () => {
    it('fizzbuzzes', () => {
      expect(fizzBuzz(3)).toBe('Fizz');
    })
  })