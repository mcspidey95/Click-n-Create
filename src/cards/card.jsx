import React from 'react'
import styled from'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQrcode } from '@fortawesome/free-solid-svg-icons'
import { faEraser } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faBrush } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'

const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`
const Card = styled.a`
    opacity: 0.7;
    width: 180px;
    height: 150px;
    text-decoration: none;
    background-color: #211b2b;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    &:hover ${Button} {
        display: block;
    }
`

const Icon = styled.div`
    font-size: 40px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
`

const Title = styled.div`
    font-size: 15px;
    color: ${({ theme }) => theme.text_secondary};
`

export const ToolList= [
  {
    name: "QR Code Generator",
    icon: <FontAwesomeIcon icon={faQrcode} />,
  },
  {
    name: "Background Remover",
    icon: <FontAwesomeIcon icon={faEraser} />,
  },
  {
    name: "Code To Image Generator",
    icon: <FontAwesomeIcon icon={faCode} />,
  },
  {
    name: "Text To Speech/ Speech To Text",
    icon: <FontAwesomeIcon icon={faComment} />,
  },
  {
    name: "Color Palette Extractor",
    icon: <FontAwesomeIcon icon={faBrush} />,
  },
  {
    name: "Text Extractor from Image",
    icon: <FontAwesomeIcon icon={faQuoteRight} />,
  },
];

const ToolCard = ({tool}) => {
  return (
    <Card href={tool.link} target="_blank">
      <Icon>{tool.icon}</Icon>
      <Title>{tool.name}</Title>
    </Card>
  )
}

export default ToolCard