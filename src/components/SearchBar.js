import React from 'react';

class SearchBar extends React.Component{
    state={term:''};


    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
     };

    render(){
        return(
            <div className="search-bar ui segment" style={{backgroundColor:"#444"}}>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className="field">
                        <label style={{color:"#fff"}}>Video Search</label>
                        <input type='text' value={this.state.term} onChange={e => this.setState({term: e.target.value.toUpperCase()})}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;