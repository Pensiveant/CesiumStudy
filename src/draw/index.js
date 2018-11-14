import "./style.css";
import {
    setting
} from "../config";

var viewer = setting.viewer;

//#region 立方体
var recBox = viewer.entities.add({
    name:"立方体",
    description:"绘制实体学习-立方体",
    position: Cesium.Cartesian3.fromDegrees(-103.0, 40.0),
    box: new Cesium.BoxGraphics({
        dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
        material: Cesium.Color.RED.withAlpha(0.6),
        outline: true,
        outlineColor: Cesium.Color.BLUE
    })
});
//#endregion

//#region 
//#endregion



//#region
var entity = viewer.entities.add({
    name:"椭圆",
    position: Cesium.Cartesian3.fromDegrees(-103.0, 40.0),
    ellipse: {
        semiMinorAxis: 250000.0,
        semiMajorAxis: 400000.0,
        material: Cesium.Color.BLUE.withAlpha(0.5)
    }
});
viewer.zoomTo(viewer.entities);

var ellipse = entity.ellipse; // For upcoming examples
//#endregion

viewer.zoomTo(wyoming);