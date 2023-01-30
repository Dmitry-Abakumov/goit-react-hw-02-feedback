import PropTypes from 'prop-types';

import Box from 'shared/components/Box/Box';
import Button from 'shared/components/Button/Button';

const FeedbackOptions = ({ options, onFeedbackBtnClick }) => {
  return (
    <Box display="flex" gridGap={10} mb={10} as="ul">
      {options.map(option => (
        <li key={option}>
          <Button option={option} onClick={onFeedbackBtnClick} type="button" />
        </li>
      ))}
    </Box>
  );
};

export default FeedbackOptions;

FeedbackOptions.defaultProps = {
  options: [],
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onFeedbackBtnClick: PropTypes.func.isRequired,
};
