import { Component, createSignal } from "solid-js";
import { Button } from "./components/Button";

const [count, setCount] = createSignal<number>(0);

const increments = () => {
  setCount((count) => count + 1);
};

const decrements = () => {
  setCount((count) => count - 1);
};

const App: Component = () => {
  return (
    <>
      <div class="bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl max-w-xl mx-auto mt-8">
        <h1 class="text-6xl text-center">Counter</h1>
        <div class="text-center my-5 text-9xl">{count()}</div>
        <div class="grid grid-flow-col justify-stretch">
          <Button text="-" action={decrements} />
          <Button text="+" action={increments} />
        </div>
      </div>
    </>
  );
};

export default App;
