import React from 'react';
import axios from 'axios';

const a = {
  ROUNDED_SHOULDERS: {
    mobility: [
      '(Arms straight shoulder rolls,3,10-20,)',
      '(Wall chest stretch,3,,30-60)',
      '(Chin tucks,3,10-20,)',
      '(Wall circumductions,3,5-10,)',
      '(Band pullaparts,3,10-20,)',
      '(Stick/ band dislocations,3,10-20,)',
      '(Wall shoulder external rotations,3,10-15,)',
      '(Wall angels,3,10-15,)',
      '(Wall thoracic mobility,3,,30-60)',
      '(Chair neck stretch,3,,30-60)',
    ],
    'release work': [
      '(Foam roller thoracic mobilisation,3,,30-60)',
      '(Foam roller supine lying,3,,30-60)',
      '(Foam roller lat release,3,,30-60)',
      '(Ball chest release on doorway,3,,30-60)',
      '(Ball levator scapula release on wall,3,,30-60)',
      '(Ball release upper trapezius on wall,3,,30-60)',
      '(Ball thoracic mobility,3,,30-60)',
    ],
    'strength endurance': [
      '(Deep neck flexor training,3,,)',
      '(Hands and knees scapula hugs,3,10-20,)',
      '(Neck rolls,3,10-15,)',
      '(T lifts,3,15-25,)',
      '(T lift circles,3,15-25,)',
      '(Banded sword drill,3,10-15,)',
      '(Shoulder shugs,3,15-25,)',
    ],
  },
  ANTERIOR_PELVIC_TILT: {
    mobility: [
      '(Desk thigh stretch,3,,30-60)',
      '(Kneeling thigh stretch,3,,30-60)',
      '(Rear foot elevated thigh stretch ,3,,30-60)',
      '(Windmill stretch,3,5-10,)',
      '(Spinal flexion + extension sitting,3,5-10,)',
      '(Pelvic tilts against wall,3,10-20,)',
    ],
    'release work': [
      '(Foam roller thigh,3,,30-60)',
      '(Foam roller thoracic mobilisation,3,,30-60)',
      '(Foam roller lower back muscles,3,,30-60)',
      '(Ball release thigh,3,,30-60)',
      '(Ball release TFL,3,,30-60)',
      '(Ball release Quadratus Lumborum,3,,30-60)',
      '(Foam roller wall traction,3,,30-60)',
    ],
    'strength endurance': [
      '(Plank hold,3,,30-60)',
      '(Dish hold,3,,30-60)',
      '(Dead bugs,3,,30-60)',
      '(Bridges,3,20-30,)',
      '(Single leg bridges,3,10-15,)',
      '(Overhead static lunge,3,5-10,)',
      '(Wall overhead squat,3,5-10,)',
    ],
  },
  SWAY_POSTURE: {
    mobility: [
      '(Seated piriformis stretch,3,,30-60)',
      '(Standing hamstring stretch,3,,30-60)',
      '(Band pullaparts,3,10-20,)',
      '(Flexion + Extension pattern standing,3,5-10,)',
      '(Wall shoulder external rotations,3,10-15,)',
      '(Wall angels,3,10-15,)',
      '(Wall thoracic mobility,3,,30-60)',
      '(Pelvic tilts against wall,3,10-20,)',
    ],
    'release work': [
      '(Foam roller thoracic mobilisation,3,,30-60)',
      '(Foam roller glute release,3,,30-60)',
      '(Foam roller supine lying,3,,30-60)',
      '(Foam roller lower back muscles,3,,30-60)',
      '(Ball thoracic mobility,3,,30-60)',
      '(Ball release hamstring sitting,3,,30-60)',
    ],
    'strength endurance': [
      '(Plank hold,3,,30-60)',
      '(Dish hold,3,,30-60)',
      '(Dead bugs,3,,30-60)',
      '(Bridges,3,20-30,)',
      '(Single leg bridges,3,10-15,)',
      '(Overhead static lunge,3,5-10,)',
      '(Wall overhead squat,3,5-10,)',
      '(Mountain climbers,3,,30-60)',
      '(Band pullaparts,3,10-20,)',
      '(Wall marching drill,3,,30-60)',
    ],
  },
  LOWER_BACK_PAIN: {
    mobility: [
      '(Seated spinal rotations,3,5-10,)',
      '(Spinal flexion + extension sitting,3,10-15,)',
      '(Psoas and hamstring mobility,3,,30-60)',
      '(Seated piriformis stretch,3,,30-60)',
      '(Mobility bridges,3,10-20,)',
      '(Flexion + Extension pattern standing,3,10-15,)',
      '(Standing hamstring stretch,3,,30-60)',
      '(Standing rib opener,3,10-15,)',
      '(Wall thoracic extension,3,,30-60)',
      '(Wall spinal twist,3,,30-60)',
    ],
    'release work': [
      '(Foam roller thoracic mobilisation,3,,30-60)',
      '(Foam roller lower back,3,,30-60)',
      '(Foam roller glute release,3,,30-60)',
      '(Ball release gluteals,3,,30-60)',
      '(Ball release hamstring sitting,3,,30-60)',
      '(Ball release lower back lying,3,,30-60)',
      '(Ball release lower back standing on wall,3,,30-60)',
    ],
    'strength endurance': [
      '(Plank on toes,3,,30-60)',
      '(Plank on knees,3,,30-60)',
      '(Side plank feet,3,,30-60)',
      '(Side plank knees,3,,30-60)',
      '(Bird dog,3,10-20,)',
      '(Abdominal brace with squat,3,10-15,)',
      '(Abdominal brace with leg drop,3,20-30,)',
      '(Abdominal brace with arm and leg drop,3,20-30,)',
      '(Glute bridges,3,20-30,)',
      '(Kneeling hip hinge,3,10-20,)',
      '(Single leg tipping bird,3,10-15,)',
    ],
  },
  NECK_PAIN: {
    mobility: [
      '(Chin tucks,3,10-20,)',
      '(Arms straight shoulder rolls,3,10-20,)',
      '(Chair neck stretch,3,,30-60)',
      '(Flexion + Extension patterns standing,3,5-10,)',
      '(Desk thoracic mobilisation,3,,30-60)',
      '(Shoulder shrugs,3,20-30,)',
      '(Wall thoracic mobility,3,,30-60)',
    ],
    'release work': [
      '(Foam roller thoracic mobilisation,3,,30-60)',
      '(Foam roller rhomboid release,3,,30-60)',
      '(Self masage headache relief,3,,30-60)',
      '(Self massage neck relief,3,,30-60)',
      '(Ball release upper neck,3,,30-60)',
      '(Ball release upper trapezius,3,,30-60)',
      '(Ball thoracic mobility,3,,30-60)',
    ],
    'strength endurance': [
      '(Deep neck flexor training,3,,30-60)',
      '(Hands and knees scapula hugs,3,10-20,)',
      '(Neck rolls,3,10-15,)',
      '(T lifts,3,20-30,)',
      '(T lift circles,3,20-30,)',
      '(Wall overhead squat - facing wall,3,5-10,)',
      '(Wall shoulder extension,3,10-15,)',
    ],
  },
  SHOULDER_PAIN: {
    mobility: [
      '(Arms straight shoulder rolls,3,10-20,)',
      '(Wall chest stretch,3,,30-60)',
      '(Step and swing,3,5-10,)',
      '(Wall circumductions,3,5-10,)',
      '(Band pullaparts,3,10-20,)',
      '(Stick/ band dislocations,3,5-10,)',
      '(Wall shoulder external rotations,3,10-15,)',
      '(Wall angels,3,10-15,)',
      '(Wall thoracic mobility,3,,30-60)',
    ],
    'release work': [
      '(Foam roller thoracic mobilisation,3,,30-60)',
      '(Foam roller rhomboid release,3,,30-60)',
      '(Foam roller lat release,3,,30-60)',
      '(Ball chest release on doorway,3,,30-60)',
      '(Ball middle back release on wall,3,,30-60)',
      '(Ball release upper trapezius on wall,3,,30-60)',
      '(Ball thoracic mobility,3,,30-60)',
    ],
    'strength endurance': [
      '(Hands and knees scapula hugs,3,10-20,)',
      '(Banded wall shoulder press,3,10-15,)',
      '(Band pullaparts,3,10-20,)',
      '(Banded sword drill,3,10-15,)',
      '(Single arm trap raise,3,10-15,)',
      '(Modified down dog shoulder strength,3,5-10,)',
      '(Wall shoulder extension,3,10-15,)',
    ],
  },
  HIP_PAIN: {
    mobility: [
      '(Psoas and hamstring mobility,3,,30-60)',
      '(Seated piriformis stretch,3,,30-60)',
      '(Groin stretch kneeling,3,,30-60)',
      '(Wall TFL stretch,3,,30-60)',
      '(Single leg hip circumductions,3,5-10,)',
      '(Single leg deadlifts,3,10-15,)',
      '(Desk thigh stretch,3,,30-60)',
      '(Deep squat with twist,3,5-10,)',
      '(Wall Groin stretch,3,,30-60)',
    ],
    'release work': [
      '(Foam roller glute release,3,,30-60)',
      '(Foam roller thigh release,3,,30-60)',
      '(Foam roller groin release,3,,30-60)',
      '(Ball release TFL,3,,30-60)',
      '(Ball release guteals,3,,30-60)',
      '(Ball release thigh,3,,30-60)',
      '(Ball release hamstring,3,,30-60)',
      '(Ball release hamstring sitting,3,,30-60)',
    ],
    'strength endurance': [
      '(Wall squats,3,10-15,)',
      '(Wall single leg squat holds,3,,30-60)',
      '(Glute bridges,3,20-30,)',
      '(Frog bridges,3,20-30,)',
      '(Face down kickbacks,3,20-30,)',
      '(Side lying glute lifts,3,20-30,)',
      '(Face down hip scour,3,5-10,)',
    ],
  },
};

const b = (data, i) => {
  axios.post(`/${i.toLowerCase()}`, { fields: data, status: 'publish' })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

const type = { mobility: 0, 'release work': 1, 'strength endurance': 2 };


class addExercise extends React.Component {
  componentDidMount() {
    console.log(a);
    const ki = Object.keys(a);
    for (const i in a) {
      const ii = ki.findIndex(v => v === i);
      for (const m in a[i]) {
        const mm = type[m];
        a[i][m].forEach((element, k) => {
          const n = element.substring(1, element.length - 1).split(',');
          const data = {
            name: n[0], sets: n[1], reps: n[2] === '' ? 'empty' : n[2], time: n[3] === '' ? 'empty' : n[3], type: type[m],
          };
          setTimeout(() => b(data, i), (ii * 10) * mm * 2 * 1000 + (k + 1) * 1500);
        });
      }
    }
    // a.forEach((v) => {
    //   const m = [...v.childexercises.map(i => ({ a: i }))];
    //   axios.post('/exercise', { fields: { id: v.id, name: v.name, childexercises: m }, status: 'publish' })
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => { console.log(err); });
    // });
  }

  render() {
    return (
      <div />
    );
  }
}


export default addExercise;
