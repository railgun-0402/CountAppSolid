import { Component, JSX } from "solid-js";

export const Button: Component<{
  text: string;
  action: JSX.EventHandler<HTMLButtonElement, MouseEvent>;
}> = (props) => {
  return (
    <button
      class="bg-indigo-700 font-semibold text-white py-2 px-4 mx-2 rounded"
      onClick={props.action}
    >
      {props.text}
    </button>
  );
};
