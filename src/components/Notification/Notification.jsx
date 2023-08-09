import PropTypes from 'prop-types';
import style from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <>
      <p className={style.notificationMsg}>{message}</p>
    </>
  );
};

Notification.prototyps = {
  message: PropTypes.string.isRequired,
};

export default Notification;
