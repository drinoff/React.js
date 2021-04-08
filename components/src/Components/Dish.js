function Dish(props){
    return props.menu.map(x=><p>{x}</p>);
}

export default Dish;