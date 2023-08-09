import PropTypes from 'prop-types';

const Section = ({ children, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <div>{children}</div>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;
