import { useCallback, useState } from "react";

const primary = "#000000";
const secondary = "#fea00a";
const light = "#a5a5a5";
const dark = "#333333";
const white = "#ffffff";

const useApp = () => {
  const [value, setValue] = useState("0");
  const [secondValueForCalculation, setSecondValueForCalculation] = useState<string | null>(null);
  const [selectedButton, setSelectedButton] = useState("");
  const [mostRecentSelectedButton, setMostRecentSelectedButton] = useState("");
  const [mostRecentSecondValue, setMostRecentSecondValue] = useState("");

  const formatNumber = useCallback((x: string) => {
    return Number(x).toLocaleString(undefined);
  }, []);

  const removeCommas = useCallback((x: string | null) => {
    if (x != null) {
      return x.replace(/,/g, "");
    }
  }, []);

  const onNumberSelect = useCallback(
    (numberPressed: string) => {
      if (selectedButton) {
        if (numberPressed === "." && secondValueForCalculation?.indexOf(".") != -1 && secondValueForCalculation != null) {
          return;
        }
        let newValue = secondValueForCalculation === null ? numberPressed : removeCommas(secondValueForCalculation) + numberPressed;

        if (newValue === ".") {
          newValue = "0.";
        }

        // if you input decimal when value is 0 do not format number
        // if you input decimal say, 55 then decimal do not format number
        if (
          !(newValue != "0" && formatNumber(newValue) === "0") &&
          !(newValue.indexOf(".") != -1 && formatNumber(newValue).indexOf(".") === -1)
        ) {
          newValue = formatNumber(newValue);
        }

        // do not remove commas when adding decimal
        if (numberPressed === ".") {
          newValue = formatNumber(newValue) + ".";
        }

        setSecondValueForCalculation(newValue);
        setMostRecentSecondValue(newValue);
      } else if (value.length < 11) {
        let newValue = value === "0" ? numberPressed : removeCommas(value) + numberPressed;

        if (newValue === ".") {
          newValue = "0.";
        }

        if (numberPressed === "." && value.indexOf(".") != -1) {
          return;
        }

        // if you input decimal when value is 0 do not format number
        // if you input decimal say, 55 then decimal do not format number
        if (
          !(newValue != "0" && formatNumber(newValue) === "0") &&
          !(newValue.indexOf(".") != -1 && formatNumber(newValue).indexOf(".") === -1)
        ) {
          newValue = formatNumber(newValue);
        }

        // do not remove commas when adding decimal
        if (numberPressed === ".") {
          newValue = formatNumber(newValue) + ".";
        }

        setValue(newValue);
      }
    },
    [formatNumber, removeCommas, secondValueForCalculation, selectedButton, value],
  );

  const applyCorrectOperator = useCallback((firstValue: number, secondValue: number, selectedButton: string) => {
    switch (selectedButton) {
      case "multiply":
        return (firstValue * secondValue).toString();
      case "divide":
        return (firstValue / secondValue).toString();
      case "minus":
        return (firstValue - secondValue).toString();
      case "plus":
        return (firstValue + secondValue).toString();
      default:
        return "0";
    }
  }, []);

  const evaluateAnswer = useCallback(() => {
    if (value && mostRecentSecondValue) {
      setValue(prevValue => {
        let newValue = applyCorrectOperator(
          Number(removeCommas(prevValue)),
          Number(removeCommas(mostRecentSecondValue)),
          mostRecentSelectedButton,
        );
        if (!(newValue != "0" && formatNumber(newValue) === "0")) {
          newValue = formatNumber(newValue);
        }
        return newValue;
      });
    }
  }, [applyCorrectOperator, formatNumber, mostRecentSecondValue, mostRecentSelectedButton, removeCommas, value]);

  const onEqualsPress = useCallback(() => {
    setSecondValueForCalculation(null);
    evaluateAnswer();
    setSelectedButton("");
  }, [evaluateAnswer]);

  const onAcSelect = useCallback(() => {
    setValue("0");
    setSelectedButton("");
    setSecondValueForCalculation(null);
    setMostRecentSecondValue(formatNumber(""));
    setMostRecentSelectedButton(formatNumber(""));
  }, [formatNumber]);

  const onPlusMinusSelect = useCallback(() => {
    setValue(prevValue => (Number(prevValue) * -1).toString());
  }, []);

  const onPercentSelect = useCallback(() => {
    setValue(prevValue => (Number(prevValue) / 100).toString());
  }, []);

  const onOperatorSelect = useCallback(
    (selectedButton: string) => {
      if (secondValueForCalculation) {
        evaluateAnswer();
        setSecondValueForCalculation(null);
      }
      let selectedButtonText = "";
      switch (selectedButton) {
        case "X":
          selectedButtonText = "multiply";
          break;
        case "./.":
          selectedButtonText = "divide";
          break;
        case "-":
          selectedButtonText = "minus";
          break;
        case "+":
          selectedButtonText = "plus";
          break;
        default:
          break;
      }
      setSelectedButton(selectedButtonText);
      setMostRecentSelectedButton(selectedButtonText);
    },
    [evaluateAnswer, secondValueForCalculation],
  );

  const ButtonConfig = {
    ac: {
      text: "AC",
      buttonColor: light,
      textColor: primary,
      isBig: false,
      action: onAcSelect,
    },
    plusMinus: {
      text: "+/-",
      buttonColor: light,
      textColor: primary,
      isBig: false,
      action: onPlusMinusSelect,
    },
    percent: {
      text: "%",
      buttonColor: light,
      textColor: primary,
      isBig: false,
      action: onPercentSelect,
    },
    divide: {
      text: "./.",
      buttonColor: secondary,
      textColor: white,
      isBig: false,
      action: onOperatorSelect,
    },

    seven: {
      text: "7",
      buttonColor: dark,
      textColor: white,
      isBig: false,
      action: onNumberSelect,
    },
    eight: {
      text: "8",
      buttonColor: dark,
      textColor: white,
      isBig: false,
      action: onNumberSelect,
    },
    nine: {
      text: "9",
      buttonColor: dark,
      textColor: white,
      isBig: false,
      action: onNumberSelect,
    },
    multiply: {
      text: "X",
      buttonColor: secondary,
      textColor: white,
      isBig: false,
      action: onOperatorSelect,
    },

    four: {
      text: "4",
      buttonColor: dark,
      textColor: white,
      isBig: false,
      action: onNumberSelect,
    },
    five: {
      text: "5",
      buttonColor: dark,
      textColor: white,
      isBig: false,
      action: onNumberSelect,
    },
    six: {
      text: "6",
      buttonColor: dark,
      textColor: white,
      isBig: false,
      action: onNumberSelect,
    },
    minus: {
      text: "-",
      buttonColor: secondary,
      textColor: white,
      isBig: false,
      action: onOperatorSelect,
    },

    one: {
      text: "1",
      buttonColor: dark,
      textColor: white,
      isBig: false,
      action: onNumberSelect,
    },
    two: {
      text: "2",
      buttonColor: dark,
      textColor: white,
      isBig: false,
      action: onNumberSelect,
    },
    three: {
      text: "3",
      buttonColor: dark,
      textColor: white,
      isBig: false,
      action: onNumberSelect,
    },
    plus: {
      text: "+",
      buttonColor: secondary,
      textColor: white,
      isBig: false,
      action: onOperatorSelect,
    },

    zero: {
      text: "0",
      buttonColor: dark,
      textColor: white,
      isBig: true,
      action: onNumberSelect,
    },
    decimal: {
      text: ".",
      buttonColor: dark,
      textColor: white,
      isBig: false,
      action: onNumberSelect,
    },
    equals: {
      text: "=",
      buttonColor: secondary,
      textColor: white,
      isBig: false,
      action: onEqualsPress,
    },
  };

  return {
    value,
    secondValueForCalculation,
    selectedButton,
    ButtonConfig,
  };
};

export default useApp;
