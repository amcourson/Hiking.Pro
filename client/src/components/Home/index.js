import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home(props) {
    return (
        <div>
            <header>
                {/* <img src='logo.png'></img> */}
                <h1>Welcome to Hiking.Pro</h1>
            </header>
            <main>
                <div>
                    <input placeholder='Enter your location' type='text'></input>
                    <button><i className='location-detect-icon'></i></button>
                </div>
                <Link to='/login'>Already have an account? Click here to log in</Link>
                <div className='dropdown'></div>
                <div>
                    <form>
                        <h3>Finish your registration</h3>
                        <label for='email-input'>Enter your email</label> <input id='email-input' name='email-input' type='email'></input>
                        <label for='password-input'>Enter a password</label> <input id='password-input' name='password-input' type='password'></input>
                        <label for='password-input-confirm'>Confirm password</label> <input id='password-input-conirm'></input>
                        <Button variant='primary'>Register</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Home