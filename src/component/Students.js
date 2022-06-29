import React from 'react';
// import Card from 'react-bootstrap/Card';
import Cards from "./Cards";


function Students(props) {

    const cardInfo = [
        {
            image: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
            name: "Mike",
            gpa: 3.8
        },
        {
            image:
                "https://github.com/Aidenkopec/MidtermProject/blob/0f5f62683984701dc72e59c5878611e2fbbab4b9/src/studentImages/s1.png",
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
    ]

    const studentValues = cardInfo.map(student => <Cards key={student.name} student={student}/>)
    return <div>{studentValues}</div>


    // const studentValues = cardInfo.map(student => <Card key={student.name} student={student}>)
    //
    //     return
    //     <div>
    //     {studentValues}
    // < /div>
}

export default Students