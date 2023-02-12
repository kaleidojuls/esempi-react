import "./Card.css";
import Button from '../Button/Button';

const Card = ({ cardButtonText, cardBtnOnClick }) => {
    return <div className='myCard card m-2'>
        <h3 className='card-title'>Titolo Card</h3>
        <Button btnOnClick={cardBtnOnClick}>{cardButtonText}</Button>
    </div>
}

export default Card;