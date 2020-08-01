export const PROTOCOL = "https";
export const DOMAIN = "am.sk8.tech";
export const BASE_URL = `${PROTOCOL}://${DOMAIN}`;

export const SALES_HOME = `${BASE_URL}`
export const API_URL = `${BASE_URL}/wp-json`;
export const API_WP = `${API_URL}/wp/v2`;
export const API_ACF = `${API_URL}/acf/v3`;
export const API_JWT = `${API_URL}/jwt-auth/v1`;
export const API_AM = `${API_URL}/am/v1`;

export const IMAGE_URL = `${BASE_URL}/wp-content/uploads/`;
export const VIDEO_URL = 'https://www.youtube.com/watch?v=';
// am.sk8.tech/wp-json/wp/v2/users/register
// two type : https://am.sk8.tech/wp-json/wp/v2/program?filter[author]=4
// or : https://am.sk8.tech/wp-json/acf/v3/program?filter[meta_key]=user_id&filter[meta_value]=4

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
