import React from 'react';
import PropTypes from 'prop-types';
import PzElement from './PzElement.jsx';
import styles from './main.css';


const PzSlider = (props) => {
  PzSlider.propTypes = {
    items: PropTypes.array.isRequired,
  };
  const { items } = props;
  return (
    <div>
      <h3 className={styles.title}>Customers who bought this item also bought</h3>
      <div className={styles.main}>
        {items.map(elem => (
          <div className={styles.menu}>
            <PzElement element={elem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PzSlider;
