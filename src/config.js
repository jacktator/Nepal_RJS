export const BASE_URL = 'https://nepal.sk8tech.io/wp-json/wp/v2';
export const IMAGE_URL = 'https://nepal.sk8tech.io/wp-content/uploads/';
export const VIDEO_URL = 'https://www.youtube.com/watch?v=';
// nepal.sk8tech.io/wp-json/wp/v2/users/register
// two type : https://nepal.sk8tech.io/wp-json/wp/v2/program?filter[author]=4
// or : https://nepal.sk8tech.io/wp-json/acf/v3/program?filter[meta_key]=user_id&filter[meta_value]=4
export const programmeTable = {
  DecreaseStress: 'ds',
  FatLoss: 'fl',
  IncreaseFitness: 'if',
  MuscleGain: 'mg',
  ImprovePosture: 'ip',
};

export const rehabProgramme = {
  posture: {
    rs: 'rounded_shoulders',
    apt: 'anterior_pelvic_tilt',
    sp: 'sway_posture',
  },
  injury: {
    lbp: 'lower_back_pain',
    np: 'neck_pain',
    sp: 'shoulder_pain',
    hp: 'hip_pain',
  },
};
