import React from 'react';
import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import '../cardStyle.css';

function Cards({student}) {
    return (

        <div className='card-container'>
            <Card style={{width: '15rem'}}>
                <Card.Img class="top" src={student.image}/>
                <Card.Body class="card-body">
                    <Card.Title>Name: {student.name}</Card.Title>
                    <Card.Text>
                        GPA: {student.gpa}
                    </Card.Text>
                    <Button className='Button' variant="primary">Grade</Button>
                </Card.Body>
            </Card>
        </div>

    );
}

export default Cards;