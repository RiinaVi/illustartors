import React from "react";
// @ts-ignore
import Search from '../../public/img/search.svg'
// @ts-ignore
import Close from '../../public/img/close.svg';

const SearchBox = ({searchValue, setSearchValue, setSearchFilters}) => {


    const closeHandler = () => {
        setSearchValue('');
        setSearchFilters(false)
    }
    const valueSetter = e => setSearchValue(e.target.value);

    return (
        <div className={'searchContainer'}>
            <div className={'inputContainer'}>
                <Search/>
                <input type="text" value={searchValue}
                       placeholder={'Search illustrations'}
                       onChange={valueSetter}
                />
                {searchValue && <div className={'close'} onClick={closeHandler}><Close/></div>}
            </div>
            <div className="select">
                <select name="style" id="style">
                    <option value="All styles">All styles</option>
                    <option value="3D">3D</option>
                    <option value="Minimal">Minimal</option>
                    <option value="Noise">Noise</option>
                    <option value="Pencil">Pencil</option>
                </select>
            </div>
        </div>
    )
}

export default SearchBox;