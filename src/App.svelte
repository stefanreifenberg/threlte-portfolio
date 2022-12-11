<script>
  import { Canvas, InteractiveObject, OrbitControls, T } from '@threlte/core'
  import Scene from './lib/Scene.svelte'
</script>

<div class="canvas-wrapper">
  <Canvas>
    <Scene />
  </Canvas>
</div>


<style>
  .canvas-wrapper {
    position: fixed;
    top: 0;
    left:0;
    width: 100vw;
    height: 100vh;
  }

  :global(.canvas-wrapper canvas) {
    position: absolute;
  }


</style>
