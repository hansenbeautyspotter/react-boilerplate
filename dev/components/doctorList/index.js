import React from 'react';
import styled from 'styled-components';


import H1 from '../H1';

// import VendorList from 'json!./vendors.json';

const DoctorListElement = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`;

const DoctorListItemElement = styled.li`
    align-items: center;
    display: flex;
    padding: 0 0 8px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 8px;
`;

const DoctorListItemImage = styled.img`
    margin-right: 16px;
`;

const DoctorListItemName = styled.span`
`;

export default class DoctorList extends React.Component {

    render() {
        return (
            <DoctorListElement>
                <DoctorListItemElement>
                    <DoctorListItemImage src="http://placehold.it/60x60"/>
                    <H1>Name</H1>
                </DoctorListItemElement>
                <DoctorListItemElement>
                    dsa
                </DoctorListItemElement>
                <DoctorListItemElement>
                    dsa
                </DoctorListItemElement>
            </DoctorListElement>
        );
    }
}
