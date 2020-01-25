import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { Responsive, Segment} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './TimeInput.css';

function TimeInput({ value, onChange, onStart }) {
  return (
    <Form className="time-input">
      <Form.Field inline> 
      <Responsive as={Form}  >
        <label><b>Countdown:</b></label>
        <Input placeholder="(Min)" onChange={onChange} value={value} type="number" />
        <Button onClick={onStart} positive size="massive">
          Start
        </Button>
        </Responsive> 
 
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