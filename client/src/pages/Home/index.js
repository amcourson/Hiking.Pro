import { Button, Container, Row, Col } from 'react-bootstrap'
import Select from 'react-select'
//import AsyncSelect from 'react-select/async'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import citiesImport from './us_cities.json'
import { useStoreContext } from "../../utils/GlobalState";
import { LOGIN } from '../../utils/actions';
import './Home.css'
let axios = require('axios').default

function Home(props) {
    let [citySelectId, setCitySelectId] = useState(null)
    const [state, dispatch] = useStoreContext();

    let cities = []
    citiesImport.map((city, i) => {
        cities.push({
            label: `${city.name}, ${city.state}`,
            value: city.id
        })
    })


    async function register() {
        if (
            !(document.getElementById('email-input').value == '') &&
            !(document.getElementById('password-input').value == '') &&
            (document.getElementById('password-input').value == document.getElementById('password-input-confirm').value) &&
            citySelectId
        ) {
            try {
                const response = await axios('/api/users/register', {
                    method: 'post',
                    data: {
                        email: document.getElementById('email-input').value,
                        password: document.getElementById('password-input-confirm').value,
                        cityId: citySelectId
                    }
                })
                dispatch({
                    type: LOGIN,
                    cred: {
                        ...response.data.user,
                        loggedIn: true,
                        authToken: response.data.token
                    }
                })
                props.setLogin(response.data)
            } catch (err) {
                console.error(err)
            }
        }
    }

    let queryCities = (q) => {
        axios.get(`/api/cities/?q=${q}`).then(r => {
            let options = []
            r.data.map(city => options.push({ label: `${city.name}, ${city.state}`, value: city.id }))
            return options
        }).catch(e => {
            console.error(e)
        })
    }

    return (
        <Container>
            <Row className='justify-content-center'>
                <header>
                    <h1>Welcome to Hiking.Pro</h1>
                </header>
            </Row>
            <Row className='justify-content-center'>
                <Col className="col-6 justify-content-center">

                    <h3><label htmlFor='city-input' className="form-label">Choose a location</label></h3>
                    <div className='city-input'>
                        <Select
                            onChange={(selected) => setCitySelectId(selected.value)}
                            options={cities.slice(0, 10)}
                        />
                    </div>

                    <div className='dropdown'></div>

                </Col>
                <Col className="col-6">
                    <main>
                        <div>
                            <form className="form-group mx-auto">
                                <h3>Register your Account</h3>
                                <label htmlFor='email-input' className="form-label">Enter your email</label> <input className="form-control mx-auto" id='email-input' name='email-input' type='email'></input>
                                <label htmlFor='password-input' className="form-label">Enter a password</label> <input className="form-control mx-auto" id='password-input' name='password-input' type='password'></input>
                                <label htmlFor='password-input-confirm' className="form-label">Confirm password</label> <input className="form-control mx-auto" id='password-input-confirm' name='password-input-confirm' type='password'></input>
                                <Button onClick={register} variant='primary'>Register</Button>
                            </form>
                        </div>
                        <Link to='/login'>Already have an account? Click here to log in</Link>
                    </main>
                </Col>
            </Row>
        </Container>
    )
}

export default Home