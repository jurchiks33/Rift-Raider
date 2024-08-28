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
      this.sizeChange = random(0.01, 0.03); // Random size change factor
    }
  
    update() {
      this.x -= this.speed; // Move cloud to the left
      this.size += sin(frameCount * this.sizeChange); // Change size over time
  
      // Reset cloud when it moves off screen
      if (this.x < -200) {
        this.x = random(width, width + 800);
        this.y = random(50, 150);
        this.size = random(50, 100);
        this.speed = random(0.5, 1.5);
      }
    }
  
    display(offset) {
      fill(255, 255, 255, 200); // White with slight transparency for a soft look
      noStroke();
  
      // Draw cloud with multiple overlapping ellipses
      ellipse(this.x + offset, this.y, this.size, this.size * 0.6);
      ellipse(this.x + offset + this.size * 0.4, this.y - this.size * 0.2, this.size * 0.8, this.size * 0.5);
      ellipse(this.x + offset - this.size * 0.4, this.y - this.size * 0.2, this.size * 0.8, this.size * 0.5);
      ellipse(this.x + offset - this.size * 0.9, this.y - this.size * 0.2, this.size * 0.8, this.size * 0.5);
    }
  }
  