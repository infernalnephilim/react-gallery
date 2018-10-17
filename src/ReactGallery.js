import React, {Component} from 'react';
import './ReactGallery.css';

const projectsData = [{
    id: 1,
    title: 'Dermina',
    category: 'strony internetowe',
    imageURL: 'img/dermina_featured3.jpg',
    siteURL: 'http://aleksandra-poltorak.pl/portfolio/dermina.html'
}, {
    id: 2,
    title: 'JingleX',
    category: 'strony internetowe',
    imageURL: 'img/jinglex_featured3.jpg',
    siteURL: 'http://aleksandra-poltorak.pl/portfolio/jinglex.html'
}, {
    id: 3,
    title: 'JingleX 2017',
    category: 'strony internetowe',
    imageURL: 'img/jinglex_old_featured.jpg',
    siteURL: 'http://aleksandra-poltorak.pl/portfolio/jinglex2017.html'
}, {
    id: 4,
    title: 'Lista zakupów',
    category: 'aplikacje',
    imageURL: 'img/lista-zakupow_featured.jpg',
    siteURL: 'http://aleksandra-poltorak.pl/portfolio/lista-zakupow.html'
}];

class Item extends Component {
    render() {
        return (
            <div className="ReactGallery__item" data-category={this.props.category}>
                <img src={this.props.imageURL}/>
                <span className="ReactGallery-item__title">
                    {this.props.title}
                </span>
                <span className="ReactGallery-item__description">
                        {this.props.title}
                        </span>
                <div className="ReactGallery-item__details">
                    <a className="button" href={this.props.siteURL}>
                        Szczegóły
                    </a>
                </div>
            </div>
        )
    }
}

class FilterPanel extends Component {
    render() {
        return (
            <a className="button button-dark" onClick={this.props.onClick}>{this.props.category}</a>
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
                <div className="ReactGallery__filter">
                    <span className="ReactGallery__filter-header">Filtruj:</span>
                    {
                        this.state.categories.map(function (el, i) {
                            let click = this.state.selectedCategory.bind(this, el);
                            return <FilterPanel onClick={click} category={el} key={i}/>
                        }, this)
                    }
                    <a className="button button-dark filter__btn filter__btn--reset"
                       onClick={this.resetFilters.bind(this)}>
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