import React, { Component } from 'react';

const scoreReducer = function(state={scores:[]}, action){
  switch(action.type){
    case 'PULL_SCORES':
      return {scores: action.scores}
    default:
      return state;
  }
}

export default scoreReducer;
