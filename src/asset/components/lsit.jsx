import React from 'react'
import { styled } from 'styled-components'

export default function lsit(props) {
    return (
        <ListTable>
            <tbody>
                <tr>
                    <th>{props.sidoArray}</th>
                    <th>{props.tourNameArray}</th>
                    <th>{props.addressArray}</th>
                </tr>
            </tbody>
        </ListTable >
    )
}

const ListTable = styled.table`
    display: flex;
    justify-content: center;
    >tbody{
        >tr{
            >th{
                font-weight: normal;
                width: 350px;
                height: 55px;
                background-color: #eee;
            }
            >th:first-child{
                width: 250px;
            }
            >th:last-child{
                width: 600px;
            }
        }
    }
`