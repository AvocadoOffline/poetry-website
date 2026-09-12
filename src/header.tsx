import './App.css'
import { Row, Col } from 'antd'

export const Header = () => {
    return (
        <Row>
            <Col span={24} className = "header" style={{textAlign: "center", alignItems: "center"}}>
                <div>享盡人生美好歡樂，此乃大善！</div>
                <div>熬遍世間苦難憂愁，同樣大善！</div>
                <div>哪怕事後發現不過是兜兜轉轉，走了一圈繞回原地，</div>
                <div>也是頭等功夫，豈不美哉？豈非善哉？</div>
                <div>詩詞歌賦，為心中所想，唯我琉璃心之證</div>
            </Col>

        </Row>  
    )  
}