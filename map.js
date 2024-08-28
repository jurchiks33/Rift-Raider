//map.js

class GameMap {
    constructor() {
      this.x = 0; // Start position for scrolling
      this.speed = 0;
      this.clouds = []; // Array to store clouds
  
      // Create multiple clouds with random positions and sizes
      for (let i = 0; i < 10; i++) {
        this.clouds.push(new Cloud(random(-800, 2000), random(50, 150), random(50, 100)));
      }
    }
  
    update() {
      this.x += this.speed;
      this.x = constrain(this.x, -3000, 0); // Add boundary limits for the scrolling
  
      // Update all clouds
      for (let cloud of this.clouds) {
        cloud.update();
      }
    }
  
    move(speed) {
      this.speed = speed;
    }
  
    display() {
      // Draw ground
      fill(34, 139, 34); // Forest green color for ground
      rect(this.x, height - 50, 4000, 50); // Ground stretches far off screen
  
      // Display all clouds
      for (let cloud of this.clouds) {
        cloud.display(this.x);
      }
  
      // Draw mountains
      fill(169, 169, 169); // Dark gray color for mountains
      triangle(this.x + 300, height - 50, this.x + 500, height - 300, this.x + 700, height - 50);
      triangle(this.x + 800, height - 50, this.x + 1000, height - 250, this.x + 1200, height - 50);
  
      // Draw trees
      fill(139, 69, 19); // Brown for tree trunks
      rect(this.x + 150, height - 120, 20, 70); // Trunk
      fill(34, 139, 34); // Green for tree leaves
      ellipse(this.x + 160, height - 150, 60, 60); // Leaves
  
      rect(this.x + 900, height - 120, 20, 70);
      ellipse(this.x + 910, height - 150, 60, 60);
  
      // Draw canyons
      fill(139, 69, 19); // Brown for canyons
      rect(this.x + 1400, height - 50, 100, 50);
      rect(this.x + 2400, height - 50, 80, 50);
    }
  }
  
  class Cloud {
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.speed = random(0.5, 1.5); // Random speed for each cloud
      this.sizeChangeSpeed = random(0.001, 0.003); // Slow, subtle size change
      this.noiseOffset = random(1000); // Larger offset to prevent patterns
    }
  
    update() {
      this.x -= this.speed; // Move cloud to the left
  
      // Smooth size change using Perlin noise, very small amplitude change
      let noiseValue = noise(this.noiseOffset);
      this.size += map(noiseValue, 0, 1, -0.1, 0.1); // Subtle size variation
  
      // Smooth vertical movement using Perlin noise
      this.y += map(noise(this.noiseOffset + 500), 0, 1, -0.2, 0.2); // Very small range for movement
  
      this.noiseOffset += 0.001; // Very slow increment for Perlin noise
  
      // Reset cloud when it moves off screen
      if (this.x < -200) {
        this.x = random(width, width + 800);
        this.y = random(50, 150);
        this.size = random(50, 100);
        this.speed = random(0.5, 1.5);
        this.noiseOffset = random(1000);
      }
    }
  
    display(offset) {
      fill(255, 255, 255, 200); // Soft white with transparency
      noStroke();
  
      // Draw a more complex cloud using multiple ellipses for a fluffy look
      for (let i = 0; i < 5; i++) {
        // Randomized positions around the main cloud center
        let xOffset = random(-this.size * 0.5, this.size * 0.5);
        let yOffset = random(-this.size * 0.3, this.size * 0.3);
        let cloudSize = random(this.size * 0.7, this.size * 1.2);
  
        // Varying fill for more depth (subtle color variations)
        let cloudColor = color(255, random(230, 255), random(230, 255), 180 + random(-20, 20));
        fill(cloudColor);
        ellipse(this.x + offset + xOffset, this.y + yOffset, cloudSize, cloudSize * 0.6);
      }
    }
  }
  
  