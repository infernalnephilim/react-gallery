import React, {Component} from 'react';
import logo from './logo.svg';
import './ReactGallery.css';

const projectsData = [{
    id: 1,
    title: 'Dermina',
    category: 'web',
    imageURL: 'img/dermina_featured3.jpg',
    siteURL: '#d'
}, {
    id: 2,
    title: 'JingleX',
    category: 'web',
    imageURL: 'img/jinglex_featured3.jpg',
    siteURL: '#'
}, {
    id: 3,
    title: 'JingleX 2017',
    category: 'web',
    imageURL: 'img/jinglex_old_featured.jpg',
    siteURL: '#'
}, {
    id: 4,
    title: 'Lista zakupów',
    category: 'app',
    imageURL: 'img/lista-zakupow_featured.jpg',
    siteURL: '#'
}];

class Item extends Component {
    render() {
        return (
            <div className="ReactGallery__item" data-category={this.props.category}>
                <img src={this.props.imageURL}/>
                <span className="ReactGallery-item__title">
                    {this.props.title}
                </span>
                <a className="ReactGallery-item__details" href={this.props.siteURL}>
                    Szczegóły
                </a>
            </div>
        )
    }
}

class FilterPanel extends Component {
    render() {
        return (
            <a onClick={this.props.onClick}>{this.props.category}</a>
        )
    }
}

class ReactGallery extends Component {
    constructor(props) {
        super(props);
        let projectCategories = [];
        projectsData.forEach(function (el) {
            if (projectCategories.indexOf(el.category) === -1) projectCategories.push(el.category);
        });
        this.state = {
            displayedItems: projectsData,
            categories: projectCategories,
            selectedCategory: this.selectCategory
        }

    }

    selectCategory(element) {
        console.log(this.state.selectedCategory);
        console.log(element);
        const categoryName = element.toLowerCase();
        console.log(categoryName);
        let displayedCategories = projectsData.filter(function (el) {
            return el.category.toLowerCase().indexOf(categoryName) !== -1;
        });
        this.setState({
            displayedItems: displayedCategories
        });
    }

    resetFilters() {
        this.setState({
            displayedItems: projectsData
        });
    }

    render() {
        return (
            <div className="ReactGallery">
                <header className="ReactGallery__header">
                    <h2>React Gallery</h2>
                </header>
                <div className="ReactGallery__filter">
                    {
                        this.state.categories.map(function (el, i) {
                            let click = this.state.selectedCategory.bind(this, el);
                            return <FilterPanel onClick={click} category={el} key={i}/>
                        }, this)
                    }
                    <a className="filter__btn filter__btn--reset" onClick={this.resetFilters.bind(this)}>
                        Pokaż wszystkie
                    </a>
                </div>
                <div className="ReactGallery__content">
                    {
                        this.state.displayedItems.map(function (el) {
                            return <Item key={el.id} imageURL={el.imageURL} category={el.category} title={el.title}
                                         siteURL={el.siteURL}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ReactGallery;