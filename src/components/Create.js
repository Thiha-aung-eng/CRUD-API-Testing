import axios from 'axios';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    let Navigate = useNavigate();

    const postData = () => {
        axios.post(`https://62bc75a4eff39ad5ee260012.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            Navigate('/read')
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}