<script>
  import { T, useFrame, OrbitControls } from '@threlte/core'
  import { DirectionalLight, Group, RectAreaLight } from 'three';
  import { degToRad } from 'three/src/math/MathUtils'
  import { DEG2RAD } from 'three/src/math/MathUtils'

  import { GLTF, Float, ContactShadows, Environment, HTML, Text } from '@threlte/extras';
  let camera

  useFrame((e) => {})
</script>

<Float rotationIntensity={0.4}>
  <T.RectAreaLight
    color="#ffffff"
    intensity={65}
    width={2.5}
    height={1.65}
    position={[0, 0.55, -1.15]}
    rotation={[0.1, Math.PI, 0]}
  />
  <GLTF
    url="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
    interactive
    on:click={() => {
      console.log('User clicked!')
    }}
    position={{ y: -1.2 }}
    useDraco
  >
    <HTML transform distanceFactor={1.17} position={{ x: 0, y: 1.56, z: -1.4 }} rotation={{x: -0.256}}> 
      <div class="htmlScreen">
        <iframe src="https://stefanreifenberg.com/portfolio/" />
      </div>
    </HTML>
  </GLTF>
  <Text
    font="./bangers-v20-latin-regular.woff"
    fontSize={0.9}
    position={{x:2,  y: 0.75, z: 0.75 }}
    rotation={{x: 0, y: -1.25, z: 0}}
    text="STEFAN REIFENBERG"
    maxWidth={2}
    textAlign="center"
  />
</Float>

<ContactShadows scale={5} blur={2.4} far={2.5} opacity={0.4} position={{ y: -1.4 }}/>
 
<Environment path="/hdr/" files="potsdamer_platz_1k.hdr" isBackground={false}/>


 <T.PerspectiveCamera makeDefault near={0.1} far={1000} zoom={1} position={[-4, 4, 4]}>
     <OrbitControls 
          enableDamping
          maxPolarAngle={1}
          minPolarAngle={0}
          maxAzimuthAngle={0.75}
          minAzimuthAngle={-0.75}
         enableZoom={true}
          target={{ y: 0.5 }}
          
           />
 </T.PerspectiveCamera>
<!-- 
 <T.GridHelper args={[100, 100]} /> -->
 
 <T.DirectionalLight position={[1,2, 3]} intensity={1.5} />
 <T.AmbientLight intensity={0.5} />

<style>
  .htmlScreen iframe{
    width: 1024px;
    height: 670px;
    border: none;
    border-radius: 20px;
    background: #000000;
  }
</style>