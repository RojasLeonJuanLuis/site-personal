import React from 'react';
import Projects from '../components/projects/Projects';
import useDocumentTitle from '../hooks/useDocumentTitle';

function Portfolio() {
  useDocumentTitle('Portfolio');
  return (
    <div>
      <Projects />
    </div>
  );
}
export default Portfolio;
