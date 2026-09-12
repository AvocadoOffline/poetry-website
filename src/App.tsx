import {Poetry} from "./Poetry"
import { poems } from './poems'
import './App.css'
import { Divider, Row, Col } from 'antd'
import { Header } from "./header"
import { Footer } from "./footer"

function App() {

  return (
    <div style = {{margin: "50px 20px"}}>
      <div style = {{width: "80%", margin: "0 auto"}}>
        <Header />
        <Divider style={{ borderColor: "white", margin: "50px 0" }}/>
        {poems.map((item, index) => 
          <>
              <Row key={index} style={{ marginBottom: '1rem'}}>
                <Col span = {24}>
                  <Poetry key={index} {...item} />
                </Col>
              </Row>
              <Divider style={{ borderColor: "white", margin: "50px 0" }}/>
          </>    
        )}
        <Footer />
        </div>
    </div>
  )
}

export default App
