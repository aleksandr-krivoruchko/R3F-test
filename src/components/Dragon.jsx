import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Dragon(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Dragon.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Flying_Idle"].reset().fadeIn(0.5).play();

    return () => actions["Flying_Idle"].fadeOut(0.5);
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />
          <group name="Dragon_Fly">
            <skinnedMesh
              name="Cube222"
              geometry={nodes.Cube222.geometry}
              material={materials.Dragon_Main}
              skeleton={nodes.Cube222.skeleton}
            />
            <skinnedMesh
              name="Cube222_1"
              geometry={nodes.Cube222_1.geometry}
              material={materials.Dragon_Secondary}
              skeleton={nodes.Cube222_1.skeleton}
            />
            <skinnedMesh
              name="Cube222_2"
              geometry={nodes.Cube222_2.geometry}
              material={materials.Dragon_Horn}
              skeleton={nodes.Cube222_2.skeleton}
            />
            <skinnedMesh
              name="Cube222_3"
              geometry={nodes.Cube222_3.geometry}
              material={materials.Eye_Black}
              skeleton={nodes.Cube222_3.skeleton}
            />
            <skinnedMesh
              name="Cube222_4"
              geometry={nodes.Cube222_4.geometry}
              material={materials.Eye_White}
              skeleton={nodes.Cube222_4.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Dragon.gltf");
