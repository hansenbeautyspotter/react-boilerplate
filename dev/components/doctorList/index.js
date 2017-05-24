import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import H1 from '../H1';

// import VendorList from 'json!./vendors.json';

const DoctorListElement = styled.ul `
    padding: 0;
    margin: 0;
    list-style: none;
`;

const DoctorListItemElement = styled.li `
    align-items: center;
    justify-content: space-between;
    display: flex;
    padding: 0 0 8px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 8px;
`;

const DoctorListItemImage = styled.img `
    display: inline-block;
    vertical-align: middle;
    margin-right: 16px;
`;

const DoctorListItemName = styled.div `
    h4 {
        margin: 0;
    }

    div {
        display: inline-block;
        vertical-align: middle;
    }
`;

const DoctorListItemIcon = styled.div `

    .fa {
        cursor: pointer;
    }
`;

export default class DoctorList extends React.Component {

    render() {
        return (
            <DoctorListElement>
                <DoctorListItemElement>
                    <DoctorListItemName>
                        <DoctorListItemImage src="http://placehold.it/60x60"/>
                        <div>
                            <h4>Name</h4>
                            <span>Some Details</span>
                        </div>
                    </DoctorListItemName>
                    <DoctorListItemIcon>
                        <FontAwesome name='arrows'/>
                    </DoctorListItemIcon>
                </DoctorListItemElement>
                <DoctorListItemElement>
                    <DoctorListItemName>
                        <DoctorListItemImage src="http://placehold.it/60x60"/>
                        <div>
                            <h4>Name</h4>
                            <span>Some Details</span>
                        </div>
                    </DoctorListItemName>
                    <DoctorListItemIcon>
                        <FontAwesome name='arrows'/>
                    </DoctorListItemIcon>
                </DoctorListItemElement>
                <DoctorListItemElement>
                    <DoctorListItemName>
                        <DoctorListItemImage src="http://placehold.it/60x60"/>
                        <div>
                            <h4>Name</h4>
                            <span>Some Details</span>
                        </div>
                    </DoctorListItemName>
                    <DoctorListItemIcon>
                        <FontAwesome name='arrows'/>
                    </DoctorListItemIcon>
                </DoctorListItemElement>
                <DoctorListItemElement>
                    <DoctorListItemName>
                        <DoctorListItemImage src="http://placehold.it/60x60"/>
                        <div>
                            <h4>Name</h4>
                            <span>Some Details</span>
                        </div>
                    </DoctorListItemName>
                    <DoctorListItemIcon>
                        <FontAwesome name='arrows'/>
                    </DoctorListItemIcon>
                </DoctorListItemElement>
                <DoctorListItemElement>
                    <DoctorListItemName>
                        <DoctorListItemImage src="http://placehold.it/60x60"/>
                        <div>
                            <h4>Name</h4>
                            <span>Some Details</span>
                        </div>
                    </DoctorListItemName>
                    <DoctorListItemIcon>
                        <FontAwesome name='arrows'/>
                    </DoctorListItemIcon>
                </DoctorListItemElement>
            </DoctorListElement>
        );
    }
}
