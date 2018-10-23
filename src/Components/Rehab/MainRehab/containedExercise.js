import React from 'react';
import ExerciseCard from '../../HOC/Exercises';

const ContainedExercises = (props) => {
    return (
        <div style={{height:'100%', overflow:'scroll', width:'90vw', marginLeft:'5vw'}}>
            {props.rehab.map((rehab, key) => (
                <div key={key}>
                    <h2>{rehab.rehab_category}</h2>
                    {rehab.data.map((data, key1) => (
                        <ExerciseCard 
                        key={key1}
                        title={data.name}
                        to={`/rehab-exercise/${key}/${key1}`}
                        onChange={()=>props.onChange(rehab.rehab_category, data.type, key, key1)}
                        finish={data.is_completed}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default ContainedExercises;
