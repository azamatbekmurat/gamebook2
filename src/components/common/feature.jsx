import React from "react";

const Feature = props => {
  return (
    <div className="row" id="feature">
      <div className="col3 s12 m9">
        <h4>{props.name}</h4>
        <p>
          Duis at nibh eu nulla cursus auctor fermentum sit amet mauris. Sed
          eget interdum neque, in auctor risus.
        </p>
        <p>
          Cursus auctor fermentum sit amet mauris. Sed eget interdum neque, in
          auctor risus.
        </p>
        <p>
          Fermentum sit amet mauris. Sed eget interdum neque, in auctor risus.
        </p>
      </div>
    </div>
  );
};

export default Feature;
