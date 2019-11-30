import styled from "styled-components"

const Button = styled.button`
    font-size: 20px;
    padding: 12px 15px;
    min-width: 100px;
    boder:none;
    background: ${props => {
        switch (props.type) {
            case 'add':
                return "#07DC00"
            case 'update':
                return ('#29FFF5')
            case 'cancle':
                return ('#FF4D29')
            default:
                return ('gray')
        }
    }
    };
    border-radius: 3px;
`
export default Button;