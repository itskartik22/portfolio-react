import { MainComponent } from "./components";
import { motion } from "framer-motion";
import { useRef } from "react";
import useFollowPointer from "./components/use-follow-pointer";

function App() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return (
    <div className="App max-w-screen">
      {/* <motion.div
        ref={ref}
        className="w-10 h-10 rounded-full bg-white/50"
        animate={{ x, y }}
        transition={{
          // type: "spring",
          damping: 5,
          // stiffness: 50,
          // restDelta: 0.001
        }}
      /> */}
      <MainComponent />
    </div>
  );
}

export default App;
