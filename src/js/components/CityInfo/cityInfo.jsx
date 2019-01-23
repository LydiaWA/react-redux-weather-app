import React from 'react';

export default class CityInfo extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { cityInfo } = this.props;
        return (
            <div className='card border-info mb-3'>
                <div className='card-header bg-info'>City Info</div>
                <div className='card-body text-center'>
                    <h5 className='card-title'>{cityInfo.name && cityInfo.name}</h5>
                    <h6 className='card-subtitle'>
                        { !cityInfo.name ? 'Coordinates' : `Lat/Lng: ${cityInfo.coord.lat}, ${cityInfo.coord.lon}` }
                    </h6>
                    <hr/>
                    <div className='row'>
                        <div className='col-4'>
                            <h6>Temperature{"(F)"}</h6>
                            <p className='text-success'>
                            {cityInfo.name && `${cityInfo.main.temp}F`}</p>
                        </div>
                        <div className='col-4'>
                            <h6>Pressure</h6>
                            <p className='text-success'>
                            {cityInfo.name && cityInfo.main.pressure}</p>
                        </div>
                        <div className='col-4'>
                            <h6>Humidity</h6>
                            <p className='text-success'>
                            {cityInfo.name && `${cityInfo.main.humidity}%`}</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-sm'>
                            <h6>Lowest Temp{"(F)"}</h6>
                            <p className='text-success'>{ cityInfo.name && `${cityInfo.main.temp_min}F` }</p>
                        </div>
                        <div className='col-sm'>
                            <h6>Highest Temp{"(F)"}</h6>
                            <p className='text-success'>{ cityInfo.name && `${cityInfo.main.temp_max}F` }</p>
                        </div>
                        <div className='col-sm'>
                            <h6>Wind Speed</h6>
                            <p className='text-success'>{ cityInfo.name && `${cityInfo.wind.speed}mph` }</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
