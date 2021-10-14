import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return (
        <button onClick={onclick} style={{ backgroundColor:color}} 
        className='btn'>
            {text}
        </button>
    )
}


Button.defaultProps = {
    color: 'indigo'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onCLick: PropTypes.func,
}

export default Button
