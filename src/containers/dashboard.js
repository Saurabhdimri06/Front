import React from "react"
import Header from '../components/header'
// import Menu from '../components/menu'
import PreviousOrders from '../components/previousOrders'
import Footer from '../components/footer'

class Dashboard extends React.Component{

    render(){
        return(
            <div>
                <Header />
                {/* <Menu /> */}
                <PreviousOrders />

                <Footer />
            </div>
        )
    }
}

export default Dashboard