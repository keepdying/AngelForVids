const { PlatformIds } = require("./constants");
const { createNetflixAgent } = require("./agents/netflixAgent");

function detectPlatform() {
  if (window.hasOwnProperty("netflix")) {
    return PlatformIds.NETFLIX;     
  }
  
  return null;
}

function getAgent(platformId) {
  switch(platformId) {
    case PlatformIds.NETFLIX:
      return createNetflixAgent();  
    default:
      throw new Error("No agent found");
  }
}

const platform = detectPlatform();
const agent = getAgent(platformId);

// let lastSceneTimestamp = 0;
// function checkForScenes() {
//   // TODO: Fetch scenes from database
//   // TODO: Compare currentTime
//   // TODO: Skip if behind
// }
// setInterval(checkForScenes, 100);

console.log(`Found platform: ${platform}`);
