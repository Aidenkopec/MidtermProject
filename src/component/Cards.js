import React from 'react';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn} from 'mdb-react-ui-kit';

function Cards({student}) {
    return (
        <div>
            <MDBCard style={{maxWidth: '6rem'}}>
                <MDBCardImage src={student.image} position='top' alt='...'/>
                <MDBCardBody>
                    {/*<MDBCardTitle>Card title</MDBCardTitle>*/}
                    <MDBCardText >
                        <h1>{student.name}</h1>
                        <h3>{student.gpa}</h3>
                    </MDBCardText>
                    <MDBBtn href='#'>Button</MDBBtn>
                </MDBCardBody>
                <br/>
                <br/>
                <br/>
            </MDBCard>
        </div>
    );
}

export default Cards;