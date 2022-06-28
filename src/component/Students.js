import React from 'react';
import Card from 'react-bootstrap/Card';


function Students(props) {

    const cardInfo = [
        {
            image:
                "s1.png",
            name: "Mike",
            gpa: 3.8
        },
        {
            image:
                "s2.png",
            name: "Manal",
            gpa: 3.6
        },
        {
            image:
                "s3.png",
            name: "Moe",
            gpa: 3.2
        },
        {
            image:
                "s4.png",
            name: "Mary",
            gpa: 2.6
        }
    ];


    return (
        <div>
            <>
                <Card>
                    <Card.Img variant="top" src="s1.png" />
                    <Card.Body>
                        <Card.Text>
                            {cardInfo[0].image}
                            {cardInfo[0].name}
                            {cardInfo[0].gpa}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <Card.Img variant="bottom" src="holder.js/100px180" />
                </Card>
            </>
        </div>
    );

}

export default Students;