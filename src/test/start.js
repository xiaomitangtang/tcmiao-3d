import { WEBGL } from 'three/examples/jsm/WebGL.js';
import webgl1 from './webgl1'
import webgl2 from './webgl2'

const render = () => {
  if (WEBGL.isWebGL2Available()) {
    webgl2()
  } else {
    console.log(`
    浏览器不支持 WebGL2
    将尝试 WebGL1
    `);

  }
  if (WEBGL.isWebGLAvailable()) {
    webgl1()
  } else {
    var warning = WEBGL.getWebGLErrorMessage();
    document.body.appendChild(warning);
  }

}

export default render