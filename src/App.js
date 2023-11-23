import { Profiler } from "react";
import Parent from "./Parent";

export default function App() {
  const handleRender = (
    _id,
    phase,
    actualDuration,
    baseDuration
  ) => {
    console.log(
      'RERENDERING',
      phase,
      'ACTUAL',
      actualDuration,
      'BASE',
      baseDuration
    );
  }

  return (
    <Profiler id="Parent" onRender={handleRender}>
      <Parent/>
    </Profiler>
  );
}