import css from "./SearchBox.module.css"

function SearchBox({onFind}) {


  return <div className={css.find}>
    <label htmlFor="text">Find contacts by name</label>
    <input onChange={(e)=>onFind(e.target.value)} type="text" id="text"/>
    </div>
}
export default SearchBox;
