import {dishes} from '../utility/dishes'
import Dish from './Dish'
function Restaurant(props) {

    return (
    <div>
        <h1 className='title' >{props.name}</h1>
        <Dish menu = {dishes}/>
    </div>
    )
}

export default Restaurant;