# Side Shooter: Rift Raider

![Game Screenshot](link_to_screenshot.png) <!-- will come later -->

## Overview
**Rift Raider** is a level-based side-scrolling shooter game built with p5.js. 
In this action-packed adventure, players traverse a dynamic map filled with mountains, clouds, trees, and canyons. 
To progress through the levels, players must defeat enemy rifts that spawn waves of enemies. 
Collect upgrades along the way to enhance your abilities, which will carry over to future levels.

## Features
- **Dynamic Scrolling Map**: Explore diverse landscapes with obstacles and interactable elements.
- **Level Progression**: Advance through levels by defeating rifts and clearing enemy waves.
- **Upgrades and Power-ups**: Collect upgrades to enhance your character's abilities. Upgrades persist through levels.
- **Enemy Variety**: Face different types of enemies, each with unique behaviors and attack patterns.
- **Smooth Controls**: Navigate with precise and responsive controls, optimized for a seamless gaming experience.

## Getting Started

### Prerequisites
- **Node.js** (for optional local server setup)
- **p5.js** library (included via CDN in the project)

### Installation
1. **Clone the repository**:
    ```bash
    git clone https://github.com/jurchiks33/rift-raider.git
    cd rift-raider
    ```
2. **Run the game locally**:
    - Open `index.html` in your web browser, or
    - Run a local server (e.g., using VS Code Live Server or a simple HTTP server):
      ```bash
      npx http-server .
      ```
    - Open your browser and navigate to `http://localhost:8080` (or the port specified).

### How to Play
- **Move**: Use the arrow keys to navigate your character.
- **Shoot**: Press the spacebar to fire bullets at enemies.
- **Progress**: Defeat the rift to clear the level and advance to the next.
- **Collect Upgrades**: Enhance your abilities by picking up power-ups. Upgrades are retained when advancing to the next level.

## Game Design
### Levels
- Each level introduces new challenges, terrains, and enemy types.
- To progress, defeat the rift which spawns increasingly difficult enemies.

### Upgrades
- Power-ups will appear randomly throughout the map.
- Upgrades include speed boosts, increased fire rate, and enhanced bullet power.
- All upgrades persist to the next level, allowing continuous player progression.

### Enemies
- Enemies spawn from rifts, each type with unique behaviors (e.g., flying enemies, ground enemies).
- As you progress, enemy difficulty and variety increase.

## Roadmap
- [ ] **Level Design**: Introduce new terrains and environmental hazards.
- [ ] **Boss Fights**: Add challenging boss fights at the end of each level.
- [ ] **Additional Upgrades**: Expand the upgrade system with new abilities and enhancements.
- [ ] **Scoring System**: Implement a scoring and leaderboard system.
- [ ] **Sound Effects and Music**: Add immersive audio to enhance gameplay experience.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any suggestions or improvements.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Developed with [p5.js](https://p5js.org/).
- Inspired by classic side-scrolling shooters and platformers.

---

Happy gaming! 🚀
