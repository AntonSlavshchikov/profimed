import { faHardDrive } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ListEmpty = () => {
    return(
        <div className="list__empty">
            <FontAwesomeIcon className='empty__icon' icon={faHardDrive} />
            <h6 className="empty__text">Cписок пуст...</h6>
        </div>
    );
}