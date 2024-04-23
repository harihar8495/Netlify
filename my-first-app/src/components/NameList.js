import React from "react";
import Person from "./Person";


function NameList() {   
    const persons = [
         {
            id: 1,
        name : 'kohli',
        age: 30

    },
     {
        id: 2,
        name : 'siraj',
        age: 30
    }
]
    //key cannot access as props since it is resered
    const personList = persons.map( person => <Person key={person.id} person = {person} /> ) 
    return <div>{ personList}</div>
}

 
export default NameList;