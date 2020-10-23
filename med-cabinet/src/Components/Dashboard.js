import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import './Registration.css';
import { useHistory } from 'react-router-dom';

const formSchema = yup.object().shape({
  type: yup
    .string()
    
    .oneOf(['indica', 'sativa', 'hybrid']),
  creative: yup.string(),
  energetic: yup.string(),
  euphoric: yup.string(),
  focused: yup.string(),
  happy: yup.string().de,
  hungry: yup.string(),
  relaxed: yup.string(),
  depression: yup.string(),
  inflammation: yup.string(),
  insomnia: yup.string(),
  lackofappetite: yup.string(),
  pain: yup.string(),
  nausea: yup.string(),
});

export default function Registration() {
  const history = useHistory();
  const [formState, setFormState] = useState({
    type: '',
    depression: '',
    inflammation: '',
    insomnia: '',
    lackofappetite: '',
    pain: '',
    nausea: '',
    creative: '',
    energetic: '',
    euphoric: '',
    focused: '',
    happy: '',
    hungry: '',
    relaxed: '',
  });

  const [serverError, setServerError] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [errors, setErrors] = useState({
   type:'',
    depression: '',
    inflammation: '',
    insomnia: '',
    lackofappetite: '',
    pain: '',
    nausea: '',
    creative: '',
    energetic: '',
    euphoric: '',
    focused: '',
    happy: '',
    hungry: '',
    relaxed: '',
  });

  const handleChanges = (event) => {
    event.persist();

    const newFormData = {
      ...formState,
      [event.target.name]: event.target.value,
    };

    validateChange(event);
    setFormState(newFormData);
  };

  const validateChange = (event) => {
    yup
      .reach(formSchema, event.target.name)
      .validate(
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value
      )
      .then((valid) => {
        //  the input is passing
        // the reset of that input's error
        setErrors({ ...errors, [event.target.name]: '' });
      })
      .catch((err) => {
        //  the input is breaking formSchema
        console.log('err', err);
        setErrors({ ...errors, [event.target.name]: err.errors[0] });
      });
  };

  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      console.log('valid?', valid);
      setIsButtonDisabled(!valid);
    });
  }, [formState]);

  const formSubmit = (event) => {
    const stringData = {...formState};
    event.preventDefault();
    console.log('form submitted');
    axios.post('https://best-buds.herokuapp.com/predict', stringData)
      .then((response) => {
        history.push("/StrainsList");
        console.log(stringData);
       
        setFormState({
          
          type: '',
          depression: '',
          inflammation: '',
          insomnia: '',
          lackofappetite: '',
          pain: '',
          nausea: '',
          creative: '',
          energetic: '',
          euphoric: '',
          focused: '',
          happy: '',
          hungry: '',
          relaxed: '',
        });
        setServerError(null);
        history.push("/StrainsList");
      })
      .catch((error) => {
        setServerError('404 error');
        console.log(error)
      });
  };
  return (
    <form onSubmit={formSubmit}>
      <h1>Fill out to get recommended strains</h1>
      <label htmlFor='type'>
        Choose Type:
        <select
          name='type'
          id='type'
          data-cy='type'
          value={formState.type}
          onChange={handleChanges}
        >
          {/* value not used just a place slection of strain */}
          <option value=''>
            Choose strain type
          </option>
          <option name='indica' value='indica'>
            Indica
          </option>
          <option name='sativa' value='sativa'>
            Sativa
          </option>
          <option name='hybrid' value='hybrid'>
            Hybrid
          </option>
        </select>
      </label>

      <div className=''>
        <h2>Conditions to be treated</h2>

        <label htmlFor='depression' className='effectsChkBox'>
          <input
            type='checkbox'
            name='depression'
            data-cy='depression'
            id='depressionSelect'
            checked={formState.depression}
            onChange={handleChanges}
          />
          Depression
        </label>

        <label htmlFor='inflammation' className='effectsChkBox'>
          <input
            type='checkbox'
            name='inflammation'
            data-cy='inflammation'
            id='inflammationSelect'
            checked={formState.inflammation}
            onChange={handleChanges}
          />
          Inflammation
        </label>

        <label htmlFor='insomnia' className='effectsChkBox'>
          <input
            type='checkbox'
            name='insomnia'
            data-cy='insomnia'
            id='insomniaSelect'
            checked={formState.insomnia}
            onChange={handleChanges}
          />
          Insomnia
        </label>

        <label htmlFor='lackofappetite' className='effectsChkBox'>
          <input
            type='checkbox'
            name='lackofappetite'
            data-cy='lackofappetite'
            id='lackofappetiteSelect'
            checked={formState.lackofappetite}
            onChange={handleChanges}
          />
          Lack of appetite
        </label>

        <label htmlFor='pain' className='effectsChkBox'>
          <input
            type='checkbox'
            name='pain'
            data-cy='pain'
            id='painSelect'
            checked={formState.pain}
            onChange={handleChanges}
          />
          Pain
        </label>

        <label htmlFor='nausea' className='effectsChkBox'>
          <input
            type='checkbox'
            name='nausea'
            data-cy='nausea'
            id='nauseaSelect'
            checked={formState.nausea}
            onChange={handleChanges}
          />
          Nausea
        </label>
      </div>

      <div>
        {/* <div className='toppingChecklist'> */}
        <h2>Choose desired effect(s)</h2>
        <label htmlFor='creative' className='effectsChkBox'>
          <input
            type='checkbox'
            name='creative'
            data-cy='creative'
            id='creativeSelect'
            // using the checked property insted of value for check boxes so they return the expected bollean
            checked={formState.creative}
            onChange={handleChanges}
          />
          Creative
        </label>

        <label htmlFor='energetic' className='effectsChkBox'>
          <input
            type='checkbox'
            name='energetic'
            data-cy='energetic'
            id='energeticSelect'
            checked={formState.energetic}
            onChange={handleChanges}
          />
          Energetic
        </label>

        <label htmlFor='euphoric' className='effectsChkBox'>
          <input
            type='checkbox'
            name='euphoric'
            data-cy='euphoric'
            id='euphoricSelect'
            checked={formState.euphoric}
            onChange={handleChanges}
          />
          Euphoric
        </label>

        <label htmlFor='focused' className='effectsChkBox'>
          <input
            type='checkbox'
            name='focused'
            data-cy='focused'
            id='focusedSelect'
            checked={formState.focused}
            onChange={handleChanges}
          />
          Focused
        </label>

        <label htmlFor='happy' className='effectsChkBox'>
          <input
            type='checkbox'
            name='happy'
            data-cy='happy'
            id='happySelect'
            checked={formState.happy}
            onChange={handleChanges}
          />
          Happy
        </label>

        <label htmlFor='hungry' className='effectsChkBox'>
          <input
            type='checkbox'
            name='hungry'
            data-cy='hungry'
            id='hungrySelect'
            checked={formState.hungry}
            onChange={handleChanges}
          />
          Hungry
        </label>

        <label htmlFor='relaxed' className='effectsChkBox'>
          <input
            type='checkbox'
            name='relaxed'
            data-cy='relaxed'
            id='relaxedSelect'
            checked={formState.relaxed}
            onChange={handleChanges}
          />
          Relaxed
        </label>
      </div>

      <button
        type='submit'
        name='submit'
        data-cy='submit'
        disabled={isButtonDisabled}
      >
        Submit
      </button>
    </form>
  );
}