import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './TimeInput.css';

function TimeInput({ value, onChange, onStart }) {
  // TODO: Add validation error messages

  return (
    <Form className="time-input">
      <Form.Field inline>
        <label>Countdown:</label>
        <Input placeholder="(Min)" onChange={onChange} value={value} />
        <Button onClick={onStart} success>
          Start
        </Button>
      </Form.Field>
    </Form>
  );
}

TimeInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onStart: PropTypes.func,
};

export default TimeInput;
