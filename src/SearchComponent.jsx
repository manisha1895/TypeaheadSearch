import React , { Component } from 'react';
import Chip from '@material-ui/core/Chip';

export default class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits : [],
            inputText: "",
            fruitOptions: [],
            selectedFruits: []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch(`http://localhost:8080/api/fruits`)
            .then((response) => response.json())
            .then(fruits => {
                console.log(fruits);
                this.setState({
                    fruits
                });
            });
    }

    handleChange (e) {
        this.setState({
            inputText: e.target.value,
            fruitOptions: this.state.fruits.filter(fruit => fruit.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)
        },function (){
            const selectedFruits = this.state.fruitOptions.filter(fruit => fruit.name.toLowerCase() === e.target.value.toLowerCase());
            console.log('matched fruits',selectedFruits);
            // if (selectedFruits && this.state.selectedFruits.indexOf(selectedFruits)===-1) {
            this.setState({
                selectedFruits: [...this.state.selectedFruits,...selectedFruits]
            });
            // }
        });

    }

    render() {
        return (<div>
            <label>Search fruits: </label>
            <input type="text" id="searchBar" placeholder="New fruit..." value={this.state.inputText} onChange={this.handleChange} list="fruits"/>
            <datalist id="fruits">
                {this.state.fruits.map((fruit,index) => (<option key={index} value={fruit.name}>{fruit.name}</option>))}
            </datalist>
            {this.state.selectedFruits.map((fruit,index) => (<Chip key={index} label={fruit.name}/>))}
        </div>);
    }
}