import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import { formatDate } from '/imports/helpers/date';

const BotsListItem = ({
  _id,
  name,
  world,
  server,
  createdAt: date,
}) => (
  <div className="col-sm-12">
    <div className="list-group">
      <Link to={`/dashboard/bots/${_id}`} className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{name}</h5>
          <small>Server: {server} - {world}</small>
        </div>
        <p className="mb-1">Created at: {formatDate({ date })}</p>
      </Link>
    </div>
  </div>
);

BotsListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  world: PropTypes.string.isRequired,
  server: PropTypes.string.isRequired,
  createdAt: PropTypes.object.isRequired,
};

export default BotsListItem;
