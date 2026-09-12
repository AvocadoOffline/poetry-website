import { Row, Col } from 'antd'
import type { PoetryProps } from './poems'
import './App.css'

export const Poetry = ({ title, date, poetry, description }: PoetryProps) => {
  return (
    <>
        <Row style={{ marginBottom: '1rem', textAlign: "left" }}>
            <Col span={24} className = "poetry-title">《{title}》{date}</Col>
        </Row>
        <Row gutter={12}>
            <Col
                span={12}
                className="poetry-content"
                style={{
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
                >
                {description.map((sentence, i) => (
                    <div key={i}>{sentence}</div>
                ))}
            </Col>
            <Col
                span={12}
                className="poetry-content"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                }}
                >
                <div>
                    {poetry.map((sentence, i) => (
                        <div style = {{textAlign: "left"}} key={i}>{sentence}</div>
                    ))}
                </div>
            </Col>
        </Row>
    </>
  )
}