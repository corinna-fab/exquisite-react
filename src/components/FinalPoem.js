import React, { useState } from 'react';
import './FinalPoem.css';

const FinalPoem = (props) => {
  const [reveal, setReveal] = useState(false);

  //REQ: Verify: The final poem shown has all 3 submitted lines, in the order submitted
  const FinalPoemComponents = props.savedLines.map((line, i) => {
    return (
      <p key={i}>
        {line}
      </p>
    );
    });

  //REQ: Manual testing step: Clicking the Reveal the Poem button reveals the section with the header "Final Poem"
  const toReveal = () => {
    setReveal(true);
    props.isGameFinished(true);
  }

  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {reveal == true ? FinalPoemComponents : '' }
      </section>

      <div className="FinalPoem__reveal-btn-container" >
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={toReveal}/>
      </div>
    </div>
  );
};

export default FinalPoem;

//TO DO: Add "the"s to wordFields
//TO DO: lock submission form when poem is revealed