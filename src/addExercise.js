import React from 'react';
import axios from 'axios';

const data = [
  {
    day: '1', name: '13 Quadricep Heavy Exercises', id: '13', sets: '3', reps: '7-9', feedback: '2', workout: 'Front Squat (Barbell)', progression_model: 'linear', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '1', name: '16 Quadricep Uni-lateral Exercises', id: '16', sets: '3', reps: '10-12', feedback: '3', workout: 'Leg Extensions (Single Leg)', progression_model: 'double progression', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '1', name: '22 Hamstring & Glute Exercises', id: '22', sets: '3', reps: '7-9', feedback: '2', workout: 'Romanian Deadlift (Barbell)', progression_model: 'linear', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '1', name: '10 Shoulder Compund Exercises', id: '10', sets: '3', reps: '8-10', feedback: '3', workout: 'Standing Shoulder Press (Barbell)', progression_model: 'linear', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '1', name: '1 Tricep Heavy Exercises', id: '1', sets: '3', reps: '8-10', feedback: '4', workout: 'Close Grip Bench Press (Barbell)', progression_model: 'linear', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '2', name: '5 Chest Heavy', id: '5', sets: '3', reps: '7-9', feedback: '2', workout: 'Bench Press (Barbell)', progression_model: 'linear', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '2', name: '11 Back Heavy Exercises', id: '11', sets: '3', reps: '7-9', feedback: '2', workout: 'Bent Over Row (Barbell)', progression_model: 'linear', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '2', name: '7 Chest Light', id: '7', sets: '3', reps: '8-10', feedback: '3', workout: 'Flat Chest Fly (Dumbbell)', progression_model: 'double progression', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '2', name: '12 Back Light Exercises', id: '12', sets: '3', reps: '8-10', feedback: '3', workout: 'Single Arm Row (Dumbbell)', progression_model: 'double progression', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '2', name: '8 Shoulder Isolation Exercises', id: '8', sets: '3', reps: '10-12', feedback: '4', workout: 'Shoulder Front Raise (Dumbbell)', progression_model: 'double progression', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '2', name: '23 Abdominal Exercises', id: '23', sets: '3', reps: '15-20', feedback: '4', workout: 'Crunch With Arms Extended)', progression_model: 'double progression', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '3', name: '12 Back Light Exercises', id: '12', sets: '3', reps: '8-10', feedback: '4', workout: 'Single Arm Row (Dumbbell)', progression_model: 'double progression', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '3', name: '9 Shoulder Rear Delt Isolation Exercises', id: '9', sets: '3', reps: '10-12', feedback: '2', workout: '{30 deg} Bench Supported Reverse Fly (Dumbbell)', progression_model: 'double progression', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '3', name: '2 Tricep Light Exercises', id: '2', sets: '3', reps: '10-12', feedback: '3', workout: 'Straight Bar Pushdown', progression_model: 'double progression', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '3', name: '4 Bicep Light Exercises', id: '4', sets: '3', reps: '10-12', feedback: '3', workout: 'Standing Bicep Curl (Dumbbell)', progression_model: 'double progression', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '3', name: '26 Shoulder lateral + tricep light', id: '26', sets: '3', reps: '12-15', feedback: '4', workout: 'Shoulder Front Raise (Dumbbell)', progression_model: 'double progression', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '3', name: '35 Bicep light +glute isolation', id: '35', sets: '3', reps: 'Till Failure', feedback: '2', workout: 'Standing Bicep Curl (Dumbbell)', progression_model: 'double progression', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '4', name: '13 Quadricep Heavy Exercises', id: '13', sets: '3', reps: '8-10', feedback: '4', workout: 'Front Squat (Barbell)', progression_model: 'linear', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '4', name: '22 Hamstring & Glute Exercises', id: '22', sets: '3', reps: '10-12', feedback: '3', workout: 'Romanian Deadlift (Barbell)', progression_model: 'linear', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '4', name: '15 Quadricep Isolation Exercises', id: '15', sets: '3', reps: '12-15', feedback: '3', workout: 'Leg Extensions', progression_model: 'double progression', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '4', name: '9 Shoulder Rear Delt Isolation Exercises', id: '9', sets: '3', reps: '12-15', feedback: '2', workout: '{30 deg} Bench Supported Reverse Fly (Dumbbell)', progression_model: 'double progression', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '4', name: '33 Calves Or Glutes Exercises', id: '33', sets: '3', reps: '20-25', feedback: '2', workout: 'Standing Calf Raise', progression_model: 'double progression', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '5', name: '5 Chest Heavy', id: '5', sets: '3', reps: '8-10', feedback: '3', workout: 'Bench Press (Barbell)', progression_model: 'linear', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '5', name: '12 Back Light Exercises', id: '12', sets: '3', reps: '10-12', feedback: '4', workout: 'Single Arm Row (Dumbbell)', progression_model: 'double progression', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '5', name: '7 Chest Light', id: '7', sets: '3', reps: '12-15', feedback: '2', workout: 'Flat Chest Fly (Dumbbell)', progression_model: 'double progression', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '5', name: '12 Back Light Exercises', id: '12', sets: '3', reps: '12-15', feedback: '3', workout: 'Single Arm Row (Dumbbell)', progression_model: 'double progression', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '5', name: '36 Calves + bicep light', id: '36', sets: '3', reps: '12-15', feedback: '4', workout: 'Standing Calf Raise', progression_model: 'double progression', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
  {
    day: '5', name: '24 Abdominal Failure Exercises', id: '24', sets: '3', reps: 'Till Failure', feedback: '2', workout: 'Side Plank', progression_model: 'till failure', video_link: 'IODxDxX7oi4', icon_link: '2018/10/Icon-9.jpg', image_link: '2018/10/Images-1.jpeg',
  },
];

class addExercise extends React.Component {
  componentDidMount() {
    console.log(data.length);
    data.forEach((v) => {
      axios.post('/gym_mg_5', { fields: v, status: 'publish' })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => { console.log(err); });
    });
  }

  render() {
    return (
      <div />
    );
  }
}


export default addExercise;
