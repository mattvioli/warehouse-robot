// mocking like this is unfavourable, as it gives us less control for future uses, however, mocking user inputs in the CLI is hard
module.exports = {
  createInterface: jest.fn().mockReturnValue({
    question: jest
      .fn()
      .mockImplementationOnce((_questionTest, cb) => cb("N N W W")),
    close: jest.fn().mockImplementationOnce(() => undefined),
  }),
};
