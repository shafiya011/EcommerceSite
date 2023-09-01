import { List } from "antd";
import  { FooterStyle, FooterList }  from "../stylings";
import {FooterUl} from "../stylings"

import React from 'react'

const FooterComp = () => {
  return (
    
        <FooterStyle>
            <FooterUl>
                <FooterList>About</FooterList>
                <FooterList>Contact us</FooterList>
                <FooterList>Help</FooterList>
                </FooterUl>
            
        </FooterStyle>
      
    
  )
}

export default FooterComp

