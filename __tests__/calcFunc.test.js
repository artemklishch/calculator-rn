import { calcFunc } from "../calcFuncs/calcFunc";

describe("should check certain calculating moments", () => {
  it("should make all calc data to start", () => {
    const result = calcFunc(
      {
        string: "12",
        calc: [6, "+", 12],
        wasCalc: false,
        memNum: 0,
      },
      "AC"
    );
    expect(result).toEqual({
      string: "",
      calc: [0],
      wasCalc: false,
      memNum: 0,
    });
  });

  it("should stop calculating if '.' was pressed and pressed again", () => {
    const result = calcFunc(
      {
        string: "1.2",
        calc: [1.2],
        wasCalc: false,
        memNum: 0,
      },
      "."
    );
    expect(result).toEqual({
      string: "1.2",
      calc: [1.2],
      wasCalc: false,
      memNum: 0,
    });
  });

  it("should save or add number to memorized number if pressed 'm+'", () => {
    const result = calcFunc(
      {
        string: "1.2",
        calc: [1.2],
        wasCalc: false,
        memNum: 0,
      },
      "m+"
    );
    expect(result).toEqual({
      string: "1.2",
      calc: [1.2],
      wasCalc: false,
      memNum: 1.2,
    });
  });

  it("should reduce a memorized number if pressed 'm-'", () => {
    const result = calcFunc(
      {
        string: "12",
        calc: [12],
        wasCalc: false,
        memNum: 10,
      },
      "m-"
    );
    expect(result).toEqual({
      string: "12",
      calc: [12],
      wasCalc: false,
      memNum: -2,
    });
  });

  it("should clear a memorized number if pressed 'mc'", () => {
    const result = calcFunc(
      {
        string: "12",
        calc: [12],
        wasCalc: false,
        memNum: 10,
      },
      "mc"
    );
    expect(result).toEqual({
      string: "12",
      calc: [12],
      wasCalc: false,
      memNum: 0,
    });
  });

  it("should show a memorized number if pressed 'mr'", () => {
    const result = calcFunc(
      {
        string: "120",
        calc: [12, "*", 10],
        wasCalc: false,
        memNum: 30,
      },
      "mr"
    );
    expect(result).toEqual({
      string: "30",
      calc: [30],
      wasCalc: false,
      memNum: 30,
    });
  });

  it("should change plus-minus value if pressed '+/-'", () => {
    const result = calcFunc(
      {
        string: "120",
        calc: [120, "*", 10],
        wasCalc: false,
        memNum: 30,
      },
      "+/-"
    );
    expect(result).toEqual({
      string: "-120",
      calc: [-120, "*", 10],
      wasCalc: false,
      memNum: 30,
    });
  });

  it("should check correct work when pressed '.' but nothing was pressed before", () => {
    const result = calcFunc(
      {
        string: "",
        calc: [0],
        wasCalc: false,
        memNum: 0,
      },
      "."
    );
    expect(result).toEqual({
      string: "0.",
      calc: [0],
      wasCalc: false,
      memNum: 0,
    });
  });

  it("should check correct work when pressed '=' but nothing to calculate", () => {
    const result = calcFunc(
      {
        string: "",
        calc: [0],
        wasCalc: false,
        memNum: 0,
      },
      "="
    );
    expect(result).toEqual({
      string: "",
      calc: [0],
      wasCalc: false,
      memNum: 0,
    });
  });

  it("should check correct work when pressed something, except operator, memo buttons and '%'", () => {
    const result = calcFunc(
      {
        string: "",
        calc: [0],
        wasCalc: false,
        memNum: 0,
      },
      "2"
    );
    expect(result).toEqual({
      string: "2",
      calc: [2],
      wasCalc: false,
      memNum: 0,
    });
  });

  it("should check correct work when there is first value and pressed operator ", () => {
    const result = calcFunc(
      {
        string: "20",
        calc: [20],
        wasCalc: false,
        memNum: 0,
      },
      "+"
    );
    expect(result).toEqual({
      string: "20",
      calc: [20, "+"],
      wasCalc: true,
      memNum: 0,
    });
  });

  it("should check correct work when pressed '%' ", () => {
    const result = calcFunc(
      {
        string: "20",
        calc: [20, "*", 2],
        wasCalc: false,
        memNum: 0,
      },
      "%"
    );
    expect(result).toEqual({
      string: "0.2",
      calc: [0.2, "*", 2],
      wasCalc: false,
      memNum: 0,
    });
  });

  it("should check correct work when there are first value, chosen operator, and pressed something except operator and '.' ", () => {
    const result = calcFunc(
      {
        string: "20",
        calc: [20, "x"],
        wasCalc: true,
        memNum: 0,
      },
      "2"
    );
    expect(result).toEqual({
      string: "2",
      calc: [20, "x", 2],
      wasCalc: false,
      memNum: 0,
    });
  });

  it("should check correct work when there are first value, chosen operator, second value, and pressed something except memo button and operator and '=' ", () => {
    const result1 = calcFunc(
      {
        string: "4",
        calc: [2, "x", 4],
        wasCalc: false,
        memNum: 0,
      },
      "0"
    );
    const result2 = calcFunc(
      {
        string: "4",
        calc: [2, "x", 4],
        wasCalc: false,
        memNum: 0,
      },
      "."
    );
    const result3 = calcFunc(
      {
        string: "0",
        calc: [2, "x", 0],
        wasCalc: false,
        memNum: 0,
      },
      "2"
    );

    expect(result1).toEqual({
      string: "40",
      calc: [2, "x", 40],
      wasCalc: false,
      memNum: 0,
    });
    expect(result2).toEqual({
      string: "4.",
      calc: [2, "x", 4],
      wasCalc: false,
      memNum: 0,
    });
    expect(result3).toEqual({
      string: "2",
      calc: [2, "x", 2],
      wasCalc: false,
      memNum: 0,
    });
  });

  it("should check correct work when there are first value, chosen operator, second value, and pressed '=' ", () => {
    const result = calcFunc(
      {
        string: "2",
        calc: [20, "x", 2],
        wasCalc: false,
        memNum: 0,
      },
      "="
    );
    expect(result).toEqual({
      string: "40",
      calc: [40, "x", 2],
      wasCalc: false,
      memNum: 0,
    });
  });

  it("should check correct work when there are first value, chosen operator, second value, and pressed operator", () => {
    const result = calcFunc(
      {
        string: "2",
        calc: [20, "x", 2],
        wasCalc: false,
        memNum: 0,
      },
      "+"
    );
    expect(result).toEqual({
      string: "40",
      calc: [40, "+"],
      wasCalc: true,
      memNum: 0,
    });
  });
});
