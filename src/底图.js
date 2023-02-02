//添加底图
function baseLayer() {

    // imageryProvider = new Cesium.UrlTemplateImageryProvider({
    //     url: " http://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
    //     minimumlevel: 1,
    //     maximumlevel: 18
    // })

    // viewer.terrainProvider = new Cesium.CesiumTerrainProvider({
    //     url: "../dem_切片"
    // })

    // var imaglyser = new Cesium.ImageryLayer(new Cesium.UrlTemplateImageryProvider({
    //     url: "http://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}",
    // }))
    Cesium.GeoJsonDataSource.load("../data/贵港乡镇.json", {
		//设置geojson样式
        stroke: Cesium.Color.WHITE,
        fill: Cesium.Color.fromRandom({ alpha: 0.0 }),
        strokeWidth: 3,
        markerSymbol: "?",
        camera: viewer.scene.camera,
        canvas: viewer.scene.canvas
      }).then(dataSource=>{
        dataSource.name = 'guigang';//设置数据name
        viewer.dataSources.add(dataSource)//添加数据
      })

    // viewer.imageryLayers.add(imaglyser)

    // //用于夸大地形的标量。默认为1.0（不夸张）。值2.0将地形缩放 2 倍。的值0.0使地形完全平坦。请注意，地形夸大不会修改任何其他图元，因为它们是相对于椭圆体定位的。
    // viewer.scene.globe.terrainExaggeration = 4;
    // //夸大地形的高度。默认为0.0（相对于椭球表面缩放）。高于此高度的地形将向上缩放，低于此高度的地形将向下缩放。请注意，地形夸大不会修改任何其他图元，因为它们是相对于椭圆体定位的。如果Globe#terrainExaggeration是1.0这个值将没有效果。
    // viewer.scene.globe.terrainExaggerationRelativeHeight = 1.0;

}
function shapeBaseLayer(){
    var imaglyser = new Cesium.ImageryLayer(new Cesium.UrlTemplateImageryProvider({
        url:"https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
        minimumlevel: 1,
        maximumlevel: 18
    }))
    viewer.imageryLayers.add(imaglyser)
    
    // Cesium.GeoJsonDataSource.load("../data/贵港乡镇.json", {
		// //设置geojson样式
    //     stroke: Cesium.Color.WHITE,
    //     fill: Cesium.Color.DARKCYAN.withAlpha(0.5),
    //     strokeWidth: 8,
    //     markerSymbol: "?",
    //     camera: viewer.scene.camera,
    //     canvas: viewer.scene.canvas
    //   }).then(function(dataSource){
    //     // dataSource.name = 'guigang';//设置数据name
    //     this.viewer.dataSources.add(dataSource)//添加数据
    //     let entities =dataSources.entities.values
    //     for (let i = 0; i < entities.length; i++) {
    //       let entity = entities[i];
    //       //entity.polygon.material = new Cesium.Color(204 / 255, 247 / 255, 217 / 255, 0.6);
    //       entity.polygon.outline = false;
    //       // 将高度拉伸至35米
    //       entity.polygon.extrudedHeight = 35;
    // }
    //   })

    //底图
    // Cesium.GeoJsonDataSource.load('../data/贵港乡镇.json',{
    //   stroke: Cesium.Color.WHITE,
    //   fill: Cesium.Color.LIGHTPINK.withAlpha(0.5),
    //   strokeWidth: 8,
    // }).then(function(dataSource) {
    //   this.viewer.dataSources.add(dataSource);
    //   let entities = dataSource.entities.values;
    //   for (let i = 0; i < entities.length; i++) {
    //       let entity = entities[i];
    //       //entity.polygon.material = new Cesium.Color(204 / 255, 247 / 255, 217 / 255, 0.6);
          // entity.polygon.outline = false;
          // // 将高度拉伸至xx米
          // entity.polygon.extrudedHeight = 2000;
    //   }
    // });
}