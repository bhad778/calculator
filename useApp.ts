import { useCallback, useState } from "react";

const primary = "#000000";
const secondary = "#fea00a";
const light = "#a5a5a5";
const dark = "#333333";
const white = "#ffffff";

const useApp = () => {
  const [value, setValue] = useState("0");
  const [selectedButton, setSelectedButton] = useState("");

  const numberWithCommas = (x: string) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const onAcSelect = useCallback(() => {
    setValue("0");
  }, []);

  const onOperatorSelect = useCallback((selectedButton: string) => {
    setSelectedButton(selectedButton);
  }, []);

  const onNumberSelect = useCallback(
    (numberPressed: string) => {
      const newValue = value === "0" ? numberPressed : value + numberPressed;

      setValue(newValue);
    },
    [value]
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
      action: onOperatorSelect,
    },
    percent: {
      text: "%",
      buttonColor: light,
      textColor: primary,
      isBig: false,
      action: onOperatorSelect,
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
      action: onOperatorSelect,
    },
  };

  return {
    value,
    selectedButton,
    ButtonConfig,
  };
};

export default useApp;
