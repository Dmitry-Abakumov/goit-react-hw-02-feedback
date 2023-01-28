import PropTypes from 'prop-types';

import Box from 'shared/components/Box/Box';
import Item from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h3>Statistics</h3>
      <Box mt={10} as="ul">
        <Item>
          <p>Good: {good}</p>
        </Item>
        <Item>
          <p>Neutral: {neutral}</p>
        </Item>
        <Item>
          <p>Bad: {bad}</p>
        </Item>
        <Item>
          <p>Total: {total}</p>
        </Item>
        <Item>
          <p>Positive feedback: {positivePercentage || 0}%</p>
        </Item>
      </Box>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
