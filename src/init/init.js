Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1ODg5NjlmYy05ODQ1LTQzNTMtOWM0NS02Y2UzMjc4YzMxMDgiLCJpZCI6NDMzMywic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0MDUxOTE4Mn0.K2KfcIV1x5zhYeYaDLX59klD5JL20heQM0z6BiLKuSk';
var viewer = new Cesium.Viewer("cesiumContainer", {
    terrainProvider: Cesium.createWorldTerrain(),
    geocoder: true,
    homeButton: false,
    fullscreenButton: false,
    animation: false,
    timeline: false,
    navigationHelpButton: true,
    navigationInstructionsInitiallyVisible: false,
    creditContainer: "creditContainer"
});

export {
    viewer
}