import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const PoweredByNeuralStream = ({ poweredByImage, poweredByImageStyle }) => (
  <a
    href="https://neural-stream.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="rw-powered-by"
  >
    {poweredByImage && (
      <img
        src={poweredByImage}
        alt="Powered by Neural Stream"
        className="rw-powered-by-image"
        style={poweredByImageStyle}
      />
    )}
    {!poweredByImage && (
      <span>Powered by Neural Stream</span>
    )}
  </a>
);

PoweredByNeuralStream.propTypes = {
  poweredByImage: PropTypes.string,
  poweredByImageStyle: PropTypes.shape({})
};

PoweredByNeuralStream.defaultProps = {
  poweredByImage: null,
  poweredByImageStyle: {}
};

export default PoweredByNeuralStream; 