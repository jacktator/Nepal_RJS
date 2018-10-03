import React  from 'react';
import {Link} from 'react-router-dom';

const RedirectToQuestionnaire = (props) => {
  return (
    <div>
        You finish you {props.name} program. Please click the following button to go to questionnaire page.

      <Link to='/questionnaire'>
        <button className="customizedButton-Blue">Go to questionnaire</button>
      </Link>
    </div>
  )
}
export default RedirectToQuestionnaire;
