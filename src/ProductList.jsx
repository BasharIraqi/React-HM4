import React, { Component } from 'react'
import ProductsTable from './productsTable'
import SearchBar from './searchBar'


let productsData = [
    { category: "Sporting Goods", price: 49.99, stocked: true, name: "Football" },
    { category: "Sporting Goods", price: 9.99, stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: 29.99, stocked: false, name: "Basketball" },
    { category: "Electronics", price: 99.99, stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: 399.99, stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: 199.99, stocked: true, name: "Nexus 7" }
];



export default class FilteredProductList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            filterText: '',
            inStockOnly: false,
            sortElec: false,
            sortSport: false,
            products: productsData
        }
    }

    render() {
        return (
            <div style={{ border: "1px solid yellow", padding: "20px" }}>
                <SearchBar onFilterChanged={this.filterChanged}
                    onInStockChanged={this.inStockChanged}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    sortEelec={this.sortByElcted}
                    sortSport={this.sortBySport}
                    inSortElec={this.state.sortElec}
                    inSortSport={this.state.sortSport}
                    sortBy={this.sortBy}
                    sortByCategory={this.sortByCategory}
                ></SearchBar>
                <ProductsTable
                    products={this.state.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly} 
                    onDelete={this.deleteProduct}
                    />


            </div>
        )
    }
    deleteProduct = (name) => {
        let products = this.state.products.filter(product => product.name !== name)
        this.setState({ products })
        localStorage.setItem('products', JSON.stringify(products))
    }
    sortByCategory = (category) => {
        if(category === 'Electronics'){
            this.setState({products: productsData.filter(product => product.category === 'Electronics')})
        }
        else if(category === 'Sporting Goods'){
            this.setState({products: productsData.filter(product => product.category === 'Sporting Goods')})
        }
        else{
            this.setState({products: productsData})
        }
    }
    sortBy = (sortby) => {
        if(sortby === 'Name'){
            this.setState({
                products: this.state.products.sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                }),
                sortElec: false,
                sortSport: false,
                sortBy: 'Name'

            })
        }
        else if(sortby === 'Price'){
            this.setState({
                products: this.state.products.sort((a, b) => {
                    if (a.price < b.price) return -1;
                    if (a.price > b.price) return 1;
                    return 0;
                }),
            })
        }
    }

    sortByElcted = (isSortByElec) => {
        this.setState({ sortElec: isSortByElec })
        if (isSortByElec) {
            this.setState({
                products: productsData.filter(product => {
                    return product.category === "Electronics"
                }
                )
            })
        }
        else {
            this.setState({ products: productsData })
        }
    }
    sortBySport = (isSortBySport) => {
        this.setState({ sortSport: isSortBySport })
        if (isSortBySport) {
            this.setState({
                products: productsData.filter(product => {
                    return product.category === "Sporting Goods"
                }
                )
            })
        }
        else {
            this.setState({ products: productsData })
        }
    }
    //Callback From SearchBar
    filterChanged = (filterTextInput) => {
        this.setState({ filterText: filterTextInput });
    }

    //Callback From SearchBar
    inStockChanged = (inStockInput) => {
        this.setState({ inStockOnly: inStockInput });
    }

}