import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Read() {

    const [APIData, setData] = useState([]);

    useEffect(() => {
        axios.get('https://62bc75a4eff39ad5ee260012.mockapi.io/fakeData').then((response) => {
            setData(response.data);
        })
    }, [])

    const getData = () => {
        axios.get(`https://62bc75a4eff39ad5ee260012.mockapi.io/fakeData/`)
            .then((getData) => {
                setData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://62bc75a4eff39ad5ee260012.mockapi.io/fakeData/${id}`).then(() => {
            getData();
        })

    }

    const setUpdateData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        APIData.map((data) => {
                            return (
                                <Table.Row>
                                    <Table.Cell>{data.firstName}</Table.Cell>
                                    <Table.Cell>{data.lastName}</Table.Cell>
                                    <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>

                                    <Link to='/update'>
                                        <Table.Cell>
                                            <Button onClick={() => setUpdateData(data)}>Update</Button>
                                        </Table.Cell>
                                    </Link>


                                    <Table.Cell>
                                        <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                    </Table.Cell>


                                </Table.Row>
                            )
                        })
                    }


                </Table.Body>

            </Table>
        </div>
    )
}