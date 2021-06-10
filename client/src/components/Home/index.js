import { Button, Container, Row, Col } from 'react-bootstrap'
import Async, { makeAsyncSelect } from 'react-select/async'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import citiesImport from './us_cities.json'
import './Home.css'
let axios = require('axios').default

function Home(props) {
    let [cityOption, setCityOption] = useState(null)

    let cities = []
    citiesImport.map((city, i) => {
        cities.push({
            label: `${city.name}, ${city.state}`,
            value: city
        })
    })

    let register = () => {
        if (
            !(document.getElementById('email-input').value == '') && 
            !(document.getElementById('password-input').value == '') && 
            (document.getElementById('password-input').value == document.getElementById('password-input-confirm').value)
        ) {
            axios('/api/users/register', {
                method: 'post',
                data: {
    
                }
            })
        }
    }

    return (
        <Container>
            <Row className='justify-content-center'>
                <header>
                    <img src='logo.png'></img>
                    <h1>Welcome to Hiking.Pro</h1>
                </header>
                <main>
                    <div className='text-center'>
                        <Select isClearable isSearchable onChange={(options) => {
                            console.log(options)
                            setCityOption(options)
                            console.log(cityOption)
                        }} options={cities}/>
                        
                    </div>
                    <Link to='/login'>Already have an account? Click here to log in</Link>
                    <div className='dropdown'></div>
                    <div>
                        <form>
                            <h3>Finish your registration</h3>
                            <label for='email-input'>Enter your email</label> <input id='email-input' name='email-input' type='email'></input>
                            <label for='password-input'>Enter a password</label> <input id='password-input' name='password-input' type='password'></input>
                            <label for='password-input-confirm'>Confirm password</label> <input id='password-input-conirm'></input>
                            <Button onclick={register} variant='primary'>Register</Button>
                        </form>
                    </div>
                </main>
            </Row>
        </Container>
    )
}

export default Home