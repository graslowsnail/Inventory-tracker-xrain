import { Link } from 'react-router-dom';

const UserItem = props => {

    return (
        <li className='user-item'>
            <div className='user-item__content'>
                <Link to={ `/${props.id}/places` }>
                    <div className='user-item__info'>
                        <h2>{props.name}</h2>
                        <h3>
                            {props.partCount} {props.partCount === 1 ? 'Part' : 'Parts'}
                        </h3>
                    </div>
                </Link>
            </div>
        </li>
    );
};

export default UserItem;
