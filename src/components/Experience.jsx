import {
  Environment,
  MeshPortalMaterial,
  OrbitControls,
  RoundedBox,
  Text,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { Dragon } from "./Dragon";
import { useState } from "react";

export const Experience = () => {
  const [show, setShow] = useState(false);
  const map = useTexture("textures/surreal.jpg");

  return (
    <>
      <OrbitControls />
      <Text
        color="#92502c"
        font="fonts/Caprasimo-Regular.ttf"
        fontSize={0.3}
        position={[0, -1.3, 0.005]}
        anchorY={"bottom"}>
        Dragon
      </Text>
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <RoundedBox args={[3, 3, 0.1]} onDoubleClick={() => setShow(!show)}>
        <planeGeometry args={[2, 3]} />
        <MeshPortalMaterial side={THREE.DoubleSide} blend={show ? 1 : 0}>
          <ambientLight intensity={0.5} />
          <Environment preset="city" />
          <Dragon scale={0.4} position-y={-1} />
          <mesh>
            <sphereGeometry args={[5, 64, 64]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </>
  );
};
