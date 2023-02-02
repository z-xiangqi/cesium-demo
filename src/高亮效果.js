function hightlightLine() {
    // var viewer = new Cesium.Viewer('cesiumContainer');
        
        var highlightedEntity;
        var highlightColor = Cesium.Color.RED.withAlpha(0.6);
        var normalColor = Cesium.Color.YELLOW.withAlpha(0.6);

        //一种属性，如果实体当前被鼠标悬停，则返回高亮显示颜色，否则返回默认颜色.
        function createCallback(entity) {
            var colorProperty = new Cesium.CallbackProperty(function (time, result) {
                if (highlightedEntity === entity) {
                    return Cesium.Color.clone(highlightColor, result);
                }
                return Cesium.Color.clone(normalColor, result);
            }, false);

            return new Cesium.ColorMaterialProperty(colorProperty);
        }

        //加载json路径	
        var promise = Cesium.GeoJsonDataSource.load('../data/贵港乡镇.json');// , {            clampToGround: true}
        viewer.dataSources.add(promise);
        //viewer.flyTo(promise);
        promise.then(function (dataSource) {
        viewer.dataSources.add(dataSource);

            //获取实体数组
            var entities = dataSource.entities.values;
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                entity.polygon.material = createCallback(entity);
                entity.polygon.outline = false;
                // 将高度拉伸至xx米
                entity.polygon.extrudedHeight = 2000;
            }
        })//.otherwise(function (error) {
            //显示加载时遇到的任何错误.
        //     window.alert(error);
        // });

        var scene = viewer.scene;
        var handler = viewer.screenSpaceEventHandler;
        handler.setInputAction(function (movement) {
            var pickedObject = scene.pick(movement.endPosition);
            if (Cesium.defined(pickedObject) && pickedObject.id instanceof Cesium.Entity) {
                highlightedEntity = pickedObject.id;
            } else {
                highlightedEntity = undefined;
            }

        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

}