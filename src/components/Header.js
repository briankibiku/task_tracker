import PropTypes from 'prop-types' // impt to import this
import Button from './Button'

// rafce to create a react component using and arrow function 
const Header = (props) => {

    const onClick = () => {
        alert('I was clicked');
        console.log('I have been clicked')
    }
    return (
        <header className='header'>
            {/* inline css styling */}
            <h1 style={{ color: 'black', background: 'red' }}>{props.title}</h1>
            <Button onClick={onClick} color='green' text='Add' />
            {/* <h1 style={headerStyle}>{props.title}</h1> */}

        </header>
    )
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// css style variable
// const headerStyle = { color: 'red' }

export default Header
