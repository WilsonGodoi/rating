import { OrderByFieldPipe } from "./order-by-field.pipe";

describe("OrderByFieldPipe", () => {
  it("create an instance", () => {
    const pipe = new OrderByFieldPipe();
    expect(pipe).toBeTruthy();
  });
});
