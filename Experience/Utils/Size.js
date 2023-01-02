import React from 'react'

class Size {
	constructor() {
		this.width = window.innerWidth;
		this.height = window.innerHeight
		this.aspect = this.width/this.height
		this.pixelRatio = Math.min(window.devicePixelRatio, 2)
		window.addEventListener("resize", ()=> {
			this.width = window.innerWidth;
		this.height = window.innerHeight
		this.aspect = this.width/this.height
		})
	}
}

export default Size