// task_0/dashboard/src/CourseList/CourseListRow.js

import React from 'react';
import PropTypes from 'prop-types';

const rowStyle = {
  backgroundColor: '#f5f5f5ab', // Background color for regular rows
};

const headerRowStyle = {
  backgroundColor: '#deb5b545', // Background color for header row
};

const CourseListRow = ({ textFirstCell, textSecondCell, isHeader }) => {
  return (
    <tr style={isHeader ? headerRowStyle : rowStyle}>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string.isRequired,
  isHeader: PropTypes.bool,
};

CourseListRow.defaultProps = {
  isHeader: false,
};

export default CourseListRow;
