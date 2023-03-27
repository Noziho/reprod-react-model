import './Categories.css';

export const Categories = () => {
    return(
      <div className="categoriesSelector">
          <select name="categories" id="categories">
              <option value="">Catégories</option>
              <option>Test</option>
          </select>
      </div>  
    );
}