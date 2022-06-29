import { Component } from "react";
import {
    Row,
    Col,
    Card,
    CardBody
} from "reactstrap"
import {
    SearchOutlined,
    DeleteOutlined,
    EditOutlined,
    BookOutlined
  } from '@ant-design/icons';
  import './index.css';
  
class Header extends Component {

    render () {
        return (
            <div className="row">
                <div className="col4">
                    <Card body className="card1">
                        <CardBody>
                            <div style={{display:"flex"}}>
                            <div className="searchicon">
                            <SearchOutlined style={{margin:"2rem"}}/>
                            </div>
                            <div className="mailname">
                                <h3 style={{textAlign:"center",marginTop:"20px"}}>Spam Mail Project</h3>
                            </div>
                            </div>
                        </CardBody>
                    </Card>
                </div>
                <div className="col6">
                    <Card body className="card2">
                        <CardBody>
                        <div style={{display:"flex"}}>
                        <div style={{width: "65%"}}>
                        <h3 style={{margin:"20px 0px 0px 20px"}}>Spam Mail Project</h3>
                        </div>
                        <div>
                            <span style={{float:"right",margin:"20px 0px 0px 20px"}}>
                            Author Name : Nagarajan More <br/>
                            Created On : DD/MM/YYYY <br/>
                            Last Updated On: DD/MM/YYYY
                            </span>
                           
                        </div>
                        </div>
                        <div style={{display:"flex", margin: "1rem", paddingBottom: "1rem"}}>
                            <BookOutlined/>
                            <EditOutlined style={{marginLeft: "10px"}}/>
                            <DeleteOutlined style={{marginLeft: "10px"}}/>
                        </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Header
