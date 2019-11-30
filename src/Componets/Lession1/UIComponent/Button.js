import styled from "styled-components"

const Button = styled.button`
    font-size: 15px;
    padding: 12px 15px;
    width: 100px;
    background: ${props => {
        switch (props.type) {
            case 'add':
                return "#07DC00"
            case 'edit':
                return "#07DC00"
            case 'update':
                return ('#07DC00')
            case 'cancle':
                return ('#fff')
            case 'delete':
                return ('#FF4D29')
            default:
                return ('#fff')
        }
    }
    };
    transition: opacity 0.5s   ;
    border-radius: 3px;
    cursor: pointer;
    :hover{
        opacity:80%;
        border: 2px gray solid;
    }

`
export default Button;