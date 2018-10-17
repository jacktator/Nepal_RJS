export const postureCorrectionArray= [
  { value: 1, description: 'Rounded shoulder and forward head', imgurl: 'https://muscularstrength.com/uploads/froala/18fc5d8c9a007cb8238d910aa106b91ad7e0066f.png'},
  { value: 2, description: 'Anterior pelvic tilt', imgurl: 'http://fitness4backpain.com/wp-content/uploads/Kyphosis-Normal-vs-Hyper.jpg'},
  { value: 3, description: 'Sway posture', imgurl: 'https://www.hunterphysio.com.au/wp-content/uploads/2017/05/lower-back-02.jpg'},
  { value: 0, description: 'None' },
];
export const injuryManagementArray= [
  { value: 1, description: 'Lower Back Pain', imgurl: 'http://totalphysiocare.com.au/wp-content/uploads/2017/05/lower-back-pain-relief.png'},
  { value: 2, description: 'Neck Pain', imgurl: 'https://static.wixstatic.com/media/b1546b_f6a11249f1a346e08fc817d7cece04c3~mv2.jpg/v1/fill/w_630,h_382,al_c,lg_1,q_80/b1546b_f6a11249f1a346e08fc817d7cece04c3~mv2.webp'},
  { value: 3, description: 'Shoulder Pain', imgurl: 'https://feelpainrelief.com/wp-content/uploads/2015/09/shoulder-pain-300x200.jpg'},
  { value: 4, description: 'Hip Pain', imgurl: 'https://qph.fs.quoracdn.net/main-qimg-4d054f876feaa4b3d4944914a6f7cb66-c'},
  { value: 0, description: 'None' },
];

export const genderArray = [
  { value: "male", label: 'Male' },
  { value: "female", label: 'Female' },
];
export const daysArray = ArrtoObj(3, 5, false);
export const ageArray = ArrtoObj(12, 75, false);
export const weightArray = ArrtoObj(20, 300, true);
export const exercisePlaceArray = [
  { value: "gym", label: 'Gym' },
  { value: "home", label: 'Home' },
];
export const trainingGoalsArray= [
  { value: '1', used_for:'gym', label: 'Muscle size and strength', description:"Weight training principles designed to build muscle and strength." },
  { value: '2', used_for:'both', label: 'Fat Loss/Definition', description: "A combination of cardio and weight training to target fat loss and increase muscle definition."},
  { value: '3', used_for:'both', label: 'Decrease stress', description:"Using exercise strategies to reduce stress levels and restore balance back in your body."},
  { value: '4', used_for:'gym', label: 'Improve posture', description:"Utilising specific exercises and weight training to correct postural imbalances."},
  { value: '5', used_for:'home', label: 'Increase fitness', description:"High intensity exercise to develop and increase your overall fitness."},
];
export const stressArray= [
  {value: '1', label: 'Stress free', description:'I never feel stressed'},{value: '2', label: 'Minimally stressed', description:'I rarely feel stressed'},
  {value: '3', label: 'Moderately stressed', description:'I feel stressed occasionally'},{value:'4', label: 'Highly stressed', description:'I feel quite stressed most days'},
  {value: '5', label: 'Extremely stressed', description:'I feel highly stressed every day'},
];
export const productivityArray = [
  {value: '1', label: 'None of the time', description:'I have not felt productive at all in the last 4 weeks'},
  {value: '2', label: 'Rarely', description:'I felt productive rarely in the last 4 weeks '},
  {value: '3', label: 'Half the time', description:'I felt productive for half of the days in the past 4 weeks'},
  {value: '4', label: 'Most of the time', description:'I felt productive most days in the past 4 weeks'},
  {value: '5', label: 'All the time', description:'I felt productive every day in the last 4 weeks'},
];
export const injuryArray = [
  {value: '1', label: 'No pain', description:'I never feel injury or posture related pain'},{value: '2', label: 'Rarely in pain', description:'I feel injury or posture related pain every few weeks or months'},
  {value: '3', label: 'Sometimes in pain', description:'I feel injury or posture related pain 1-2 times a week'},{value: '4', label: 'Regularly in pain', description:'I feel injury or posture related pain most days of the week'},
  {value: '5', label: 'Always in pain', description:'I feel consistent injury or posture related pain every day of the week'},
];
export const healthArray = [
  {value: '1', label: 'Poor', description:'I feel like my health and wellbeing is poor right now'},{value: '2', label: 'Fairly good', description:'I feel like my health and wellbeing is fairly good right now'},
  {value: '3', label: 'Good', description:'I feel like my health and wellbeing is very good right now'},{value: '4', label: 'Excellent', description:'I feel like my health and wellbeing are excellent right now'},
];
export const activityArray= [
  {value: '1', label: 'Sendentary', description:'I am sitting all day'},{value: '2', label: 'Lightly active', description:'Most of my day is sitting but I walk and stand for short periods of the day'},
  {value: '3', label: 'Moderately active', description:'I am walking and standing for most of the day'},{value: '4', label: 'Very active', description:'I am walking or standing all day long'},
  {value: '5', label: 'Extremely active', description:'I do heavy lifting/labour type work or highly intense activity nearly all of the day'},
];
export const exerciseArray= [
  {value: '1', label: 'No exercise', description:'I do no exercise '},{value: '2', label: 'Light exercise', description:'I exercise 1-2 times weekly'},
  {value: '3', label: 'Moderate exercise', description:'I exercise 3-4 times weekly'},{value: '4', label: 'Hard exercise', description:'I exercise 5-6 times weekly'},
  {value: '5', label: 'Intense exercise', description:'I do intense exercise 6+ times weekly'},
];

function ArrtoObj(RangeFrom: int, RangeTo: int, unit: boolean) {
  var returnArray = [];
  if (unit) {
    for (let i = RangeFrom; i <= RangeTo; i++) {
      returnArray.push({value: i, label: i + " kg"})
    };
  } else {
    for (let i = RangeFrom; i <= RangeTo; i++) {
      returnArray.push({value: i, label: i})
    };
  }
  return returnArray;
}
