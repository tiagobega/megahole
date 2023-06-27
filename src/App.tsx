import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import "./App.scss";

import { GameState } from "./gameLogic/logic.ts";

function App() {
  const [game, setGame] = useState<GameState>();

  useEffect(() => {
    Rune.initClient({
      onChange: ({ newGame }) => {
        setGame(newGame);
      },
    });
  }, []);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <Canvas>
      <perspectiveCamera fov={10} />
      <axesHelper />
      <OrbitControls />
      <mesh position={[0, 0, 0]}>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
}

export default App;
