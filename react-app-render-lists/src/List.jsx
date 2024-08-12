import PropTypes from 'prop-types';

function List(props) {
    // // Ex 1. --------------------
    // const fruits  = ["apple", "orange", "banana", "coconut", "pineapple"];
    // fruits.sort();
    // const listItems = fruits.map(fruit => <li>{fruit}</li>);
    // return(<ol>{listItems}</ol>);
    // // --------------------------

    // // Ex. 2 ---------------------
    // const fruits  = [{id: 1, name:"apple", calories: 95}, 
    //                 {id: 2, name: "orange", calories: 45}, 
    //                 {id: 3, name: "banana", calories: 105}, 
    //                 {id: 4, name: "coconut", calories: 159}, 
    //                 {id: 5, name: "pineapple", calories: 37}];
    
    // // Sorts & Filters
    // //fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
    // //fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical
    // //fruits.sort((a, b) => a.calories - b.calories); // Numeric
    // //fruits.sort((a, b) => b.calories - a.calories); // Reverse Numeric

    // //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    // //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    
    // const listItems = fruits.map(fruit => <li key={fruit.id}>
    //                                         {fruit.name}: &nbsp;
    //                                         <b>{fruit.calories}</b></li>);

    // return(<ol>{listItems}</ol>);
    // //----------------------------

    
    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                    {item.name}: &nbsp;
                                    <b>{item.calories}</b></li>);

    return(<>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>);
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                        name: PropTypes.string,
                                        calories: PropTypes.number})),
}
List.defaultProps = {
    category: "Category",
    items: [],
}
export default List