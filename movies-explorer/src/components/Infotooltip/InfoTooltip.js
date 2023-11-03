import failed from '../../images/failed.png';
import success from '../../images/success.png';
import './InfoTooltip.css';

function InfoTooltip(props) {

  return (
    <div className={`popup ${props.isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <img className="popup__image"
          alt={props.isSuccess ? "success" : "failed"}
          src={props.isSuccess ? success : failed} />
        <h2 className="popup__text">{props.message}</h2>
        <button className="popup__close-button" type="button" aria-label="Закрыть" onClick={props.onClose}></button>
      </div>
    </div>)
}

export default InfoTooltip;