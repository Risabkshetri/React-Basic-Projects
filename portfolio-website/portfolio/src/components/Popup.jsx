import PropTypes from 'prop-types';

const Popup = ({ show, position, children }) => {
  if (!show) return null;

  const popupStyles = {
    position: 'absolute',
    transform: 'translateY(100%)',
  };

  return (
    <div style={popupStyles} className="bg-white p-4 rounded shadow-lg">
      {children}
    </div>
  );
};

Popup.propTypes = {
  show: PropTypes.bool.isRequired,
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default Popup;
