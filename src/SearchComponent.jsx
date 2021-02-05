import React , { Component } from 'react';
import Chip from '@material-ui/core/Chip';



export default class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits : [],
            inputText: "",
            fruitOptions: ['Mango','Apple','Grape','Orange'],
            selectedFruits: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch(`api/fruits`)
            .then((response) => response.json())
            .then(fruits => console.log(fruits));
    }

    handleChange (e) {
        this.setState({
            inputText: e.target.value,
            fruitOptions: this.state.fruits.filter(fruit => fruit.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)
        });
        const selectedFruit = this.state.fruitOptions.find(fruit => fruit.toLowerCase() === e.target.value.toLowerCase());
        if (selectedFruit && this.state.selectedFruits.indexOf(selectedFruit)===-1) {
                this.setState({
                    selectedFruits: [...this.state.selectedFruits,selectedFruit]
                });
        }
    }

    render() {
        return (<div>
            <label>Search fruits: </label>
            <input type="text" id="searchBar" placeholder="New fruit..." value={this.state.inputText} onChange={this.handleChange} list="fruits"/>
            <datalist id="fruits">
                {this.state.fruitOptions.map((fruit,index) => (<option key={index} value={fruit}>{fruit}</option>))}
            </datalist>
            {this.state.selectedFruits.map((fruit) => (<Chip label={fruit}/>))}
        </div>);
    }
}