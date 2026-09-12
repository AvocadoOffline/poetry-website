import './App.css'
import { Row, Col } from 'antd'

export const Footer = () => {
    return (
        <Row>
            <Col span={24} className = "footer" style={{textAlign: "center", alignItems: "center"}}>
                <a href = "https://www.threads.com/@mykull4088" target = "_blank">
                    <div>
                        All by Michael
                    </div>
                </a>
            </Col>
        </Row>  
    )  
}