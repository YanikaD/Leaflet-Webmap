import React from 'react'
import { WMSTileLayer } from 'react-leaflet'

const TiffLayer = () => {
    var url_tif = "http://localhost:3872/geoserver/TestTif/wms";
    return (
        <>
            {/* <WMSTileLayer
                url='http://localhost:8080/geoserver/map50K/wms'
                layers='map50K:Changwat'
                format='image/png'
                transparent={true}
            /> */}
            <WMSTileLayer
                url={url_tif}
                layers='TestTif:DEM_elkhorn'
                format="image/png"
                transparent={true}
                version="1.1.0"
                attribution="GRAY_INDEX"
                onError={(error, tile) => {
                    console.log("Tile error:", error, tile);
                }}
            />
        </>
    )
}

export default TiffLayer
