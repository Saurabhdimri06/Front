import React from "react"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';


class Menu extends React.Component{
    constructor(){
        super()
        this.state = {
            menu : [],
            isloaded: false,
            count: 0
        }
        this.handleClickAdd = this.handleClickAdd.bind(this)
        this.handleClickRemove = this.handleClickRemove.bind(this)
    }

    componentDidMount(){
        fetch(`http://localhost:1337/menus`)
        .then(res => res.json())
        .then(json => {
                this.setState({
                    isloaded: true,
                    menu: json
                })
            })
        }

    handleClickAdd(){
        this.setState({
            count: this.state.count+1
        })
    }
    
    handleClickRemove(){
        this.setState({
            count: this.state.count-1
        })
    }

    render(){
        return(
            <div className="menuwrapper">
                <div className="menucontainer">
                    <br />
                    <table>
                        <tr>
                            <td>Item</td>
                            <td>Price</td>
                        </tr>
                        {this.state.menu === null ? <p>No Entries Found.</p> :
                            this.state.menu.map(item => 
                                <tr key={item.id}>
                                    <td>{item.Item}</td>
                                    <td>{item.Price}</td>
                                    <td>
                                        <button onClick={this.handleClickAdd()}><AddCircleIcon /></button>
                                        <button onClick={this.handleClickRemove()}><RemoveCircleIcon /> </button>
                                    </td>
                                </tr>
                            )
                        }
                    </table>
                </div>
            </div>
        )
    }
}

export default Menu
