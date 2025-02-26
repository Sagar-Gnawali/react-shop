import React from "react";

type ContainerProps = {
  leftElement: React.ReactNode;
  rightElement: React.ReactNode;
};

export const Container = ({ leftElement, rightElement }: ContainerProps) => {
  return (
    <div className="container">
      <div className="container__left">
        <div>{leftElement}</div>
      </div>

      <div className="container__right">{rightElement}</div>
    </div>
  );
};
