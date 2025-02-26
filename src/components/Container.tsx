import React from "react";

type ContainerProps = {
  leftElement: React.ReactNode;
  rightElement: React.ReactNode;
};

export const Container = ({ leftElement, rightElement }: ContainerProps) => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1, overflowY: "auto" }}>
        <div>
          {rightElement}

          {/* <div style={{ padding: "20px" }}>{leftElement}</div> */}
        </div>
      </div>

      <div
        style={{
          width: "500px",
          borderLeft: "1px solid #ccc",
          overflowY: "auto",
          padding: "20px",
        }}
      >
        <div style={{ padding: "20px" }}>{leftElement}</div>

        {/* {rightElement} */}
      </div>
    </div>
  );
};
