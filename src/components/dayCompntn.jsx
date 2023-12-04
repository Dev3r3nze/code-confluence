import React, { Component } from 'react';

class DayCompntn extends Component {
    render() {
        return (
            // Resaltar el día actual
            // today === day ? <DayCompntn key={index} day={day} today /> : <DayCompntn key={index} day={day} /> // Pasar el número del día como una prop
            <div className='dia'>
                {/* Day component UI goes here */}
                <h1>{this.props.day}</h1> {/* Mostrar el número del día */}
            </div>
        );
    }
}

export default DayCompntn;