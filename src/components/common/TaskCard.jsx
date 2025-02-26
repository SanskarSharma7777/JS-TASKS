import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function TaskCard({ title, body, linkUrl, children }) {
  return (
    <div className='bg-blue-100 m-4 p-6 rounded-lg shadow-xl hover:shadow-sm transition-all'>
      <h1 className='text-2xl'>{title}</h1>
      <p>{body}</p>
      
        {children}
    
      <Link to={linkUrl}>
        <button className='bg-blue-400 hover:bg-blue-300 rounded-lg p-4 mt-4'>
          Go...
        </button>
      </Link>
    </div>
  );
}

TaskCard.propTypes = {
  linkUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  children: PropTypes.node
};
