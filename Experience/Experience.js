import * as THREE from "three";
import Camera from "./Camera";
import Sizes from "./Utils/Sizes";

class Experience {
  static instance;
  constructor(canvas) {
    console.log("faqih");
    if (Experience.instance) {
      return Experience.instance;
    }
    Experience.instance = this;
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.sizes = new Sizes();
    this.camera = new Camera();
  }
}

export default Experience;
