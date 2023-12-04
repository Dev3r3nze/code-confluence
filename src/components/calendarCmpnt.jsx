import React from 'react';
import DayCompntn from './DayCompntn';

function Calendar() {
    // Obtener la fecha actual
    const date = new Date();

    //Obtener el día actual
    const today = date.getDate();

    // Obtener el primer día del mes
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1).getDay()-1;

    // Obtener el número de días en el mes
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    // Obtener el número de días en el mes anterior
    const daysInLastMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    // Crear un array de 35 elementos
    const days = new Array(35).fill(null);

    // Llenar el array con los números de los días del mes anterior
    for(let i = 0; i < firstDayOfMonth; i++) {
        days[i] = daysInLastMonth - firstDayOfMonth + i + 1;
    }

    // Llenar el array con los números de los días del mes actual
    for (let i = 0; i < daysInMonth; i++) {
        days[i + firstDayOfMonth] = i + 1;
    }

    // Llenar el array con los números de los días del próximo mes
    for(let i = daysInMonth + firstDayOfMonth; i < 35; i++) {
        days[i] = i - daysInMonth - firstDayOfMonth + 1;
    }

    return (
        <div className='calendario' style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
        {days.map((day, index) => (
            // Resaltar el día actual
            today === day ? <DayCompntn key={index} day={day} today /> : <DayCompntn key={index} day={day} /> // Pasar el número del día como una prop
            
        ))}
        </div>
    );
    }

export default Calendar;