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

const MapWrapperItem = styled.div`
    flex: ${props => props.right ? '0 0 auto' : '1'};
    width: ${props => props.right ? '25%' : '75%'};
    padding: ${props => props.right ? '16px' : '0'};
    box-sizing: border-box;
`;

export default class WrapperMap extends React.Component {

    render() {
        return (
            <MapWrapper>
                <MapWrapperItem>
                    <BerlinMaps/>
                </MapWrapperItem>
                <MapWrapperItem right>
                    <DoctorList/>
                </MapWrapperItem>
            </MapWrapper>
        );
    }
}
