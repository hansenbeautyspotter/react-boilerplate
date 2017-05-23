import React from 'react';
import styled from 'styled-components';

import BerlinMaps from '../../components/berlinMaps';
import DoctorList from '../../components/doctorList';

const MapWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    min-height: 100%;
    min-height: 100vh;
    padding: 0;
`;

const MapWrapperLeft = styled.div`
    flex: 1;
    width: 75%;
`;

const MapWrapperRight = styled.div`
    box-sizing: border-box;
    padding: 16px;
    flex: 0 0 auto;
    width: 25%;
`;

export default class WrapperMap extends React.Component {

    render() {
        return (
            <MapWrapper>
                <MapWrapperLeft>
                    <BerlinMaps/>
                </MapWrapperLeft>
                <MapWrapperRight>
                    <DoctorList/>
                </MapWrapperRight>
            </MapWrapper>
        );
    }
}
