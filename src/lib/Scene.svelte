<script>
  import { T, OrbitControls } from '@threlte/core'
  import { GLTF, Float, ContactShadows, Environment, HTML, Text } from '@threlte/extras';

  import { tweened } from 'svelte/motion';
  import { cubicInOut } from 'svelte/easing';

  let on = false


  let cameraX = tweened(-4, {
		duration: 2000,
        easing: cubicInOut
	});

  let cameraY = tweened(4, {
		duration: 2000,
        easing: cubicInOut
	});

  let cameraZ = tweened(4, {
		duration: 2000,
        easing: cubicInOut
	});
</script>

<Float rotationIntensity={0.4}>
  {#if on}
    <T.RectAreaLight
      color="#ffffff"
      intensity={65}
      width={2.5}
      height={1.65}
      position={[0, 0.55, -1.15]}
      rotation={[0.1, Math.PI, 0]}
    />
  {/if}
  <GLTF
    url="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
    position={{ y: -1.2 }}
    useDraco
    interactive
    on:click={() => {
      on = !on
    }}
  >
  {#if on}
    <HTML transform distanceFactor={1.17} position={{ x: 0, y: 1.56, z: -1.4 }} rotation={{x: -0.256}}
    >
      <div class="htmlScreen" on:pointerenter={() => {
        console.log('hover!')
        $cameraX = 0;
        $cameraY = 0;
        $cameraZ = 2.8;
      }}
      on:pointerleave={() => {
        console.log('User clicked!')
        $cameraZ = 4;
        $cameraY = 4;
        $cameraX = -4;
      }}>
        <iframe src="https://stefanreifenberg.com/portfolio/" />
      </div>
    </HTML>
    {/if}
  </GLTF>

  <Text
    font="./bangers-v20-latin-regular.woff"
    fontSize={0.7}
    position={{x:2,  y: 0.75, z: 0.75 }}
    rotation={{x: 0, y: -1.25, z: 0}}
    text="STEFAN REIFENBERG"
    maxWidth={2}
    textAlign="center"
  />
</Float>

<ContactShadows scale={5} blur={2.4} far={2.5} opacity={0.4} position={{ y: -1.4 }}/>
 
<Environment path="/hdr/" files="potsdamer_platz_1k.hdr" isBackground={false}/>

 <T.PerspectiveCamera makeDefault near={0.1} far={1000} zoom={1} position={[$cameraX, $cameraY, $cameraZ]}>
     <OrbitControls 
          enableDamping
          maxPolarAngle={1}
          minPolarAngle={0}
          maxAzimuthAngle={0.75}
          minAzimuthAngle={-0.75}
          enableZoom={false}
          target={{ y: 0.5 }}
           />
 </T.PerspectiveCamera>

<style>
  .htmlScreen iframe{
    width: 1024px;
    height: 670px;
    border: none;
    border-radius: 20px;
    background: #000000;
  }
</style>