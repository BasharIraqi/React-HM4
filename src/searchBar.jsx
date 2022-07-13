import React, { Component } from 'react';
import Combobox from "react-widgets/Combobox";
import Dropdown from 'react-bootstrap/Dropdown';


export default class SearchBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            optionSort: ''
        }
    }

    render() {
        return (
            <form style={{ border: "1px solid blue", padding: "10px" }}>

                <input className="form-control" placeholder="search..."
                    type="text"
                    style={{ width: "100%" }}
                    value={this.props.filterText}
                    onChange={this.handleFilterChanged}>
                </input>


                <table style={{ width: "100%" }}>
                    <tr>
                        <td style={{ width: "50px" }}>

                            <input style={{ width: "50px", top: "-" }} onChange={this.handleInStockChanged}
                                type="checkbox"
                                checked={this.props.inStockOnly} />
                            <label>Is In Stock</label>
                        </td>
                        <td style={{ width: "50px" }}>
                            <input style={{ width: "50px", top: "-" }} onChange={this.handleSortByElcted}
                                type="checkbox"
                                checked={this.props.inSortElec} />
                            <label>Electronics</label>
                        </td>
                        <td style={{ width: "50px" }}>
                            <input style={{ width: "50px", top: "-" }} onChange={this.handleSortBySport}
                                type="checkbox"
                                checked={this.props.inSortSport} />
                            <label>Sport</label>
                        </td>
                        <td style={{ width: "50px" }}>
                            <Dropdown>
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                    Sort By
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item><button className='btn btn-primary' onClick={this.handleSelectSortByName}>Name</button></Dropdown.Item>
                                    <Dropdown.Item><button className='btn btn-primary' onClick={this.handleSelectSortByPrice}>Price</button></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                        <td style={{ width: "50px" }}>
                            <Dropdown>
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                    Category Sort
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item><button className='btn btn-primary' onClick={this.handleSortByElectronics}>Electronics</button></Dropdown.Item>
                                    <Dropdown.Item><button  className='btn btn-primary' onClick={this.handleSortBySports}>Sporting Goods</button></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                </table>
            </form>
        )
    }
    handleSortByElectronics = (e) => {
        e.preventDefault();
     this.props.sortByCategory('Electronics');
    }
    handleSortBySports = (e) => {
        e.preventDefault();
        this.props.sortByCategory('Sporting Goods');
    }
    handleSelectSortByName = (e) => {
        this.props.sortBy("Name");
    }
    handleSelectSortByPrice = () => {
        this.props.sortBy("Price");
    }
    handleFilterChanged = (e) => {
        let filterValue = e.target.value;
        this.props.onFilterChanged(filterValue);

    }

    handleInStockChanged = (e) => {
        let isChecked = e.target.checked;
        this.props.onInStockChanged(isChecked);
    }
    handleSortByElcted = (e) => {
        let isChecked = e.target.checked;
        this.props.sortEelec(isChecked);
    }
    handleSortBySport = (e) => {
        let isChecked = e.target.checked;
        this.props.sortSport(isChecked);
    }


}