import React, { useState } from 'react';
import ReactSelect from 'react-select';
import Layout from '../../common/Layout';

import bgImage from '../../../images/new-workout.jpg';
import Field from '../../ui/Field/Field';
import Button from '../../ui/Button/Button';

import { Link } from 'react-router-dom';

const NewWorkout = () => {
  const [name, setName] = useState('');
  const [exercises, setExercises] = useState();

  const handleSubmit = () => {
    alert('submit');
  };
  return (
    <>
      <Layout bgImage={bgImage} heading='Create new workout' />
      <div className='wrapper-inner-page'>
        <form onSubmit={handleSubmit}>
          <Field type='text' placeholder='Enter name' value={name} onChange={e => setName(e.target.value)} />
          <Link to='new-exercise' className='dark-link'>
            Add new exercise
          </Link>
          <ReactSelect
            classNamePrefix='select2-selection'
            placeholder='Exercises...'
            title='Exercises'
            options={[
              { value: 'sdasdas', label: 'Push-ups' },
              { value: 'asd', label: 'Pull-ups' },
            ]}
            value={exercises}
            onChange={setExercises}
            isMulti={true}
          />
          <Button text='Create' callback={() => {}} />
        </form>
      </div>
    </>
  );
};

export default NewWorkout;
