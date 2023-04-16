import React, { useRef } from 'react'
import {
    MapContainer,
    LayersControl,
    LayerGroup
} from 'react-leaflet'

import BaseMap from './layers/BaseMap'
import 'bootstrap/dist/css/bootstrap.min.css';
import WMSLayer from './layers/WMSLayer.js'
import TiffLayer from './layers/Tiff';

const MapContent = () => {
    // javascript
    const mapRef = useRef()
    // const [data, setData] = useState({
    //     title: '',
    //     latitude: '',
    //     longitude: '',
    //     icon: '',
    //     size: ''
    // })

    // const onChangeData = (e) => {
    //     // console.log(e.target.name, e.target.value)
    //     setData((prevState) => ({
    //         ...prevState,
    //         [e.target.name]: e.target.value
    //     }))
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(data)
    // }

    // console.log('data', data)
    return (
        <div>
            <div className='row'>
                {/* <div className='col-10'> */}
                    <MapContainer
                        ref={mapRef}
                        style={{ width: '100%', height: '100vh' }}
                        center={[43.355, -110.953]}
                        zoom={12}
                    >
                        <LayersControl position='topright'>
                            {/* EP2 */}
                            <BaseMap />

                            <LayersControl.Overlay name="Apotheken" checked >
                                <LayerGroup>
                                    {/* EP19 */}
                                    <WMSLayer />
                                </LayerGroup>
                            </LayersControl.Overlay>

                            <LayersControl.Overlay name="DEM_elkhorn" checked >
                                <LayerGroup>
                                    {/* EP19 */}
                                    <TiffLayer />
                                </LayerGroup>
                            </LayersControl.Overlay>
                    </LayersControl>
                        
                    </MapContainer>
                {/* </div> */}
                {/* <div className='col-2'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>Title</label>
                            <input
                                onChange={onChangeData}
                                className='form-control'
                                name='title'
                                type='text' />
                        </div>
                        <div className='form-group'>
                            <label>latitude</label>
                            <input
                                className='form-control'
                                value={data.latitude}
                                name='latitude'
                                type='text' />
                        </div>
                        <div className='form-group'>
                            <label>longitude</label>
                            <input
                                className='form-control'
                                value={data.longitude}
                                name='longitude'
                                type='text' />
                        </div>
                        <div className='form-group'>
                            <label>icon</label>
                            <input
                                onChange={onChangeData}
                                className='form-control'
                                name='icon'
                                type='text' />
                        </div>
                        <div className='form-group'>
                            <label>size</label>
                            <input
                                onChange={onChangeData}
                                className='form-control'
                                name='size'
                                type='range' />
                        </div>
                        <hr />
                        <div className='form-group'>
                            <button
                                className='btn btn-primary'
                                type='submit'>Submit</button>
                        </div>
                    </form>
                </div> */}
            </div>
        </div>
    )
}

export default MapContent