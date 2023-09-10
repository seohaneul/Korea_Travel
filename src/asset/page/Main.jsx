import axios from 'axios';
import React, { useEffect, useState } from 'react';
import List from '../components/lsit';
import Search from '../components/search';
import Header from '../components/header';
import { styled } from 'styled-components';
import { render } from '@testing-library/react';

export default function Main() {
    const [sidoArray, setSidoArray] = useState([]);
    const [tourNameArray, setTourNameArray] = useState([]);
    const [addressArray, setAddressArray] = useState([]);
    useEffect(() => {
        axios.get("http://api.kcisa.kr/openapi/service/rest/convergence2018/conver10?",
            {
                params:
                {
                    serviceKey: "ca66020d-7dbe-4983-a2a5-b388d638259f",
                    numOfRows: '400',
                    pageNo: '1'
                }
            })
            .then(({ data }) => {
                const item = data.response.body.items.item;
                // console.log(item)
                item.forEach((item, el) => {
                    sidoArray[el] = item.sido;
                    tourNameArray[el] = item.tourName;
                    if (item.address == null) {
                        addressArray[el] = item.address2;
                    } else {
                        addressArray[el] = item.address;
                    }
                    render(
                        <List
                            sidoArray={sidoArray[el]}
                            tourNameArray={tourNameArray[el]}
                            addressArray={addressArray[el]}
                        />
                    )
                });
                setSidoArray(sidoArray)
                setTourNameArray(tourNameArray)
                setAddressArray(addressArray)
            })
            .catch((err) => { console.error(err) })


    }, [])

    return (
        <>
            <Header />
            <Search />
            <ListTable>
                <thead>
                    <tr>
                        <th>시/도</th>
                        <th>장소명</th>
                        <th>주소</th>
                    </tr>
                </thead>
            </ListTable >
        </>
    )
}

const ListTable = styled.table`
    margin: 10px auto 0;
    >thead{
        >tr{
            >th{
                width: 350px;
                height: 55px;
                background-color: #5568a3;
                color: #fff;
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
