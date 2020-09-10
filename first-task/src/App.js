import React, { useState } from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the course'},
    {id: 'cg2', text: 'Learn all about the course'},
    {id: 'cg3', text: 'Help other students Q&A'}
  ]);

  const addNewGoalHandler = (NewGoal) => {
    // setCourseGoals(courseGoals.concat(NewGoal));
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(NewGoal));
  };


  return (
  <div className="course-goals">
    <h2>Course Goals</h2>
    <NewGoal onAddGoal={addNewGoalHandler} />
    <GoalList goals={courseGoals} />
  </div>
  );
};

export default App;
