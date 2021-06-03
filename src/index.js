// Import required React libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

/**
 * Prop Libraries
 */
import CommentDetailProp from './CommentDetailProp';

/**
 * Title Heading
 */
const titleSection = 'Comments';

/**
 * Styling Variables
 */
const mainDivStyle = { marginTop: '20px', padding: '20px' };

const divStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
};

// const commentStyle = {
//   padding: '15px',
//   margin: '20px',
//   border: '1px solid black',
//   borderRadius: '10px',
//   width: '22%',
//   height: '15%',
// };

var options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

const Comment = () => {
  return (
    <div className="comment">
      <CommentDetailProp
        author={faker.name.firstName}
        theDate={faker.date.past().toLocaleDateString('en-US', options)}
        text={faker.lorem.words(3)}
        myImg={faker.image.avatar()}
      />
    </div>
  );
};

// Create the required component
const App = () => {
  return (
    <div className="ui container comments" style={{ marginTop: '5%' }}>
      <h2 class="ui dividing header">{titleSection}</h2>
      <div style={{ fontSize: '1.67rem', margin: '5%' }}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

// Render the required content on the screen
ReactDOM.render(<App />, document.getElementById('root'));
