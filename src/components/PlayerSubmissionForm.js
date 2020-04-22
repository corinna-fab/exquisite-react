import React, { useState, isValidElement } from 'react';
import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const [wordFields, setWordFields] = useState({
    theOne: 'The',
    adjOne: '',
    nounOne: '',
    adverb: '',
    verb: '',
    theTwo: 'the',
    adjTwo: '',
    nounTwo: ''
  })

  const onInputChange = (event) => {
    console.log(`Changing field ${ event.target.name } to ${ event.target.value }`);
    const newWordFields = {
      ...wordFields,
    }
    newWordFields[event.target.name] = event.target.value;
    setWordFields(newWordFields);
  }

  const checkFields = () => {
    for (let key in wordFields) {
      if (wordFields[key] === "") {
        return false; 
      }
    };
    return true;
  };

//Submit line
  const onFormSubmit = (event) => {
    event.preventDefault(); 

    if(checkFields()){
      console.log("Word Fields: " + wordFields)

      props.submitPlayerLine(wordFields);
      
      setWordFields({
        adjOne: '',
        nounOne: '',
        adverb: '',
        verb: '',
        adjTwo: '',
        nounTwo: ''
      })
    } else {

    }
  };

  return (
    <div className="PlayerSubmissionForm">

      <h3>Player Submission Form for Player #{props.player}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          The
          <input type="text" placeholder="adjective" name="adjOne" value={wordFields.adjOne} onChange={onInputChange}/>
          <input type="text" placeholder="noun" name="nounOne" value={wordFields.nounOne} onChange={onInputChange}/>
          <input type="text" placeholder="adverb" name="adverb" value={wordFields.adverb} onChange={onInputChange}/>
          <input type="text" placeholder="verb" name="verb" value={wordFields.verb} onChange={onInputChange}/>
          the
          <input type="text" placeholder="adjective" name="adjTwo" value={wordFields.adjTwo} onChange={onInputChange}/>
          <input type="text" placeholder="noun" name="nounTwo" value={wordFields.nounTwo} onChange={onInputChange}/>

        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}


export default PlayerSubmissionForm;
