import * as React from "react";
import {
  VerticalButton,
  HorizontalButton,
  IconOnlyButton,
  LabelButton,
} from "./components";
import { ActionButton, IActionButtonProps } from "./interfaces";
import { createButtonStyle } from "./styles";

export interface IButtonControlProps {
  buttons: ActionButton[];
  buttonType: string;
  isFormDisabled: boolean;
  onButtonClicked: (key: string) => void;
}

const ButtonControl = ({
  buttons,
  buttonType,
  isFormDisabled,
  onButtonClicked,
}: IButtonControlProps) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "start",
      }}
    >
      {buttons.map((button) => {
        const props: IActionButtonProps = {
          button: button,
          styling: createButtonStyle(button),
          isFormDisabled: isFormDisabled,
          onClicked: () => onButtonClicked(button.key),
        };

        switch (buttonType) {
          case "Vertical With Icon":
            return <VerticalButton key={button.key} {...props} />;
          case "Horizontal With Icon":
            return <HorizontalButton key={button.key} {...props} />;
          case "Icon Only":
            return <IconOnlyButton key={button.key} {...props} />;
          default:
            return <LabelButton key={button.key} {...props} />;
        }
      })}
    </div>
  );
};

export default ButtonControl;
