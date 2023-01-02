import Experience from "./Experience";

class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    console.log("camera", this.experience, this.sizes, this.scene, this.canvas);
  }
}
export default Camera;
