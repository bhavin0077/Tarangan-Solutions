import { Form,  Button, Card, Row } from "antd";
import EmailService  from "../services/email";
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import PositionedPopper from './contact'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  
  const Product = () => {
    const onFinish = (values) => {
      console.log(values);
      EmailService.sendEmail(values)
    };

  return (
<div> 

<div id="cards_landscape_wrap-2">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                        <div class="card-flyer" >                           
                                <div class="image-box" >
                                    <img style={{height:"0%"}} src="/images/pack.jpg" alt="" />
                                </div>
                               
                            </div>
                          
                      
                </div>
             
                <div class="col-xs-6 col-sm-12 col-md-12 col-lg-6">   
                        <div class="card-flyer">                            
                                <div class="image-box">
                                    <h1 style={{fontSize:"30px"}}> eCommerce Designing & Development Packages</h1>
                                    <hr />
                                    <h2> 
                                Rs 400.00 – Rs 1,400.00
                                </h2>

<FormStyle>
<div class="d-flex justify-content-center">
                                <Row>
      <Card title="Number of Caterogy Pages: Choose number of pages" style={{ width: 500 }}>
        <Form layout="vertical" name="nest-messages" onFinish={onFinish}>
         
          <Form.Item name="pages" label="1 to 5, 6 to 10, 11 to 15, 16 to 20 " >
          <TextField
          id="outlined-password-input"
          label="pages..."
          autoComplete="current-password"
          variant="outlined"
        />
          </Form.Item>
          <br />
          <Form.Item name="from_name">            
            <TextField
          id="outlined-password-input"
          label="Your Name"
          autoComplete="current-password"
          variant="outlined"
        />
          </Form.Item>
         <br />
          <Form.Item
            name="to_email"
            rules={[{ type: "email" }]}
          >
             <TextField
          id="outlined-password-input"
          label="email"
          autoComplete="current-password"
          variant="outlined"
        />
          </Form.Item>
          <br />
          <Form.Item name="message" >
          <TextField
          id="outlined-password-input"
          label="Message"
          autoComplete="current-password"
          variant="outlined"
        />
          </Form.Item>
          <br />

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Send email
            </Button>
          </Form.Item>
          <br />

        </Form>
      </Card>
    </Row>
    </div>
    </FormStyle>
                                </div>
                            </div>                  
                </div>
              
            </div>
        </div>
    </div>

    <PositionedPopper />
   
</div>



    );
    

}



const FormStyle = styled.section`

Button{
  width:50%;
}

`


export default Product;
