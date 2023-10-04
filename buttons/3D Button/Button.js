import React from 'react';

function Button(props) {
    return (
      <button onClick={props.talk}>
        Click me!
      </button>
    );
}

export default Button;