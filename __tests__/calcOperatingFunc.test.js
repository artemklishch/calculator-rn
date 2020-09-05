import { calcOperatingFunc } from "../calcFuncs/calcOperatingFunc";

describe("should check calculating", () => {
  it("should check sum of integer numbers", () => {
    const result = calcOperatingFunc(2, "+", 6);
    expect(result).toEqual(8);
  });
  it("should check sum of no integer numbers", () => {
    const result = calcOperatingFunc(2.2, "+", 0.1);
    expect(result).toEqual(2.3);
  });

  it("should check difference of integer numbers", () => {
    const result = calcOperatingFunc(6, "-", 2);
    expect(result).toEqual(4);
  });
  it("should check difference of no integer numbers", () => {
    const result = calcOperatingFunc(2.3, "-", 0.1);
    expect(result).toEqual(2.2);
  });

  it("should check multiplying of integer numbers", () => {
    const result = calcOperatingFunc(2, "x", 6);
    expect(result).toEqual(12);
  });
  it("should check multiplying of no integer numbers", () => {
    const result = calcOperatingFunc(2.2, "x", 0.1);
    expect(result).toEqual(0.22);
  });

  it("should check dividing of integer numbers", () => {
    const result = calcOperatingFunc(12, "\u00F7", 6);
    expect(result).toEqual(2);
  });
});
