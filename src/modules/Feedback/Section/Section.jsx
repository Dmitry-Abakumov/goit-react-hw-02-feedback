import PropTypes from 'prop-types';

import Box from 'shared/components/Box/Box';
import Title from './Section.styled';

const Section = ({ children }) => {
  return (
    <Box
      p={50}
      display="flex"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
      as="section"
    >
      <Title>Please leave fedback</Title>
      {children}
    </Box>
  );
};

export default Section;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
