import React from "react";
import CounterApp from "./counter-app";
import CounterAppAdvanced from "./counter-app-advance";
import StrPrac from "./str-Prac";
import Todo from "./todo";

export default function page() {
  return(
  <>
    {/* <h2>String practice and useState practice</h2>
    <StrPrac />
    <br />
    <h2>Counter app</h2>
    <CounterApp />
    <br />
    <h2>Counter App Advanced</h2>
    <CounterAppAdvanced /> */}
    <Todo />
  </>
  );
}
