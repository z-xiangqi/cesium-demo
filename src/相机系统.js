
//setView 直接切换视角
function cameraview(){

    viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(109.59, 23.10, 100000), //相机（眼睛）位置 不是地图位置
        orientation: {
            heading: Cesium.Math.toRadians(0.0), // 朝向
            pitch: Cesium.Math.toRadians(-90),  // 俯仰
            roll: 0.0              //滚转            
        }
    });
}
